'use client';

import { FacebookIcon, PlusIcon, SkypeIcon, XIcon } from '@form/icons';
import {
  DropDown,
  Button,
  InputStyleTypes,
  idGenerator,
  Input,
} from '@form/shared';
import { FC, useEffect, useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { FormSchema } from './schema';
type SocialNetwork = {
  socialNetwork: string;
  icon: JSX.Element;
};
const possibleSocialNetworks: SocialNetwork[] = [
  {
    socialNetwork: 'Skype',
    icon: <SkypeIcon />,
  },
  {
    socialNetwork: 'Facebook',
    icon: <FacebookIcon />,
  },
];

type selectedSocialNetworksType = {
  id: string;
  profile: string;
} & SocialNetwork;

type SocialNetworkProps = {
  setValues: UseFormSetValue<FormSchema>;
};

export const SocialNetwork: FC<SocialNetworkProps> = ({ setValues }) => {
  const [selectedSocialNetworks, setSelectedSocialNetworks] = useState<
    selectedSocialNetworksType[]
  >([]);

  const updateSocialNetworks = (item: selectedSocialNetworksType) => {
    setSelectedSocialNetworks((prev) =>
      prev.map((socialNetwork) =>
        socialNetwork.id === item.id ? item : socialNetwork
      )
    );
  };

  const deleteSocialNetwork = (id: string) => {
    setSelectedSocialNetworks((prev) =>
      prev.filter((socialNetwork) => socialNetwork.id !== id)
    );
  };
  useEffect(() => {
    setValues(
      'socialNetwork',
      selectedSocialNetworks
        .filter(({ profile }) => profile)
        .map(({ socialNetwork, profile }) => ({
          socialNetwork,
          profile,
        }))
    );
  }, [selectedSocialNetworks, setValues]);

  return (
    <>
      {selectedSocialNetworks.map(({ icon, socialNetwork, id }) => (
        <div className="gap-4 grid grid-cols-2 items-end" key={id}>
          <DropDown
            titleClassName="w-full"
            dropDownItemArray={possibleSocialNetworks}
            titleContent={
              <span className="flex gap-2">
                {icon} {socialNetwork}
              </span>
            }
            dropDownItem={(possibleSocialNetworks) => (
              <Button
                onClick={() => {
                  updateSocialNetworks({
                    ...possibleSocialNetworks,
                    profile: '',
                    id,
                  });
                }}
                className="text-start p-2 w-full hover:bg-gray-400"
              >
                {possibleSocialNetworks.socialNetwork}
              </Button>
            )}
          />
          <div className="flex items-end gap-2">
            <Input
              styleType={InputStyleTypes.MAIN}
              inputWrapperClassName="h-full w-full"
              className="h-full"
              placeholder="@user"
              minLength={3}
              onChange={({ target }) =>
                updateSocialNetworks({
                  socialNetwork,
                  icon,
                  id,
                  profile: target.value,
                })
              }
            />
            <Button onClick={() => deleteSocialNetwork(id)}>
              <XIcon />
            </Button>
          </div>
        </div>
      ))}
      <Button
        type="button"
        onClick={() =>
          setSelectedSocialNetworks((prev) => [
            ...prev,
            { ...possibleSocialNetworks[0], profile: '', id: idGenerator() },
          ])
        }
        className="text-blue text-small-main items-center flex gap-2"
      >
        <PlusIcon />
        Add More
      </Button>
    </>
  );
};
