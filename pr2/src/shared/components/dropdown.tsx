'use client';
import { FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from './button';
import { PlusIcon } from '../../../public';

type DropDownProps = {
  question: string;
  answer: string;
  index: number;
};
export const DropDown: FC<DropDownProps> = ({ answer, index, question }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div
      className={twMerge(
        'flex flex-col border-b-2 border-[#ECECF1] pt-8 gap-4 pb-4  w-full transition-all cursor-pointer',
        isOpen && 'pb-12 gap-4'
      )}
    >
      <div className="flex items-center w-full justify-between">
        <div className="flex gap-14 items-center">
          <span className="text-xs text-blue-700">
            {index < 9 ? '0' + index : index}
          </span>
          <span className="text-xs">{question}</span>
        </div>
        <Button
          onClick={() => {
            console.log(1);
            setOpen((prev) => !prev);
          }}
          className={twMerge('h-fit p-4')}
        >
          <PlusIcon
            className={twMerge(
              isOpen ? 'rotate-45' : '',
              'transition-transform'
            )}
          />
        </Button>
      </div>
      <div
        className={twMerge(
          'grid-flow-row grid transition-all duration-700 pl-20',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <span className={twMerge('overflow-hidden text-lb-1')}>{answer}</span>
      </div>
    </div>
  );
};
