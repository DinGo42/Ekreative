"use client";
import { Button, ButtonStyleTypes, Input, Link, Routs } from "@finsweet/shared";
import { Colors } from "@finsweet/tailwindConfig";
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  designURL: string;
  name: string;
};

export const InquiryFrom: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => alert(JSON.stringify(data));
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-4">
      <Input
        register={register}
        registerParams={{
          required: false,
        }}
        name="name"
        placeholder="Your email"
      />
      <Input
        placeholder="Email"
        register={register}
        registerParams={{
          required: true,
        }}
        type="email"
        name="email"
        isError={errors.email}
      />
      <Input
        placeholder="Paste your Figma design URL"
        register={register}
        registerParams={{
          required: true,
        }}
        name="designURL"
        isError={errors.designURL}
      />
      <Button styleType={ButtonStyleTypes.MAIN} className="mb-3 mt-10 w-full">
        Send an Inquiry
      </Button>
      <Link arrowColor={Colors["white-1000"]} href={Routs.CONTACT_US}>
        Get in touch with us
      </Link>
    </form>
  );
};
