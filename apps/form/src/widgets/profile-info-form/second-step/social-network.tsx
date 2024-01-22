"use client";

import { FacebookIcon, PlusIcon, SkypeIcon, XIcon } from "@form/icons";
import { v4 as uuidv4 } from "uuid";
import { DropDown, Button, InputStyleTypes, Input } from "@form/shared";
import { FC, useEffect, useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { FormSchema } from "./schema";
type SocialNetwork = {
  socialNetwork: string;
  icon: JSX.Element;
};
const possibleSocialNetworks: SocialNetwork[] = [
  {
    socialNetwork: "Skype",
    icon: <SkypeIcon />,
  },
  {
    socialNetwork: "Facebook",
    icon: <FacebookIcon />,
  },
];

type SelectedSocialNetworksType = {
  id: string;
  profile: string;
} & SocialNetwork;

type SocialNetworkProps = {
  setValues: UseFormSetValue<FormSchema>;
};

export const SocialNetwork: FC<SocialNetworkProps> = ({ setValues }) => {
  const [selectedSocialNetworks, setSelectedSocialNetworks] = useState<SelectedSocialNetworksType[] | []>([]);

  const updateSocialNetworks = (item: SelectedSocialNetworksType) => {
    setSelectedSocialNetworks(prev => prev.map(socialNetwork => (socialNetwork.id === item.id ? item : socialNetwork)));
  };

  const deleteSocialNetwork = (id: string) => {
    setSelectedSocialNetworks(prev => prev.filter(socialNetwork => socialNetwork.id !== id));
  };
  useEffect(() => {
    setValues(
      "socialNetwork",
      selectedSocialNetworks
        .filter(({ profile }) => profile)
        .map(({ socialNetwork, profile }) => ({
          socialNetwork,
          profile,
        })),
    );
  }, [selectedSocialNetworks, setValues]);

  return (
    <>
      {selectedSocialNetworks.map(({ icon, socialNetwork, id }) => (
        <div className="phoneM:grid phoneM:grid-cols-2 flex items-end gap-4" key={id}>
          <DropDown
            titleClassName="max-phoneM:w-fit"
            dropDownItemArray={possibleSocialNetworks}
            titleContent={
              <div className="flex gap-4">
                {icon}
                <span className="max-phoneM:hidden">{socialNetwork}</span>
              </div>
            }
            dropDownItem={possibleSocialNetworks => (
              <Button
                onClick={() => {
                  updateSocialNetworks({
                    ...possibleSocialNetworks,
                    profile: "",
                    id,
                  });
                }}
                className="w-full p-2 text-start hover:bg-gray-400"
              >
                {possibleSocialNetworks.socialNetwork}
              </Button>
            )}
          />
          <div className="flex w-full items-end gap-2">
            <Input
              styleType={InputStyleTypes.MAIN}
              inputWrapperClassName="h-full w-full"
              className="h-full"
              placeholder="@user"
              minLength={3}
              onChange={({ target }) => {
                updateSocialNetworks({
                  socialNetwork,
                  icon,
                  id,
                  profile: target.value,
                });
              }}
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
          setSelectedSocialNetworks(prev => [...prev, { ...possibleSocialNetworks[0], profile: "", id: uuidv4() }])
        }
        className="text-small-main text-blue flex w-fit items-center gap-2 py-2"
      >
        <PlusIcon />
        Add More
      </Button>
    </>
  );
};
