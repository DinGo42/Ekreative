"use client";
import { Button, ButtonStyleTypes, FormInput, Input, InputStyleTypes, useCustomForm } from "@form/shared";
import { FC } from "react";
import { ArrowRightIcon, CompletedIcon } from "@form/icons";
import usePlacesAutocomplete from "use-places-autocomplete";
import { ProfileInfoChildFormProps } from "../profile-info-form";
import { FormSchema, formSchema } from "./schema";
import { twJoin } from "tailwind-merge";

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
      firstName: getValuesFromParentForm("firstName"),
      secondName: getValuesFromParentForm("secondName"),
      dataOfBirth: getValuesFromParentForm("dataOfBirth"),
      placeOfBirth: getValuesFromParentForm("placeOfBirth"),
    },
  });
  const onSubmit = ({ dataOfBirth, firstName, placeOfBirth, secondName }: FormSchema) => {
    setValueToParentForm("firstName", firstName);
    setValueToParentForm("secondName", secondName);
    setValueToParentForm("dataOfBirth", dataOfBirth);
    setValueToParentForm("placeOfBirth", placeOfBirth);
    setValueToParentForm("itin", "123-45-678");
    nextFormStep();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8" id="FormFirstStep">
        <div className="my-4 flex items-center gap-2 max-phoneM:justify-center">
          <Input type="checkbox" className="h-6 w-6 accent-[#007AFF]" inputWrapperClassName="w-fit" />
          <span className="text-small-main text-[#000000]">I agree with</span>
          <span className="text-small-main text-blue">Terms of use</span>
        </div>
        <div className="flex w-full flex-col gap-8 border-t-[1px] border-[#E2E4E5] px-6 py-8 phoneM:rounded-lg phoneM:border-[1px] phoneM:p-8">
          <div className="flex flex-col">
            <span className="text-large-secondary text-black">Personal data</span>
            <span className="text-small-secondary text-gray-800">Specify exactly as in your passport</span>
          </div>

          <FormInput
            control={control}
            name="firstName"
            styleType={InputStyleTypes.MAIN}
            inputWrapperClassName="flex flex-col-reverse"
          >
            <span className="text-medium-main-secondary text-black">First name</span>
          </FormInput>

          <FormInput
            control={control}
            name="secondName"
            styleType={InputStyleTypes.MAIN}
            inputWrapperClassName="flex flex-col-reverse"
          >
            <span className="text-medium-main-secondary text-black">Second name</span>
          </FormInput>

          <div className="grid grid-cols-1 gap-8 phoneM:grid-cols-2">
            <FormInput
              control={control}
              name="dataOfBirth"
              type="date"
              styleType={InputStyleTypes.MAIN}
              inputWrapperClassName="flex flex-col-reverse"
            >
              <span className="text-medium-main-secondary text-black">Date of Birth</span>
            </FormInput>
            <div className="relative">
              <Input
                value={value}
                onChange={({ target }) => setReactPlacesValue(target.value)}
                className={twJoin(
                  errors.placeOfBirth && "border-red",
                  "overflow-hidden text-ellipsis whitespace-nowrap",
                )}
                styleType={InputStyleTypes.MAIN}
                inputWrapperClassName="flex flex-col-reverse w-full"
              >
                <span className="text-medium-main-secondary text-black">Place of birth</span>
              </Input>
              {status === "OK" && (
                <div className="absolute z-50 flex h-fit max-h-56 w-full flex-col overflow-y-auto bg-white">
                  {loading && <span>Loading...</span>}
                  {data.map(({ description, place_id: placeId }) => (
                    <Button
                      className="px-4 py-2 text-start hover:bg-gray-400"
                      key={placeId}
                      onClick={() => {
                        setValue("placeOfBirth", description);
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
        <div className="flex w-full flex-col border-[#E2E4E5] px-6 py-4 max-phoneM:bg-gray-400 phoneM:rounded-lg phoneM:border-[1px] phoneM:p-4">
          <span className="text-large-main-secondary text-black">123-45-678</span>
          <div className="flex items-center gap-1">
            <CompletedIcon />
            <span className="text-medium-main text-gray-800">Your ITIN</span>
          </div>
        </div>

        <Button form="FormFirstStep" styleType={ButtonStyleTypes.SECONDARY}>
          Go next <ArrowRightIcon />
        </Button>
      </form>
    </>
  );
};
