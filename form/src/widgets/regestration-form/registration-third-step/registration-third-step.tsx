import { FC } from 'react';
import { FormThirdStep } from './form';
import { RegitrationChildFormProps } from '../registration-form';

export const RegitrationThirdStep: FC<RegitrationChildFormProps> = (props) => (
  <>
    <FormThirdStep {...props} />
  </>
);
