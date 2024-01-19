import { v4 as uuidv4 } from "uuid";
import { twMerge } from "tailwind-merge";

export const Steps = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => {
  return (
    <div className="flex items-center gap-2">
      {new Array(3).fill(1).map((unknown, index) => {
        const stepIndex = index + 1;

        return (
          <div key={uuidv4()} className="flex h-fit items-center gap-2">
            <div
              className={twMerge(
                "size-3 rounded-full",
                stepIndex <= currentStep ? "bg-blue" : "border-[1px] border-[#B9B9C3]",
              )}
            />
            {totalSteps !== stepIndex && (
              <div
                className={twMerge(
                  "h-0 w-10 border-[1px]",
                  currentStep < stepIndex + 1 ? "border-[#B9B9C3]" : "border-blue",
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
