import { ArrowUpIcon } from "@untitled/icons";
import { FC } from "react";
import { Image } from "../image";
import { twMerge } from "tailwind-merge";
import { AuthorInfo, Link, validateDate } from "@untitled/shared";

type LargeInfoCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  text: string;
  href: string;
  tags: string[];
  className?: string;
  publication: Date;
  authorSrc: string;
  authorAlt: string;
  authorFullName: string;
};

export const LargeInfoCard: FC<LargeInfoCardProps> = ({
  href,
  imageSrc,
  imageAlt,
  tags,
  text,
  title,
  className,
  publication,
  authorSrc,
  authorAlt,
  authorFullName,
}) => {
  const { day, fullMonth, year } = validateDate(publication)!;

  return (
    <div className={twMerge("relative flex max-h-[720px] w-full flex-col gap-2 text-white", className)}>
      <Image style={{ width: "100%", height: "100%" }} alt={imageAlt} src={imageSrc} className={"-z-50 rounded-2xl"} />
      <div className="absolute bottom-0 flex w-full flex-col justify-end gap-2 p-8">
        <div className="flex justify-between">
          <span className="text-main-semibold max-tabletSPlus:w-1/2">{title}</span>
          <Link href={href}>
            <ArrowUpIcon stroke="white" />
          </Link>
        </div>
        <span className="text-small-main max-tabletSPlus:w-5/6">{text}</span>
        <div className="relative mt-4 flex items-start justify-between gap-8">
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-small-semibold">Written by</span>
              <AuthorInfo
                imageAlt={authorAlt}
                imageSrc={authorSrc}
                avatarBgColor="#ffffff"
                className="justify-center gap-3"
                fullName={authorFullName}
                textSpaceClassName={"text-white"}
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-small-semibold">Published on</span>
              <span className="py-2 text-medium-semibold-secondary">{day + " " + fullMonth + " " + year}</span>
            </div>
          </div>
          <div className="absolute right-0 flex h-full flex-col justify-between">
            <span className="text-small-semibold">File under</span>
            <div className="flex gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="rounded-full border-[1.5px] border-white px-2 text-small-secondary">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
