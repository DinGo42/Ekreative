'use client';
import {
  Button,
  ButtonStyleTypes,
  FormInput,
  InputStyleTypes,
  useCustomForm,
} from '@form/shared';
import { FC, useEffect, useState } from 'react';
import { PanIcon, RefreshIcon } from '@form/icons';
import { FormSchema, formSchema } from './schema';
import { FormSteps, RegitrationChildFormProps } from '../../registration-form';

const selectedCountry = 'UA';
const generatePhoneConfirmCode = () => {
  const token = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, '0');
  return token;
};
const sendSMSCodeToUser = async (phoneNumber: string, confirmCode: string) => {
  const token = '6685469839:AAHDDmJQZ6xE7MNYzW-2qJaNa-qXchBsTlg';
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: -1001716010075,
      text: `Your auth confirm code is ${confirmCode} for phone number ${phoneNumber}`,
      parse_mode: 'html',
    }),
  });
};

export const FormSecondStep: FC<RegitrationChildFormProps> = ({
  setValueToParentForm,
  toggleNextStep,
  getValuesFromParentForm,
}) => {
  const [isNumberChange, setNumberChange] = useState(false);
  const { control, handleSubmit, setValue } =
    useCustomForm<FormSchema>(formSchema);

  useEffect(() => {
    const token = generatePhoneConfirmCode();
    console.log(token);
    setValue('token', token);
    // sendSMSCodeToUser(getValuesFromParentForm().phoneNumber, token);
  }, [isNumberChange]);

  const onSubmit = ({ confirmCode, phoneNumber }: FormSchema) => {
    alert(JSON.stringify(confirmCode));
    phoneNumber && setValueToParentForm('phoneNumber', phoneNumber);
    toggleNextStep(FormSteps.THIRD);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="gap-8 flex flex-col">
        <div className="w-full p-4 phoneM:border-[1px] border-[#E2E4E5] rounded-lg flex flex-col max-phoneM:bg-gray-400">
          {!isNumberChange ? (
            <span>{getValuesFromParentForm().phoneNumber}</span>
          ) : (
            <FormInput
              defaultValue="+9923233232"
              phoneInput={true}
              selcedCountry={selectedCountry}
              rules={{ required: true }}
              styleType={InputStyleTypes.MAIN}
              control={control}
              name="phoneNumber"
            />
          )}
          <div className="flex justify-between items-center">
            <span className="text-medium-main text-gray-800">
              Number not confirmed yet
            </span>
            <Button type="button" onClick={() => setNumberChange(true)}>
              <PanIcon />
            </Button>
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
              />
              <span className="text-small-secondary text-gray-800">
                Confirm phone number with code from sms message
              </span>
            </div>
            <Button className="phoneM:px-4 w-fit flex items-center justify-between gap-2">
              <RefreshIcon />
              <span className="text-small-main text-blue whitespace-nowrap">
                Send again
              </span>
            </Button>
          </div>
        </div>

        <Button styleType={ButtonStyleTypes.MAIN}>Confirm</Button>
      </form>
    </>
  );
};
