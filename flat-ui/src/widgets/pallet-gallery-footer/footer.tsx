import { FC } from "react";
type PalletGalleryFooterProps = {
  paletteName:string
}


export const PalletGalleryFooter:FC<PalletGalleryFooterProps> = ({
  paletteName,
}) => (
  <footer className="w-full p-3 flex justify-end bg-white text-black">
    <span>{paletteName}</span>
  </footer>
);
