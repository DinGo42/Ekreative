'use client';
import { FC, useEffect, useState } from 'react';
import { ComplatedIcon, ShownIcon, UnShownIcon } from '@form/icons';
import {
  Button,
  ButtonStyleTypes,
  FormInput,
  InputStyleTypes,
  useCustomForm,
} from '@form/shared';
import { FormSchema, formSchema, passwordSchema } from './schema';
import { RegitrationChildFormProps } from '../../registration-form';

export const FormThirdStep: FC<RegitrationChildFormProps> = ({
  setValueToParentForm,
}) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordMessage, setMessage] = useState('');
  const { control, handleSubmit, watch } =
    useCustomForm<FormSchema>(formSchema);

  const onSubmit = ({ email, password }: FormSchema) => {
    alert(JSON.stringify({ email, password }));
    setValueToParentForm('email', email);
    setValueToParentForm('password', password);
  };

  const passwordValue = watch('password');
  useEffect(() => {
    const passwordChecker = () => {
      try {
        passwordSchema.parse(passwordValue);
        setMessage('Good password');
      } catch (error) {
        setMessage('');
      }
    };
    passwordChecker();
  }, [passwordValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="gap-8 flex flex-col">
      <div className="w-full p-4 phoneM:border-[1px] border-[#E2E4E5] rounded-lg flex flex-col max-phoneM:bg-gray-400">
        <span>+1 555 555-1234</span>
        <div className="flex gap-1 items-center">
          <ComplatedIcon />
          <span className="text-medium-main text-gray-800">
            Number confirmed
          </span>
        </div>
      </div>
      <div className="w-full p-8 phoneM:border-[1px] gap-8 border-[#E2E4E5] rounded-lg flex flex-col">
        <FormInput
          control={control}
          name="email"
          styleType={InputStyleTypes.MAIN}
          inputWrapperClassName="flex-col-reverse items-start"
        >
          <span className="text-black text-medium-main-secondary">
            Enter your email
          </span>
        </FormInput>
        <div className="flex flex-col gap-2">
          <span className="text-black text-medium-main-secondary">
            Set a password
          </span>

          <FormInput
            control={control}
            name="password"
            inputWrapperClassName="items-center"
            type={passwordShown ? 'text' : 'password'}
            styleType={InputStyleTypes.MAIN}
            className={'pr-8'}
          >
            <Button
              type="button"
              className="absolute right-0"
              onClick={() => setPasswordShown((prev) => !prev)}
            >
              {passwordShown ? <ShownIcon /> : <UnShownIcon />}
            </Button>
          </FormInput>
          {passwordMessage && (
            <div className="flex gap-1 items-center">
              <ComplatedIcon fill="#34C759" />
              <span className="text-green text-small-secondary">
                {passwordMessage}
              </span>
            </div>
          )}
        </div>
      </div>
      <Button styleType={ButtonStyleTypes.SECONDARY}>Register now</Button>
    </form>
  );
};
