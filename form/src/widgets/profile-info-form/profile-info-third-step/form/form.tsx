'use client';

import {
  Button,
  DropDown,
  FormInput,
  Input,
  InputStyleTypes,
  containsInWord,
} from '@form/shared';
import { FC, useEffect, useState } from 'react';
import {
  Country,
  getCountries,
  getCountryCallingCode,
} from 'react-phone-number-input';
import en from 'react-phone-number-input/locale/en';
import { ProfileInfoChildFormProps } from '../..';

// const req = fetch('https://countriesnow.space/api/v0.1/countries/currency')
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res);
//   });

// const req = fetch('https://countriesnow.space/api/v0.1/countries/cities', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ country: countryName }),
//   redirect: 'follow',
// })
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res);
//   });

type CitiesResponceType = {
  error: boolean;
  msg: string;
  data: string[];
};
export const FormThirdStep: FC<ProfileInfoChildFormProps> = ({
  setValueToParentForm,
  getValuesFromParentForm,
}) => {
  const [allCities, setAllCities] = useState<string[]>(['']);
  const [selectedCountry, setSelectedCountry] = useState(en['RU']);
  const [selectedCity, setSelectedCity] = useState('');
  const [searchCountry, setSearchCountry] = useState('');
  useEffect(() => {
    const getData = async () => {
      const req = await fetch(
        'https://countriesnow.space/api/v0.1/countries/cities',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ country: selectedCountry }),
          redirect: 'follow',
        }
      );
      const { data }: CitiesResponceType = await req.json();
      setAllCities(data);
    };
    getData();
  }, []);

  return (
    <>
      <div className="w-full phoneM:p-8 phoneM:border-[1px] border-t-[1px] px-6 py-8 border-[#E2E4E5] phoneM:rounded-lg gap-8 flex flex-col">
        <div className="flex flex-col">
          <span className="text-black text-large-secondary">
            Delovery address
          </span>
          <span className="text-gray-800 text-small-secondary">
            Used for shipping orders
          </span>
        </div>
        <Input
          styleType={InputStyleTypes.MAIN}
          inputWrapperClassName="flex flex-col-reverse w-full"
        >
          <span className="text-black text-medium-main-secondary">Address</span>
        </Input>
        <div className="flex flex-col w-full gap-2">
          <span className="text-black text-medium-main-secondary">Country</span>
          <DropDown
            contentClassName="top-10"
            dropDownItemArray={getCountries().filter((country) =>
              containsInWord(searchCountry, en[country])
            )}
            titleClassName="w-full border-[#E2E4E5] border-b-[1px] pl-4"
            titleContent={<span>{selectedCountry}</span>}
            dropDownContentHeader={
              <Input
                styleType={InputStyleTypes.MAIN}
                className="py-2 px-2 sticky top-0"
                onChange={(e) => setSearchCountry(e.target.value)}
              />
            }
            dropDownItem={(country) => (
              <Button
                onClick={() => setSelectedCountry(en[country])}
                className="text-start p-2 w-full hover:bg-gray-400"
              >
                {en[country]}
              </Button>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col w-full gap-2 border-[#E2E4E5] border-b-[1px]">
            <span className="text-black text-medium-main-secondary">City</span>
            <DropDown
              contentClassName="top-10"
              dropDownItemArray={allCities.filter((city) =>
                containsInWord(searchCountry, city)
              )}
              titleContent={<span>{selectedCity}</span>}
              titleClassName="pl-4"
              dropDownContentHeader={
                <Input
                  styleType={InputStyleTypes.MAIN}
                  className="py-2 px-2 sticky top-0"
                  onChange={(e) => setSearchCountry(e.target.value)}
                />
              }
              dropDownItem={(city) => (
                <Button
                  onClick={() => setSelectedCity(city)}
                  className="text-start p-2 w-full hover:bg-gray-400"
                >
                  {city}
                </Button>
              )}
            />
          </div>
          <Input
            styleType={InputStyleTypes.MAIN}
            inputWrapperClassName="flex flex-col-reverse w-full"
          >
            <span className="text-black text-medium-main-secondary">
              Zip code
            </span>
          </Input>
        </div>
        <Input
          styleType={InputStyleTypes.MAIN}
          inputWrapperClassName="flex flex-col-reverse w-full"
        >
          <span className="text-black text-medium-main-secondary">
            Optional
          </span>
        </Input>
      </div>
      <Button styleType={ButtonStyleTypes.SECONDARY}>Save</Button>
    </>
  );
};
