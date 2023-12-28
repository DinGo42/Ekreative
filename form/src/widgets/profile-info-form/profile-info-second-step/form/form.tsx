'use client';
import { Button, ButtonStyleTypes, useCustomForm } from '@form/shared';
import { FC } from 'react';
import { ArrowRightIcon, EmailIcon, PhoneIcon } from '@form/icons';
import { FormSteps, ProfileInfoChildFormProps } from '../../profile-info-form';
import { SocialNetwork } from './social-network';
import { FormSchema, formSchema } from './schema';

export const FormSecondStep: FC<ProfileInfoChildFormProps> = ({
  setValueToParentForm,
  toggleNextStep,
}) => {
  const { handleSubmit, setValue } = useCustomForm<FormSchema>(formSchema);
  const onSubmit = ({ socialNetwork }: FormSchema) => {
    alert(JSON.stringify({ socialNetwork }));
    setValueToParentForm('socialNetwork', socialNetwork);
    toggleNextStep(FormSteps.THIRD);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <div className="w-full phoneM:p-8 phoneM:border-[1px] border-t-[1px] px-6 py-8 border-[#E2E4E5] phoneM:rounded-lg gap-8 flex flex-col">
          <div className="flex flex-col">
            <span className="text-black text-large-secondary">Contacts</span>
            <span className="text-gray-800 text-small-secondary">
              These contacts are used to inform about orders
            </span>
          </div>

          <div className="flex border-b-[1px] border-[#E2E4E5] py-2 gap-4 text-black">
            <EmailIcon />
            <span>Alex_manager@gmail.com</span>
          </div>
          <div className="flex border-b-[1px] border-[#E2E4E5] py-2 gap-4 text-black">
            <PhoneIcon />
            <span>+1 555 555-1234</span>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <span className="text-black text-large-secondary">
                Social network
              </span>
              <span className="text-gray-800 text-small-secondary">
                Indicate the desired communication method
              </span>
            </div>
            <SocialNetwork setValues={setValue} />
          </div>
        </div>
        <Button styleType={ButtonStyleTypes.SECONDARY}>
          Go next <ArrowRightIcon />
        </Button>
      </form>
    </>
  );
};
