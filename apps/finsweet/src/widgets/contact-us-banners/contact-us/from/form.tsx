"use client";
import { Button, ButtonStyleTypes, Input, InputStyleTypes } from "@finsweet/shared";
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

enum ServiceTypes {
  UI_DESIGN = "UI Design",
  WEBFLOW_DESIGN = "Webflow Design",
  FIGMA_DESIGN = "Figma Design",
}
type Inputs = {
  name: string;
  email: string;
  subject: string;
  subjectType: ServiceTypes;
  message: string;
};

export const ContactUsFrom: FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => alert(JSON.stringify(data));
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-h2 phoneM:p-20 phoneM:pb-16 phoneM:pt-14 flex w-full flex-col items-start gap-4 bg-blue-50"
    >
      <div className="tabletSPlus:grid-cols-2 grid w-full grid-flow-row grid-cols-1 gap-x-8 gap-y-6">
        <Input
          styleType={InputStyleTypes.ROUNDED_LIGHT_BLUE}
          inputWrapperClassName="flex-col-reverse"
          register={register}
          registerParams={{
            required: true,
          }}
          name="name"
          placeholder="Enter your name"
        >
          <span className="text-label-main text-black-1000">Name</span>
        </Input>

        <Input
          styleType={InputStyleTypes.ROUNDED_LIGHT_BLUE}
          inputWrapperClassName="flex-col-reverse"
          register={register}
          registerParams={{
            required: true,
          }}
          name="email"
          placeholder="Enter your email"
        >
          <span className="text-label-main text-black-1000">Email</span>
        </Input>

        <Input
          styleType={InputStyleTypes.ROUNDED_LIGHT_BLUE}
          register={register}
          inputWrapperClassName="flex-col-reverse"
          registerParams={{
            required: true,
          }}
          name="subject"
          placeholder="Enter your theme idea"
        >
          <span className="text-label-main text-black-1000">Theme</span>
        </Input>

        <div className="flex w-full flex-col">
          <span className="text-label-main text-black-1000">Type of service</span>
          <select
            {...register("subjectType", {
              required: true,
            })}
            className="text-body-main placeholder:text-black-1000 rounded-lg border-[1px] border-[#0000001f] bg-blue-50 pb-4 pl-8 pt-4 transition-colors focus:border-blue-200"
          >
            <option value="" disabled selected hidden>
              Select type of service
            </option>
            <option>{ServiceTypes.FIGMA_DESIGN}</option>
            <option>{ServiceTypes.UI_DESIGN}</option>
            <option>{ServiceTypes.WEBFLOW_DESIGN}</option>
          </select>
        </div>
      </div>
      <div className="text-label-main text-black-1000 flex w-full flex-col">
        <span>Message</span>
        <textarea
          {...register("message", {
            required: false,
          })}
          className="text-body-main placeholder:text-black-1000 h-36 w-full resize-none rounded-lg border-[1px] border-[#0000001f] bg-blue-50 p-8 pb-5 pt-5"
          placeholder="Write your question here"
        />
      </div>
      <Button styleType={ButtonStyleTypes.SECONDARY} className="mt-4 pb-4 pl-14 pr-14 pt-4">
        Send Message
      </Button>
    </form>
  );
};
