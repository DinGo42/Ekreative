"use client";
import { FC, useEffect, useState } from "react";
import { CompletedIcon, ShownIcon, UnShownIcon } from "@form/icons";
import { Button, ButtonStyleTypes, FormInput, InputStyleTypes, useCustomForm } from "@form/shared";
import { FormSchema, formSchema, passwordSchema } from "./schema";
import { RegistrationChildFormProps } from "../registration-form";

export const FormThirdStep: FC<RegistrationChildFormProps> = ({
  setValueToParentForm,
  nextFormStep,
  getValuesFromParentForm,
}) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordMessage, setMessage] = useState("");
  const { control, handleSubmit, watch } = useCustomForm({
    schema: formSchema,
    defaultValues: {
      email: getValuesFromParentForm("email"),
      password: getValuesFromParentForm("password"),
    },
  });

  const onSubmit = ({ email, password }: FormSchema) => {
    setValueToParentForm("email", email);
    setValueToParentForm("password", password);
    nextFormStep();
  };

  const passwordValue = watch("password");
  useEffect(() => {
    const passwordChecker = () => {
      try {
        passwordSchema.parse(passwordValue);
        setMessage("Good password");
      } catch (error) {
        setMessage("");
      }
    };
    passwordChecker();
  }, [passwordValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8" id="FormThirdStep">
      <div className="max-phoneM:bg-gray-400 phoneM:border-[1px] flex w-full flex-col rounded-lg border-[#E2E4E5] p-4">
        <span>{getValuesFromParentForm("phoneNumber")}</span>
        <div className="flex items-center gap-1">
          <CompletedIcon />
          <span className="text-medium-main text-gray-800">Number confirmed</span>
        </div>
      </div>
      <div className="phoneM:border-[1px] flex w-full flex-col gap-8 rounded-lg border-[#E2E4E5] p-8">
        <FormInput
          control={control}
          name="email"
          styleType={InputStyleTypes.MAIN}
          inputWrapperClassName="flex-col-reverse items-start"
        >
          <span className="text-medium-main-secondary text-black">Enter your email</span>
        </FormInput>
        <div className="flex flex-col gap-2">
          <span className="text-medium-main-secondary text-black">Set a password</span>

          <FormInput
            control={control}
            name="password"
            inputWrapperClassName="items-center"
            type={passwordShown ? "text" : "password"}
            styleType={InputStyleTypes.MAIN}
            className={"pr-8"}
          >
            <Button type="button" className="absolute right-0" onClick={() => setPasswordShown(prev => !prev)}>
              {passwordShown ? <ShownIcon /> : <UnShownIcon />}
            </Button>
          </FormInput>
          {passwordMessage && (
            <div className="flex items-center gap-1">
              <CompletedIcon fill="#34C759" />
              <span className="text-small-secondary text-green">{passwordMessage}</span>
            </div>
          )}
        </div>
      </div>

      <Button form="FormThirdStep" styleType={ButtonStyleTypes.SECONDARY}>
        Register now
      </Button>
    </form>
  );
};
