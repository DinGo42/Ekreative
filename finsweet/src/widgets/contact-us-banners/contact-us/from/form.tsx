'use client';
import {
  Button,
  ButtonStyleTypes,
  Input,
  InputStyleTypes,
} from '@finsweet/shared';
import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

enum ServiceTypes {
  UI_DESIGN = 'UI Design',
  WEBFLOW_DESIGN = 'Webflow Design',
  FIGMA_DESIGN = 'Figma Design',
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
  const onSubmit: SubmitHandler<Inputs> = (data) => alert(JSON.stringify(data));
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-col gap-4 flex bg-blue-50 w-full phoneM:pt-14 phoneM:pb-16 phoneM:p-20 rounded-h2 items-start"
    >
      <div className="grid grid-flow-row tabletSPlus:grid-cols-2 grid-cols-1 w-full gap-x-8 gap-y-6">
        <Input
          styleType={InputStyleTypes.ROUNDED_LIGHT_BLUE}
          inputWrapperClassName="flex-col-reverse"
          register={register}
          registerParams={{ required: true }}
          name="name"
          placeholder="Enter your name"
        >
          <span className="text-black-1000 text-label-main">Name</span>
        </Input>

        <Input
          styleType={InputStyleTypes.ROUNDED_LIGHT_BLUE}
          inputWrapperClassName="flex-col-reverse"
          register={register}
          registerParams={{ required: true }}
          name="email"
          placeholder="Enter your email"
        >
          <span className="text-black-1000 text-label-main">Email</span>
        </Input>

        <Input
          styleType={InputStyleTypes.ROUNDED_LIGHT_BLUE}
          register={register}
          inputWrapperClassName="flex-col-reverse"
          registerParams={{ required: true }}
          name="subject"
          placeholder="Enter your theme idea"
        >
          <span className="text-black-1000 text-label-main">Theme</span>
        </Input>

        <div className="flex flex-col w-full">
          <span className="text-black-1000 text-label-main">
            Type of service
          </span>
          <select
            {...register('subjectType', { required: true })}
            className="bg-blue-50 placeholder:text-black-1000 border-[1px] text-body-main border-[#0000001f] rounded-h3 focus:border-blue-200 transition-colors pl-8 pt-4 pb-4"
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
      <div className="w-full flex flex-col text-label-main text-black-1000">
        <span>Message</span>
        <textarea
          {...register('message', { required: false })}
          className="w-full h-36 resize-none p-8 pt-5 text-body-main pb-5 placeholder:text-black-1000 rounded-h3 border-[1px] border-[#0000001f] bg-blue-50"
          placeholder="Write your question here"
        />
      </div>
      <Button
        styleType={ButtonStyleTypes.SECONDARY}
        className="mt-4 pl-14 pr-14 pt-4 pb-4"
      >
        Send Message
      </Button>
    </form>
  );
};
