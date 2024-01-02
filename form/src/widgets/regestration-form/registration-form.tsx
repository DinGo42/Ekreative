'use client';
import { Routes, useCustomForm } from '@form/shared';
import { useState } from 'react';
import { RegitrationFirstStep } from './registration-first-step';
import { FormSchema, formSchema } from './schema';
import { UseFormGetValues, UseFormSetValue } from 'react-hook-form';
import { RegitrationSecondStep } from './registration-second-step';
import { RegitrationThirdStep } from './registration-third-step';
import { redirect, useRouter } from 'next/navigation';

export type RegitrationChildFormProps = {
  setValueToParentForm: UseFormSetValue<FormSchema>;
  getValuesFromParentForm: UseFormGetValues<FormSchema>;
  nextFormStep: () => void;
  prevFormStep: () => void;
};

const formSteps: Record<
  number,
  (props: RegitrationChildFormProps) => JSX.Element
> = {
  1: (props: RegitrationChildFormProps) => <RegitrationFirstStep {...props} />,
  2: (props: RegitrationChildFormProps) => <RegitrationSecondStep {...props} />,
  3: (props: RegitrationChildFormProps) => <RegitrationThirdStep {...props} />,
};

export const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const { setValue, getValues, handleSubmit } = useCustomForm({
    schema: formSchema,
  });

  const submidHandler = (data: FormSchema) => {
    console.log('user registrarion data', data);
    localStorage.setItem(
      'user_info',
      JSON.stringify({ email: data.email, phoneNumber: data.phoneNumber })
    );
    localStorage.setItem('is_authorized', JSON.stringify(true));
    router.push(Routes.PROFILE_INFO);
  };

  const nextStep = () => {
    const nextStep = step + 1;

    if (nextStep === Object.keys(formSteps).length + 1) {
      handleSubmit(submidHandler)();
      return;
    }
    if (nextStep > Object.keys(formSteps).length) return;

    setStep(nextStep);
  };
  const prevStep = () => {
    const prevStep = step - 1;
    if (prevStep < 1) return;
    setStep(prevStep);
  };

  return (
    <>
      <div className="flex flex-col max-phoneM:px-6 max-phoneM:text-center gap-4">
        <span className="text-black text-large-main">Registration</span>
        <span className="text-gray-800 text-medium-secondary">
          Fill in the registration data. It will take a couple of minutes. All
          you need is a phone number and e-mail
        </span>
      </div>
      <div className="mt-4 flex flex-col gap-8">
        {formSteps[step]({
          nextFormStep: nextStep,
          prevFormStep: prevStep,
          setValueToParentForm: setValue,
          getValuesFromParentForm: getValues,
        })}
      </div>
    </>
  );
};
