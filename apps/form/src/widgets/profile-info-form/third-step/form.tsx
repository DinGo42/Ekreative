"use client";
import {
  Button,
  ButtonStyleTypes,
  FormInput,
  Input,
  InputStyleTypes,
  getInfoByAddress,
  useCustomForm,
} from "@form/shared";
import { FC } from "react";
import { ProfileInfoChildFormProps } from "../profile-info-form";

import useReactPlaces from "use-places-autocomplete";
import { FormSchema, formSchema } from "./schema";
import { twJoin } from "tailwind-merge";

export const FormThirdStep: FC<ProfileInfoChildFormProps> = ({
  setValueToParentForm,
  getValuesFromParentForm,
  nextFormStep,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useCustomForm({
    schema: formSchema,
    defaultValues: {
      address: getValuesFromParentForm("address"),
      optional: getValuesFromParentForm("optional"),
    },
  });

  const {
    value: address,
    setValue: setAddress,
    suggestions: { data, loading, status },
    clearSuggestions,
  } = useReactPlaces({
    requestOptions: {
      types: ["route"],
    },
    cache: false,
    debounce: 300,
  });

  const submitHandler = async (data: FormSchema) => {
    const addressData = await getInfoByAddress(data.address);
    const { address, city, country, district, region, street, zipCode } = addressData!;

    setValueToParentForm("city", city || "");
    setValueToParentForm("country", country.longName || "");
    setValueToParentForm("zipCode", zipCode || "");
    setValueToParentForm("address", `${region},${district},${street},${address || ""}`);
    nextFormStep();
  };
  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-8" id="FormThirdStep">
        <div className="flex w-full flex-col gap-8 border-t-[1px] border-[#E2E4E5] px-6 py-8 phoneM:rounded-lg phoneM:border-[1px] phoneM:p-8">
          <div className="flex flex-col">
            <span className="text-large-secondary text-black">Delivery address</span>
            <span className="text-small-secondary text-gray-800">Used for shipping orders</span>
          </div>
          <div className="relative">
            <Input
              value={address}
              onChange={({ target }) => setAddress(target.value)}
              className={twJoin(errors.address && "border-red", "overflow-hidden text-ellipsis whitespace-nowrap")}
              styleType={InputStyleTypes.MAIN}
              inputWrapperClassName="flex flex-col-reverse w-full"
            >
              <span className="text-medium-main-secondary text-black">Address</span>
            </Input>
            {status === "OK" && (
              <div className="absolute z-50 flex h-fit w-full flex-col overflow-y-auto bg-white">
                {loading && <span>Loading...</span>}
                {data.map(({ description, place_id: placeId }) => (
                  <Button
                    className="px-4 py-2 text-start hover:bg-gray-400"
                    key={placeId}
                    onClick={() => {
                      setValue("address", description);
                      setAddress(description, false);
                      clearSuggestions();
                    }}
                  >
                    {description}
                  </Button>
                ))}
              </div>
            )}
          </div>
          <FormInput
            control={control}
            name="optional"
            styleType={InputStyleTypes.MAIN}
            inputWrapperClassName="flex flex-col-reverse w-full"
          >
            <span className="text-medium-main-secondary text-black">Optional</span>
          </FormInput>
        </div>
        <Button form="FormThirdStep" styleType={ButtonStyleTypes.SECONDARY}>
          Save
        </Button>
      </form>
    </>
  );
};
