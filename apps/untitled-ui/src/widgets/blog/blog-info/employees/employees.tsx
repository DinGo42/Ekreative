"use client";
import { Button, ButtonStyleTypes, employeesData } from "@untitled/shared";
import { EmployeeCard } from "./employee-card/employee-card";
import { FC, useRef } from "react";
import { ArrowRightIcon } from "@untitled/icons";

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
    <div className="max-desktopS:gap-16 max-tabletS:flex-col tabletS:my-8 flex items-center justify-between">
      <div className="phoneM:text-center tabletS:text-start desktopS:w-1/2 flex flex-col gap-6">
        <span className="text-medium-semibold-main text-black-900 desktopS:text-large-semibold">
          Join 4,000+ startups growing with Untitled
        </span>
        <span className="text-regular-main text-gray-600">Start your 30-day free trial today.</span>
        <div className="max-phoneM:flex-col-reverse tabletS:justify-start mt-6  flex justify-center gap-3">
          <Button
            styleType={ButtonStyleTypes.ROUNDED_GRAY}
            className="text-gray-blue-400 phoneM:w-fit phoneM:pl-[18px] phoneM:pr-[18px] justify-center pb-3 pt-3"
          >
            Learn more
          </Button>
          <Button
            styleType={ButtonStyleTypes.ROUNDED_PURPLE}
            className="phoneM:w-fit phoneM:pl-[18px] phoneM:pr-[18px] pb-3 pt-3"
          >
            Get started
          </Button>
        </div>
      </div>
      <div className="relative w-fit max-w-[570px] overflow-hidden bg-purple-800">
        <div ref={listRef} className="bg-black-800 grid auto-cols-[100%] grid-flow-col overflow-hidden scroll-smooth">
          {employeesData.map((employee, index) => (
            <EmployeeCard {...employee} key={index} />
          ))}
        </div>
        <div className="max-phoneM:left-5 phoneM:bottom-8 phoneM:right-8 absolute bottom-6 flex gap-8 ">
          <Button
            onClick={prevEmployee}
            className="flex h-[56px] w-[56px] items-center justify-center rounded-full border-[1px] border-gray-100"
          >
            <ArrowRightIcon className="rotate-180" fill="#ffffff" />
          </Button>
          <Button
            onClick={nextEmployee}
            className="flex h-[56px] w-[56px] items-center justify-center rounded-full border-[1px] border-gray-100"
          >
            <ArrowRightIcon fill="#ffffff" />
          </Button>
        </div>
      </div>
    </div>
  );
};
