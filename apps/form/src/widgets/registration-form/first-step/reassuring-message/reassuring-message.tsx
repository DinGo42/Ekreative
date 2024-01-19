"use client";
import { LockIcon, XIcon } from "@form/icons";
import { Button } from "@form/shared";
import { FC, useState } from "react";

export const ReassuringMessage: FC = () => {
  const [messageShown, setShown] = useState(true);
  return (
    <>
      {messageShown && (
        <div className="flex h-fit w-full gap-4 bg-gray-500 px-6 py-4">
          <div className="h-fit w-fit">
            <LockIcon />
          </div>
          <span className="text-medium-main text-black">
            We take privacy issues seriously. You can be sure that your personal data is securely protected.
          </span>
          <Button onClick={() => setShown(false)} className="h-fit w-fit">
            <XIcon />
          </Button>
        </div>
      )}
    </>
  );
};
