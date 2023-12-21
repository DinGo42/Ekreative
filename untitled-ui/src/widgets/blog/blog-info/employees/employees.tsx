'use client';
import { Button, ButtonStyleTypes, employeesData } from '@untitled/shared';
import { EmployeeCard } from './employee-card/employee-card';
import { FC, useRef } from 'react';
import { ArrowRightIcon } from '@untitled/icons';

export const Employees: FC = () => {
  const listRef = useRef<HTMLDivElement>(null);

  const prevEmployee = () => {
    const itemWidth = listRef.current!.clientWidth;
    listRef.current!.scrollBy({
      left: -itemWidth,
    });
  };

  const nextEmployee = () => {
    const itemWidth = listRef.current!.clientWidth;
    listRef.current!.scrollBy({
      left: itemWidth,
    });
  };
  return (
    <div className="flex items-center justify-between tabletS:my-8 max-tabletS:flex-col max-dectopS:gap-16">
      <div className="flex flex-col gap-6 dectopS:w-1/2 phoneM:text-center tabletS:text-start">
        <span className="text-black-900 dectopS:text-large-semidold text-medium-semibold-main">
          Join 4,000+ startups growing with Untitled
        </span>
        <span className="text-regular-main text-gray-600">
          Start your 30-day free trial today.
        </span>
        <div className="flex gap-3 mt-6  max-phoneM:flex-col-reverse justify-center tabletS:justify-start">
          <Button
            styleType={ButtonStyleTypes.ROUNDED_GRAY}
            className="pt-3 pb-3 phoneM:pl-[18px] phoneM:pr-[18px] text-gray-blue-400 justify-center phoneM:w-fit"
          >
            Learn more
          </Button>
          <Button
            styleType={ButtonStyleTypes.ROUNDED_PURPLE}
            className="phoneM:w-fit pt-3 pb-3 phoneM:pl-[18px] phoneM:pr-[18px]"
          >
            Get started
          </Button>
        </div>
      </div>
      <div className="bg-purple-800 overflow-hidden w-fit relative max-w-[570px]">
        <div
          ref={listRef}
          className="grid grid-flow-col auto-cols-[100%] bg-black-800 overflow-hidden scroll-smooth"
        >
          {employeesData.map((employee, index) => (
            <EmployeeCard {...employee} key={index} />
          ))}
        </div>
        <div className="flex gap-8 absolute phoneM:bottom-8 phoneM:right-8 bottom-6 max-phoneM:left-5 ">
          <Button
            onClick={prevEmployee}
            className="w-[56px] h-[56px] rounded-full border-[1px] border-gray-100 items-center justify-center flex"
          >
            <ArrowRightIcon className="rotate-180" fill="#ffffff" />
          </Button>
          <Button
            onClick={nextEmployee}
            className="w-[56px] h-[56px] rounded-full border-[1px] border-gray-100 items-center justify-center flex"
          >
            <ArrowRightIcon fill="#ffffff" />
          </Button>
        </div>
      </div>
    </div>
  );
};
