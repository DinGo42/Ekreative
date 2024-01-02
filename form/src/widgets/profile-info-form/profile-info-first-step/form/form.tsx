'use client';
import {
  Button,
  ButtonStyleTypes,
  FormInput,
  Input,
  InputStyleTypes,
  useCustomForm,
} from '@form/shared';
import { FC } from 'react';
import { ArrowRightIcon, ComplatedIcon } from '@form/icons';
import usePlacesAutocomplete from 'use-places-autocomplete';
import { ProfileInfoChildFormProps } from '../../profile-info-form';
import { FormSchema, formSchema } from './schema';
import { twJoin } from 'tailwind-merge';

export const FormFirstStep: FC<ProfileInfoChildFormProps> = ({
  setValueToParentForm,
  nextFormStep,
  getValuesFromParentForm,
}) => {
  const {
    setValue: setReactPlacesValue,
    value,
    clearSuggestions,
    suggestions: { data, loading, status },
  } = usePlacesAutocomplete({ cache: false });

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useCustomForm({
    schema: formSchema,
    defaultValues: {
      firstName: getValuesFromParentForm('firstName'),
      secondName: getValuesFromParentForm('secondName'),
      dataOfBirth: getValuesFromParentForm('dataOfBirth'),
      placeOfBirth: getValuesFromParentForm('placeOfBirth'),
    },
  });
  const onSubmit = ({
    dataOfBirth,
    firstName,
    placeOfBirth,
    secondName,
  }: FormSchema) => {
    setValueToParentForm('firstName', firstName);
    setValueToParentForm('secondName', secondName);
    setValueToParentForm('dataOfBirth', dataOfBirth);
    setValueToParentForm('placeOfBirth', placeOfBirth);
    setValueToParentForm('itin', '123-45-678');
    nextFormStep();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
        id="FormFirstStep"
      >
        <div className="flex gap-2 items-center max-phoneM:justify-center my-4">
          <Input
            type="checkbox"
            className="w-6 h-6 accent-[#007AFF]"
            inputWrapperClassName="w-fit"
          />
          <span className="text-[#000000] text-small-main">I agree with</span>
          <span className="text-blue text-small-main">Terms of use</span>
        </div>
        <div className="w-full phoneM:p-8 phoneM:border-[1px] border-t-[1px] px-6 py-8 border-[#E2E4E5] phoneM:rounded-lg gap-8 flex flex-col">
          <div className="flex flex-col">
            <span className="text-black text-large-secondary">
              Personal data
            </span>
            <span className="text-gray-800 text-small-secondary">
              Specify exactly as in your passport
            </span>
          </div>

          <FormInput
            control={control}
            name="firstName"
            styleType={InputStyleTypes.MAIN}
            inputWrapperClassName="flex flex-col-reverse"
          >
            <span className="text-black text-medium-main-secondary">
              First name
            </span>
          </FormInput>

          <FormInput
            control={control}
            name="secondName"
            styleType={InputStyleTypes.MAIN}
            inputWrapperClassName="flex flex-col-reverse"
          >
            <span className="text-black text-medium-main-secondary">
              Second name
            </span>
          </FormInput>

          <div className="grid grid-cols-2 gap-8">
            <FormInput
              control={control}
              name="dataOfBirth"
              type="date"
              styleType={InputStyleTypes.MAIN}
              inputWrapperClassName="flex flex-col-reverse"
            >
              <span className="text-black text-medium-main-secondary">
                Date of Birth
              </span>
            </FormInput>
            <div className="relative">
              <Input
                value={value}
                onChange={({ target }) => setReactPlacesValue(target.value)}
                className={twJoin(
                  errors.placeOfBirth && 'border-red',
                  'overflow-hidden whitespace-nowrap text-ellipsis'
                )}
                styleType={InputStyleTypes.MAIN}
                inputWrapperClassName="flex flex-col-reverse w-full"
              >
                <span className="text-black text-medium-main-secondary">
                  Place of birth
                </span>
              </Input>
              {status === 'OK' && (
                <div className="absolute bg-white flex flex-col h-fit z-50 overflow-y-auto w-full">
                  {loading && <span>Loading...</span>}
                  {data.map(({ description, place_id }) => (
                    <Button
                      className="hover:bg-gray-400 text-start py-2 px-4"
                      key={place_id}
                      onClick={() => {
                        setValue('placeOfBirth', description);
                        setReactPlacesValue(description, false);
                        clearSuggestions();
                      }}
                    >
                      {description}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full phoneM:p-4 phoneM:border-[1px] px-6 py-4 border-[#E2E4E5] phoneM:rounded-lg flex flex-col max-phoneM:bg-gray-400">
          <span className="text-black text-large-main-secondary">
            123-45-678
          </span>
          <div className="flex items-center gap-1">
            <ComplatedIcon />
            <span className="text-gray-800 text-medium-main">Your ITIN</span>
          </div>
        </div>

        <Button form="FormFirstStep" styleType={ButtonStyleTypes.SECONDARY}>
          Go next <ArrowRightIcon />
        </Button>
      </form>
    </>
  );
};
