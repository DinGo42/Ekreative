import { FormFirstStep } from './form';
import { ReassuringMessage } from './reassuring-message';
import { FC } from 'react';
import { RegitrationChildFormProps } from '../registration-form';

export const RegitrationFirstStep: FC<RegitrationChildFormProps> = (props) => (
  <>
    <ReassuringMessage />
    <FormFirstStep {...props} />
  </>
);
