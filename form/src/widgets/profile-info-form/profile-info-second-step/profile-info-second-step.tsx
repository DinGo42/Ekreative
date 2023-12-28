import { FC } from 'react';
import { FormSecondStep } from './form';
import { ProfileInfoChildFormProps } from '../profile-info-form';

export const ProfileInfoSecondStep: FC<ProfileInfoChildFormProps> = (props) => (
  <>
    <FormSecondStep {...props} />
  </>
);
