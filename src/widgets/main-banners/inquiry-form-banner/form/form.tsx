'use client';
import { Button, ButtonStyleTypes, Input, Link } from '@pr2/shared';
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
      {/* //// cringe */}
      <Input
        placeholder="Your email"
        {...register('name', { required: true })}
        isError={errors.name}
      />
      <Input
        placeholder="Email"
        {...register('email', { required: true })}
        isError={errors.email}
      />
      <Input
        placeholder="Paste your Figma design URL"
        {...register('disignURL', { required: true })}
        isError={errors.disignURL}
      />

      {/* /// cringe */}
      <Button styleType={ButtonStyleTypes.MAIN} className="w-full">
        Send an Inquiry
      </Button>
      <Link arrowColor="#fff" href={'#'}>
        Get in touch with us
      </Link>
    </form>
  );
};
