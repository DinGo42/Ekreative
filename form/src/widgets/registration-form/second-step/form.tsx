'use client';
import {
  Button,
  ButtonStyleTypes,
  FormInput,
  InputStyleTypes,
  sendTokenToUserPhone,
  useCustomForm,
} from '@form/shared';
import { FC, useState } from 'react';
import { CompletedIcon, PanIcon, RefreshIcon } from '@form/icons';
import { FormSchema, formSchema } from './schema';
import { RegistrationChildFormProps } from '../registration-form';
import { generateToken } from '@form/shared/utils/generate-token';

export const FormSecondStep: FC<RegistrationChildFormProps> = ({
  setValueToParentForm,
  nextFormStep,
  getValuesFromParentForm,
}) => {
  const [isNumberChange, setNumberChange] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    setFocus,
    formState: { errors },
  } = useCustomForm({
    schema: formSchema,
    defaultValues: {
      token: getValuesFromParentForm('token'),
    },
  });

  const userPhoneNumber = getValuesFromParentForm().phoneNumber;
  const userNewPhoneNumber = getValues('phoneNumber');

  const sendCode = () => {
    const token = generateToken();
    setValue('token', token);
    sendTokenToUserPhone(userNewPhoneNumber || userPhoneNumber, token);
  };

  const onSubmit = ({ phoneNumber, token }: FormSchema) => {
    phoneNumber && setValueToParentForm('phoneNumber', phoneNumber);
    setValueToParentForm('token', token);
    nextFormStep();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="gap-8 flex flex-col"
        id="FormSecondStep"
      >
        <div className="w-full p-4 phoneM:border-[1px] border-[#E2E4E5] rounded-lg flex flex-col max-phoneM:bg-gray-400">
          {isNumberChange ? (
            <FormInput
              value={userPhoneNumber}
              international={false}
              phoneInput={true}
              styleType={InputStyleTypes.MAIN}
              control={control}
              name="phoneNumber"
            />
          ) : (
            <span>{userNewPhoneNumber || userPhoneNumber}</span>
          )}
          <div className="flex justify-between items-center">
            <span className="text-medium-main text-gray-800">
              Number not confirmed yet
            </span>
            {isNumberChange ? (
              <Button
                disabled={!!errors.phoneNumber}
                type="button"
                onClick={() => {
                  if (userNewPhoneNumber) sendCode();
                  setNumberChange(false);
                }}
              >
                <CompletedIcon fill={!!errors.phoneNumber && '#34C759'} />
              </Button>
            ) : (
              <Button
                type="button"
                onClick={() => {
                  setNumberChange(true);
                  setFocus('phoneNumber');
                }}
              >
                <PanIcon />
              </Button>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 max-phoneM:px-4">
          <span className="text-medium-main text-black">Confirmation code</span>
          <div className="flex max-phoneM:gap-4 phoneM:items-center max-phoneM:flex-col">
            <div className="flex justify-between  w-full flex-col gap-2">
              <FormInput
                control={control}
                styleType={InputStyleTypes.MAIN}
                inputWrapperClassName="w-full"
                name="confirmCode"
                maxLength={4}
                placeholder="- - - -"
              />
              <span className="text-small-secondary text-gray-800">
                Confirm phone number with code from sms message
              </span>
            </div>
            <Button
              className="phoneM:px-4 w-fit flex items-center justify-between gap-2"
              onClick={sendCode}
            >
              <RefreshIcon />
              <span className="text-small-main text-blue whitespace-nowrap">
                Send again
              </span>
            </Button>
          </div>
        </div>

        <Button form="FormSecondStep" styleType={ButtonStyleTypes.MAIN}>
          Confirm
        </Button>
      </form>
    </>
  );
};
