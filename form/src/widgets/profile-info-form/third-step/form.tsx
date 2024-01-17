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
        <div className="w-full phoneM:p-8 phoneM:border-[1px] border-t-[1px] px-6 py-8 border-[#E2E4E5] phoneM:rounded-lg gap-8 flex flex-col">
          <div className="flex flex-col">
            <span className="text-black text-large-secondary">Delivery address</span>
            <span className="text-gray-800 text-small-secondary">Used for shipping orders</span>
          </div>
          <div className="relative">
            <Input
              value={address}
              onChange={({ target }) => setAddress(target.value)}
              className={twJoin(errors.address && "border-red", "overflow-hidden whitespace-nowrap text-ellipsis")}
              styleType={InputStyleTypes.MAIN}
              inputWrapperClassName="flex flex-col-reverse w-full"
            >
              <span className="text-black text-medium-main-secondary">Address</span>
            </Input>
            {status === "OK" && (
              <div className="absolute bg-white flex flex-col h-fit z-50 overflow-y-auto w-full">
                {loading && <span>Loading...</span>}
                {data.map(({ description, place_id: placeId }) => (
                  <Button
                    className="hover:bg-gray-400 text-start py-2 px-4"
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
            <span className="text-black text-medium-main-secondary">Optional</span>
          </FormInput>
        </div>
        <Button form="FormThirdStep" styleType={ButtonStyleTypes.SECONDARY}>
          Save
        </Button>
      </form>
    </>
  );
};
