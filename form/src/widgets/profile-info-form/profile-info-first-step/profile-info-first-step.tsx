import { FC } from 'react';
import { FormFirstStep } from './form';
import { ProfileInfoChildFormProps } from '../profile-info-form';

export const ProfileInfoFirstStep: FC<ProfileInfoChildFormProps> = (props) => (
  <>
    <FormFirstStep {...props} />
  </>
);
