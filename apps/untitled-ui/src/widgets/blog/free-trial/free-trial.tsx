import { Button, ButtonStyleTypes, Image } from "@untitled/shared";
import { FC } from "react";

export const BlogFreeTrial: FC = () => (
  <div className="max-tabletM:flex-col tabletS:mt-24 tabletM:items-center flex">
    <div className="max-tabletS:text-center flex flex-col gap-4 text-start">
      <span className="text-medium-semibold-main text-black-900">No long-term contracts. No catches.</span>
      <span className="text-regular-main text-gray-600">Start your 30-day free trial today.</span>
      <div className="max-tabletS:flex-col max-tabletS:justify-center mt-4 flex w-full items-center gap-3">
        <Button styleType={ButtonStyleTypes.ROUNDED_PURPLE} className="phoneM:w-fit phoneM:px-[18px] pb-3 pt-3">
          Get started
        </Button>
        <Button
          styleType={ButtonStyleTypes.ROUNDED_GRAY}
          className="text-gray-blue-400 phoneM:w-fit phoneM:px-[18px] justify-center pb-3 pt-3"
        >
          Learn more
        </Button>
      </div>
    </div>
    <div className="max-tabletS:-mx-[calc((100vw-100%)/2)] max-tabletS:self-center tabletS:-mt-[15%] tabletM:mt-0 my-12 flex w-screen max-w-fit flex-col items-center gap-2 self-end overflow-hidden px-4">
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
