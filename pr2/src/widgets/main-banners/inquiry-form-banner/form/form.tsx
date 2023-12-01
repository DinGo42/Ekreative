'use client';
import { Button, ButtonStyleTypes, Input, Link, Routs } from '@pr2/shared';
import { Colors } from '@pr2/tailwindConfig';
import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  email: string;
  disignURL: string;
  name: string;
};

export const InquiryFrom: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => alert(JSON.stringify(data));
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 items-center"
    >
      <Input
        register={register}
        registerParams={{ required: false }}
        name="name"
        placeholder="Your email"
      />
      <Input
        placeholder="Email"
        register={register}
        registerParams={{ required: true }}
        type="email"
        name="email"
        isError={errors.email}
      />
      <Input
        placeholder="Paste your Figma design URL"
        register={register}
        registerParams={{ required: true }}
        name="disignURL"
        isError={errors.disignURL}
      />
      <Button styleType={ButtonStyleTypes.MAIN} className="w-full">
        Send an Inquiry
      </Button>
      <Link arrowColor={Colors['white-1000']} href={Routs.CONTACT_US}>
        Get in touch with us
      </Link>
    </form>
  );
};
