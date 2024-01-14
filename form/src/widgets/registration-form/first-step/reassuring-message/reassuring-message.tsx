'use client';
import { LockIcon, XIcon } from '@form/icons';
import { Button } from '@form/shared';
import { FC, useState } from 'react';

export const ReassuringMessage: FC = () => {
  const [messageShown, setShown] = useState(true);
  return (
    <>
      {messageShown && (
        <div className="flex w-full bg-gray-500 h-fit px-6 py-4 gap-4">
          <div className="w-fit h-fit">
            <LockIcon />
          </div>
          <span className="text-medium-main text-black">
            We take privacy issues seriously. You can be sure that your personal
            data is securely protected.
          </span>
          <Button onClick={() => setShown(false)} className="w-fit h-fit">
            <XIcon />
          </Button>
        </div>
      )}
    </>
  );
};
