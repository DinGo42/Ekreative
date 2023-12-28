import { FC } from 'react';
import { FormThirdStep } from './form';
import { ProfileInfoChildFormProps } from '../profile-info-form';

export const ProfileInfoThirdStep: FC<ProfileInfoChildFormProps> = (props) => (
  <>
    <FormThirdStep {...props} />
  </>
);
