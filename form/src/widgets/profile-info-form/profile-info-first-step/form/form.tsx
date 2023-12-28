'use client';
import {
  Button,
  ButtonStyleTypes,
  DropDown,
  FormInput,
  Input,
  InputStyleTypes,
  useCustomForm,
} from '@form/shared';
import { FC, useState } from 'react';
import { ArrowRightIcon, ComplatedIcon } from '@form/icons';
import usePlacesAutocomplete from 'use-places-autocomplete';
import { FormSteps, ProfileInfoChildFormProps } from '../../profile-info-form';
import { FormSchema, formSchema } from './schema';
import { Combobox } from '@headlessui/react';

const geterateITINCode = () =>
  `${Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0')}-${Math.floor(Math.random() * 100)
    .toString()
    .padStart(2, '0')}-${Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0')}`;
const itinCode = geterateITINCode();

export const FormFirstStep: FC<ProfileInfoChildFormProps> = ({
  setValueToParentForm,
  toggleNextStep,
}) => {
  const [selectedPlace, setPlace] = useState('');
  const {
    ready,
    setValue: setInputValue,
    value,
    suggestions: { data, status, loading },
  } = usePlacesAutocomplete({});

  const { control, handleSubmit, setValue } =
    useCustomForm<FormSchema>(formSchema);
  const onSubmit = ({
    dataOfBirth,
    firstName,
    placeOfBirth,
    secondName,
  }: FormSchema) => {
    alert(JSON.stringify({ dataOfBirth, firstName, placeOfBirth, secondName }));
    setValueToParentForm('firstName', firstName);
    setValueToParentForm('secondName', secondName);
    setValueToParentForm('dataOfBirth', dataOfBirth);
    setValueToParentForm('placeOfBirth', placeOfBirth);
    setValueToParentForm('itin', itinCode);
    toggleNextStep(FormSteps.SECOND);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
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
            <div className="flex flex-col w-full gap-2 border-[#E2E4E5] border-b-[1px]">
              <span className="text-black text-medium-main-secondary">
                Place of Birth
              </span>
              <DropDown
                contentClassName="top-10"
                dropDownItemArray={data}
                titleClassName="w-full pl-4"
                titleContent={
                  <span className="whitespace-nowrap text-ellipsis overflow-hidden">
                    {selectedPlace}
                  </span>
                }
                dropDownContentHeader={
                  <Input
                    value={value}
                    styleType={InputStyleTypes.MAIN}
                    className="py-2 px-2 sticky top-0"
                    onChange={({ target }) => setInputValue(target.value)}
                  />
                }
                dropDownItem={({ description }) => (
                  <>
                    {loading && <span>Loading...</span>}
                    <Button
                      type="button"
                      onClick={() => {
                        setPlace(description);
                        setValue('placeOfBirth', description);
                      }}
                      className="text-start p-2 w-full hover:bg-gray-400"
                    >
                      {description}
                    </Button>
                  </>
                )}
              />
            </div>
          </div>
        </div>
        <div className="w-full phoneM:p-4 phoneM:border-[1px] px-6 py-4 border-[#E2E4E5] phoneM:rounded-lg flex flex-col max-phoneM:bg-gray-400">
          <span className="text-black text-large-main-secondary">
            {itinCode}
          </span>
          <div className="flex items-center gap-1">
            <ComplatedIcon />
            <span className="text-gray-800 text-medium-main">Your ITIN</span>
          </div>
        </div>

        <Button styleType={ButtonStyleTypes.SECONDARY}>
          Go next <ArrowRightIcon />
        </Button>
      </form>
    </>
  );
};
