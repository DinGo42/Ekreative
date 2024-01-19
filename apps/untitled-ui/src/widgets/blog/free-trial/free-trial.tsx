import { Button, ButtonStyleTypes, Image } from "@untitled/shared";
import { FC } from "react";

export const BlogFreeTrial: FC = () => (
  <div className="flex max-tabletM:flex-col tabletS:mt-24 tabletM:items-center">
    <div className="flex flex-col gap-4 text-start max-tabletS:text-center">
      <span className="text-medium-semibold-main text-black-900">No long-term contracts. No catches.</span>
      <span className="text-regular-main text-gray-600">Start your 30-day free trial today.</span>
      <div className="mt-4 flex w-full items-center gap-3 max-tabletS:flex-col max-tabletS:justify-center">
        <Button styleType={ButtonStyleTypes.ROUNDED_PURPLE} className="pb-3 pt-3 phoneM:w-fit phoneM:px-[18px]">
          Get started
        </Button>
        <Button
          styleType={ButtonStyleTypes.ROUNDED_GRAY}
          className="justify-center pb-3 pt-3 text-gray-blue-400 phoneM:w-fit phoneM:px-[18px]"
        >
          Learn more
        </Button>
      </div>
    </div>
    <div className="my-12 flex w-screen max-w-fit flex-col items-center gap-2 self-end overflow-hidden px-4 max-tabletS:-mx-[calc((100vw-100%)/2)] max-tabletS:self-center tabletS:-mt-[15%] tabletM:mt-0">
      <div className="flex w-fit items-end gap-2 ">
        <Image src={"/free-trial/blog-page/photo2.jpg"} alt="photo2" className="h-[160px] w-[160px]" />
        <Image src={"/free-trial/blog-page/photo1.jpg"} alt="photo1" className="h-[240px] w-[160px]" />
      </div>
      <div className="flex gap-2 overflow-hidden">
        <Image src={"/free-trial/blog-page/photo5.jpg"} alt="photo5" className="h-[128px] w-[192px]" />
        <Image src={"/free-trial/blog-page/photo3.jpg"} alt="photo3" className="h-[240px] w-[160px]" />
        <Image src={"/free-trial/blog-page/photo4.jpg"} alt="photo4" className="h-[128px] w-[192px]" />
      </div>
    </div>
  </div>
);
