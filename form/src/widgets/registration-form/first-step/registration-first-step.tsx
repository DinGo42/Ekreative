import { FormFirstStep } from "./form";
import { ReassuringMessage } from "./reassuring-message";
import { FC } from "react";
import { RegistrationChildFormProps } from "../registration-form";

export const RegistrationFirstStep: FC<RegistrationChildFormProps> = props => (
  <>
    <ReassuringMessage />
    <FormFirstStep {...props} />
  </>
);
