"use client";
import { FC } from "react";
import { Link } from "../../link";
import { useUIContext } from "../../../hooks";
import { ColorTypeSelector } from "./select-color-type";

export const PalletGalleryHeader: FC = () => {
  const { isSoundPlay, setSoundPlay } = useUIContext();
  return (
    <header className="flex w-full items-center justify-between bg-white p-3 text-black">
      <Link href={"/"} className="flex items-center gap-3">
        <span>←</span>
        <span>Back</span>
      </Link>
      <ColorTypeSelector />
      <button onClick={() => setSoundPlay(!isSoundPlay)}>Sound {isSoundPlay ? "On 🔊" : "Off 🔈"}</button>
    </header>
  );
};
