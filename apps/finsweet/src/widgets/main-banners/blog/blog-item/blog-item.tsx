"use client";
import { Card, Image, Link, Routs } from "@finsweet/shared";
import { Colors } from "@finsweet/tailwindConfig";
import { FC } from "react";

export type BlogItemProps = {
  imageSrc: string;
  date: Date;
  title: string;
  description: string;
  linkHref: Routs.BLOG;
};

export const BlogItem: FC<BlogItemProps> = ({ date, description, imageSrc, linkHref, title }) => {
  return (
    <Card
      text={description}
      title={title}
      className="bg-white-1000 flex h-full w-full flex-col gap-8 p-0"
      date={date}
      textSpaceClassName="gap-4 mt-2"
      dateClassName="opacity-70"
      titleClassName="text-h6"
      icon={<Image src={imageSrc} alt="blog-image-item" style={{ objectFit: "cover" }} className="h-72 w-full" />}
    >
      <Link href={linkHref} arrowColor={Colors["blue-1000"]} className="text-label-secondary">
        Read more
      </Link>
    </Card>
  );
};
