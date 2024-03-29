"use client";
import { FC, useState } from "react";
import { UseFormSetValue, UseFormGetValues } from "react-hook-form";
import { FormSchema, formSchema } from "./schema";
import { Routes, Steps, useCustomForm } from "@form/shared";
import { useRouter } from "next/navigation";
import { FormFirstStep } from "./first-step";
import { FormSecondStep } from "./second-step";
import { FormThirdStep } from "./third-step";

export type ProfileInfoChildFormProps = {
  setValueToParentForm: UseFormSetValue<FormSchema>;
  getValuesFromParentForm: UseFormGetValues<FormSchema>;
  nextFormStep: () => void;
  prevFormStep: () => void;
};

const formSteps: ((props: ProfileInfoChildFormProps) => JSX.Element)[] = [
  (props: ProfileInfoChildFormProps) => <FormFirstStep {...props} />,
  (props: ProfileInfoChildFormProps) => <FormSecondStep {...props} />,
  (props: ProfileInfoChildFormProps) => <FormThirdStep {...props} />,
];

export const ProfileInfoForm: FC = () => {
  const [step, setStep] = useState(0);
  const router = useRouter();
  const { setValue, getValues, handleSubmit } = useCustomForm({
    schema: formSchema,
  });

  const submitHandler = (data: FormSchema) => {
    console.log("user profile info", data);
    router.push(Routes.HOME);
  };

  const nextStep = () => {
    const nextStep = step + 1;
    if (nextStep === Object.keys(formSteps).length) {
      handleSubmit(submitHandler, e => console.log(e))();
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
            <span className="text-large-main text-black">Profile info</span>
            <span className="text-medium-secondary text-gray-800">
              Fill in the data for profile. It will take a couple of minutes. You only need a passport
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
