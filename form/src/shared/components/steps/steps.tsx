import { twMerge } from 'tailwind-merge';

export const Steps = ({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) => {
  return (
    <div className="flex gap-2 items-center">
      {new Array(3).fill(1).map((_, index) => {
        const stepIndex = index + 1;

        return (
          <>
            <div
              className={twMerge(
                'size-3 rounded-full',
                stepIndex <= currentStep
                  ? 'bg-blue'
                  : 'border-[1px] border-[#B9B9C3]'
              )}
            />
            {totalSteps !== stepIndex && (
              <div
                className={twMerge(
                  'w-10 border-[1px]',
                  currentStep < stepIndex + 1
                    ? 'border-[#B9B9C3]'
                    : 'border-blue'
                )}
              />
            )}
          </>
        );
      })}
    </div>
  );
};
