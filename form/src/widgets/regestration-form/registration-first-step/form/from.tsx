'use client';
import { FC, useState } from 'react';
import {
  Button,
  ButtonStyleTypes,
  DropDown,
  FormInput,
  Input,
  InputStyleTypes,
  containsInWord,
  useCustomForm,
} from '@form/shared';
import {
  Country,
  getCountries,
  getCountryCallingCode,
} from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en.json';
import { FormSchema, formSchema } from './schema';
import { FormSteps, RegitrationChildFormProps } from '../../registration-form';

export const FormFirstStep: FC<RegitrationChildFormProps> = ({
  setValueToParentForm,
  toggleNextStep,
}) => {
  const [selcedCountry, setCountry] = useState<Country>('UA');
  const [searchCountry, setSearchCountry] = useState('');

  const { control, handleSubmit } = useCustomForm<FormSchema>(formSchema);

  const onSubmit = ({ phoneNumber }: FormSchema) => {
    alert(JSON.stringify({ phoneNumber }));

    setValueToParentForm('phoneNumber', phoneNumber);
    toggleNextStep(FormSteps.SECOND);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full p-8 border-[1px] border-[#E2E4E5] rounded-lg gap-8 flex flex-col"
      >
        <span className="text-black text-medium-main-secondary">
          Enter your phone number
        </span>
        <div className="flex gap-4">
          <DropDown
            dropDownItemArray={getCountries().filter((country) =>
              containsInWord(searchCountry, en[country])
            )}
            titleContent={<span>+{getCountryCallingCode(selcedCountry)}</span>}
            dropDownContentHeader={
              <Input
                styleType={InputStyleTypes.MAIN}
                className="py-2 px-2 sticky top-0"
                onChange={(e) => setSearchCountry(e.target.value)}
              />
            }
            dropDownItem={(country) => (
              <Button
                onClick={() => setCountry(country)}
                className="text-start p-2 w-full hover:bg-gray-400"
              >
                {en[country]} +{getCountryCallingCode(country)}
              </Button>
            )}
          />
          <FormInput
            phoneInput={true}
            inputWrapperClassName="w-full"
            selcedCountry={selcedCountry}
            rules={{ required: true }}
            styleType={InputStyleTypes.MAIN}
            control={control}
            name="phoneNumber"
          />
        </div>
        <Button styleType={ButtonStyleTypes.MAIN}>Send code</Button>
      </form>
    </>
  );
};
