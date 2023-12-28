import { useCustomForm } from '@form/shared';
import { useState } from 'react';
import { RegitrationFirstStep } from './registration-first-step';
import { FormSchema, formSchema } from './schema';
import { UseFormGetValues, UseFormSetValue } from 'react-hook-form';
import { RegitrationSecondStep } from './registration-second-step';
import { RegitrationThirdStep } from './registration-third-step';

export enum FormSteps {
  FIRST,
  SECOND,
  THIRD,
}
export type RegitrationChildFormProps = {
  setValueToParentForm: UseFormSetValue<FormSchema>;
  getValuesFromParentForm: UseFormGetValues<FormSchema>;
  toggleNextStep: (step: FormSteps) => void;
};

const formSteps = {
  [FormSteps.FIRST]: (props: RegitrationChildFormProps) => (
    <RegitrationFirstStep {...props} />
  ),
  [FormSteps.SECOND]: (props: RegitrationChildFormProps) => (
    <RegitrationSecondStep {...props} />
  ),
  [FormSteps.THIRD]: (props: RegitrationChildFormProps) => (
    <RegitrationThirdStep {...props} />
  ),
};

export const RegistrationForm = () => {
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
        <span className="text-black text-large-main">Registration</span>
        <span className="text-gray-800 text-medium-secondary">
          Fill in the registration data. It will take a couple of minutes. All
          you need is a phone number and e-mail
        </span>
      </div>
      <div className="mt-4 flex flex-col gap-8">
        {formSteps[step]({
          toggleNextStep: stepHandler,
          setValueToParentForm: setValue,
          getValuesFromParentForm: getValues,
        })}
      </div>
    </>
  );
};
