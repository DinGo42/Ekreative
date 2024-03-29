"use client";
import { Routes, Steps, userInfoStorage, useCustomForm, userAuthorizedStore } from "@form/shared";
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

const formSteps: ((props: RegistrationChildFormProps) => JSX.Element)[] = [
  (props: RegistrationChildFormProps) => (
    <>
      <ReassuringMessage />
      <FormFirstStep {...props} />
    </>
  ),
  (props: RegistrationChildFormProps) => <FormSecondStep {...props} />,
  (props: RegistrationChildFormProps) => <FormThirdStep {...props} />,
];

const { set: setUserInfo } = userInfoStorage;

const { set: setIsAuthorized } = userAuthorizedStore;

export const RegistrationForm = () => {
  const [step, setStep] = useState(0);
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

    if (nextStep === Object.keys(formSteps).length) {
      handleSubmit(submitHandler)();
      return;
    }
    if (nextStep > Object.keys(formSteps).length) return;

    setStep(nextStep);
  };
  const prevStep = () => {
    const prevStep = step - 1;
    if (prevStep < 0) return;
    setStep(prevStep);
  };

  return (
    <>
      <div className="max-tabletM:items-center flex flex-col gap-20">
        <Steps currentStep={step + 1} totalSteps={Object.keys(formSteps).length} />
        <div className="flex flex-col gap-8">
          <div className="max-tabletM:text-center max-phoneM:px-6 flex flex-col gap-4">
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
