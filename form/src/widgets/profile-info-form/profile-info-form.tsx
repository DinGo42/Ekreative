'use client';
import { FC, useState } from 'react';
import { UseFormSetValue, UseFormGetValues } from 'react-hook-form';
import { FormSchema, formSchema } from './schema';
import { Routes, Steps, useCustomForm } from '@form/shared';
import { ProfileInfoFirstStep } from './profile-info-first-step';
import { ProfileInfoThirdStep } from './profile-info-third-step';
import { ProfileInfoSecondStep } from './profile-info-second-step';
import { useRouter } from 'next/navigation';

export type ProfileInfoChildFormProps = {
  setValueToParentForm: UseFormSetValue<FormSchema>;
  getValuesFromParentForm: UseFormGetValues<FormSchema>;
  nextFormStep: () => void;
  prevFormStep: () => void;
};

const formSteps: Record<
  number,
  (props: ProfileInfoChildFormProps) => JSX.Element
> = {
  1: (props: ProfileInfoChildFormProps) => <ProfileInfoFirstStep {...props} />,
  2: (props: ProfileInfoChildFormProps) => <ProfileInfoSecondStep {...props} />,
  3: (props: ProfileInfoChildFormProps) => <ProfileInfoThirdStep {...props} />,
};

export const ProfileInfoForm: FC = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const { setValue, getValues, handleSubmit } = useCustomForm({
    schema: formSchema,
  });

  const submitHandler = (data: FormSchema) => {
    console.log('user profile info', data);
    router.push(Routes.HOME);
  };

  const nextStep = () => {
    const nextStep = step + 1;
    if (nextStep === Object.keys(formSteps).length + 1) {
      handleSubmit(submitHandler)();
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
      <div className="flex flex-col gap-20 max-tabletM:items-center">
        <Steps currentStep={step} totalSteps={Object.keys(formSteps).length} />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col max-phoneM:px-6 max-tabletM:text-center gap-4">
            <span className="text-black text-large-main">Profile info</span>
            <span className="text-gray-800 text-medium-secondary">
              Fill in the data for profile. It will take a couple of minutes.
              You only need a passport
            </span>
          </div>
          <div className="mt-4 flex flex-col gap-8">
            {formSteps[step]({
              getValuesFromParentForm: getValues,
              setValueToParentForm: setValue,
              nextFormStep: nextStep,
              prevFormStep: prevStep,
            })}
          </div>
        </div>
      </div>
    </>
  );
};
