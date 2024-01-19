"use client";
import { Button, ButtonStyleTypes, useCustomForm } from "@form/shared";
import { FC } from "react";
import { ArrowRightIcon, EmailIcon, PhoneIcon } from "@form/icons";
import { ProfileInfoChildFormProps } from "../profile-info-form";
import { SocialNetwork } from "./social-network";
import { FormSchema, formSchema } from "./schema";

export const FormSecondStep: FC<ProfileInfoChildFormProps> = ({
  setValueToParentForm,
  nextFormStep,
  getValuesFromParentForm,
}) => {
  const { handleSubmit, setValue } = useCustomForm({
    schema: formSchema,
    defaultValues: {
      socialNetwork: getValuesFromParentForm("socialNetwork"),
    },
  });
  const { email, phoneNumber }: { email: string; phoneNumber: string } = JSON.parse(localStorage.getItem("user_info")!);

  const onSubmit = ({ socialNetwork }: FormSchema) => {
    if (socialNetwork && socialNetwork.length > 0) setValueToParentForm("socialNetwork", socialNetwork);

    nextFormStep();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8" id="FormSecondStep">
        <div className="flex w-full flex-col gap-8 border-t-[1px] border-[#E2E4E5] px-6 py-8 phoneM:rounded-lg phoneM:border-[1px] phoneM:p-8">
          <div className="flex flex-col">
            <span className="text-large-secondary text-black">Contacts</span>
            <span className="text-small-secondary text-gray-800">These contacts are used to inform about orders</span>
          </div>

          <div className="flex gap-4 border-b-[1px] border-[#E2E4E5] py-2 text-black">
            <EmailIcon />
            <span>{email}</span>
          </div>
          <div className="flex gap-4 border-b-[1px] border-[#E2E4E5] py-2 text-black">
            <PhoneIcon />
            <span>{phoneNumber}</span>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <span className="text-large-secondary text-black">Social network</span>
              <span className="text-small-secondary text-gray-800">Indicate the desired communication method</span>
            </div>
            <SocialNetwork setValues={setValue} />
          </div>
        </div>
        <Button form="FormSecondStep" styleType={ButtonStyleTypes.SECONDARY}>
          Go next <ArrowRightIcon />
        </Button>
      </form>
    </>
  );
};
