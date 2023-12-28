'use client';
import { FC, useState } from 'react';
import { UseFormSetValue, UseFormGetValues } from 'react-hook-form';
import { FormSchema, formSchema } from './schema';
import { useCustomForm } from '@form/shared';
import { ProfileInfoFirstStep } from './profile-info-first-step';
import { ProfileInfoThirdStep } from './profile-info-third-step';
import { ProfileInfoSecondStep } from './profile-info-second-step';

export enum FormSteps {
  FIRST,
  SECOND,
  THIRD,
}

export type ProfileInfoChildFormProps = {
  setValueToParentForm: UseFormSetValue<FormSchema>;
  getValuesFromParentForm: UseFormGetValues<FormSchema>;
  toggleNextStep: (step: FormSteps) => void;
};

const formSteps = {
  [FormSteps.FIRST]: (props: ProfileInfoChildFormProps) => (
    <ProfileInfoFirstStep {...props} />
  ),
  [FormSteps.SECOND]: (props: ProfileInfoChildFormProps) => (
    <ProfileInfoSecondStep {...props} />
  ),
  [FormSteps.THIRD]: (props: ProfileInfoChildFormProps) => (
    <ProfileInfoThirdStep {...props} />
  ),
};

export const ProfileInfoForm: FC = () => {
  const [step, setNextStep] = useState(FormSteps.FIRST);
  const { setValue, getValues, handleSubmit } =
    useCustomForm<FormSchema>(formSchema);
  const submidHandler = (d: FormSchema) => {
    alert(JSON.stringify(d));
  };
  const stepHandler = (step: FormSteps) => {
    setNextStep(step);
  };
  return (
    <>
      <div className="flex flex-col max-phoneM:px-6 max-phoneM:text-center gap-4">
        <span className="text-black text-large-main">Profile info</span>
        <span className="text-gray-800 text-medium-secondary">
          Fill in the data for profile. It will take a couple of minutes. You
          only need a passport
        </span>
      </div>
      <div className="mt-4 flex flex-col gap-8">
        {formSteps[step]({
          getValuesFromParentForm: getValues,
          setValueToParentForm: setValue,
          toggleNextStep: stepHandler,
        })}
      </div>
    </>
  );
};
