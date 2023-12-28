import { FC } from 'react';
import { FormSecondStep } from './form';
import { RegitrationChildFormProps } from '../registration-form';

export const RegitrationSecondStep: FC<RegitrationChildFormProps> = (props) => (
  <>
    <FormSecondStep {...props} />
  </>
);
