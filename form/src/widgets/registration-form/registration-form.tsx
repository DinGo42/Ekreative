"use client";
import { Routes, Steps, localStorageUtilsGenerator, useCustomForm } from "@form/shared";
import { useState } from "react";
import { FormSchema, formSchema } from "./schema";
import { UseFormGetValues, UseFormSetValue } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FormFirstStep, ReassuringMessage } from "./first-step";
import { FormSecondStep } from "./second-step";
import { FormThirdStep } from "./third-step";

export type RegistrationChildFormProps = {
  setValueToParentForm: UseFormSetValue<FormSchema>;
  getValuesFromParentForm: UseFormGetValues<FormSchema>;
  nextFormStep: () => void;
  prevFormStep: () => void;
};

const formSteps: Record<number, (props: RegistrationChildFormProps) => JSX.Element> = {
  1: (props: RegistrationChildFormProps) => (
    <>
      <ReassuringMessage />
      <FormFirstStep {...props} />
    </>
  ),
  2: (props: RegistrationChildFormProps) => <FormSecondStep {...props} />,
  3: (props: RegistrationChildFormProps) => <FormThirdStep {...props} />,
};

const { set: setUserInfo } = localStorageUtilsGenerator<{
  email: string;
  phoneNumber: string;
}>("user_info");

const { set: setIsAuthorized } = localStorageUtilsGenerator<boolean>("is_authorized");

export const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const { setValue, getValues, handleSubmit } = useCustomForm({
    schema: formSchema,
  });

  const submitHandler = (data: FormSchema) => {
    console.log("user registration data", data);

    setUserInfo({ email: data.email, phoneNumber: data.phoneNumber });

    setIsAuthorized(true);

    router.push(Routes.PROFILE_INFO);
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
          <div className="flex flex-col gap-4 max-tabletM:text-center max-phoneM:px-6">
            <span className="text-large-main text-black">Registration</span>
            <span className="text-medium-secondary text-gray-800">
              Fill in the registration data. It will take a couple of minutes. All you need is a phone number and e-mail
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
