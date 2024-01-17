"use client";
import { FC, useState } from "react";
import {
  Button,
  ButtonStyleTypes,
  DropDown,
  FormInput,
  Input,
  InputStyleTypes,
  containsInWord,
  generateToken,
  sendTokenToUserPhone,
  useCustomForm,
} from "@form/shared";
import { Country, getCountries, getCountryCallingCode } from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";
import { FormSchema, formSchema } from "./schema";
import { RegistrationChildFormProps } from "../registration-form";

export const FormFirstStep: FC<RegistrationChildFormProps> = ({
  setValueToParentForm,
  nextFormStep,
  getValuesFromParentForm,
}) => {
  const [selectedCountry, setCountry] = useState<Country>("UA");
  const [searchCountry, setSearchCountry] = useState("");

  const { control, handleSubmit } = useCustomForm({
    schema: formSchema,
    defaultValues: {
      phoneNumber: getValuesFromParentForm("phoneNumber"),
    },
  });

  const onSubmit = ({ phoneNumber }: FormSchema) => {
    setValueToParentForm("phoneNumber", phoneNumber);
    nextFormStep();

    const token = generateToken();
    setValueToParentForm("token", token);
    sendTokenToUserPhone(phoneNumber, token);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8" id="FormFirstStep">
        <div className="w-full rounded-lg border-[1px] border-[#E2E4E5] p-8">
          <span className="text-medium-main-secondary text-black">Enter your phone number</span>
          <div className="flex gap-4">
            <DropDown
              dropDownItemArray={getCountries().filter(country => containsInWord(searchCountry, en[country]))}
              titleContent={<span>+{getCountryCallingCode(selectedCountry)}</span>}
              dropDownContentHeader={
                <Input
                  styleType={InputStyleTypes.MAIN}
                  className="sticky top-0 px-2 py-2"
                  onChange={e => setSearchCountry(e.target.value)}
                />
              }
              dropDownItem={country => (
                <Button onClick={() => setCountry(country)} className="w-full p-2 text-start hover:bg-gray-400">
                  {en[country]} +{getCountryCallingCode(country)}
                </Button>
              )}
            />
            <FormInput
              phoneInput={true}
              inputWrapperClassName="w-full"
              selectedCountry={selectedCountry}
              rules={{ required: true }}
              styleType={InputStyleTypes.MAIN}
              control={control}
              name="phoneNumber"
            />
          </div>
        </div>
        <Button form="FormFirstStep" styleType={ButtonStyleTypes.MAIN}>
          Send code
        </Button>
      </form>
    </>
  );
};
