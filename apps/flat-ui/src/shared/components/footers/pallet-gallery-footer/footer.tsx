import { FC } from "react";
type PalletGalleryFooterProps = {
  paletteName: string;
};

export const PalletGalleryFooter: FC<PalletGalleryFooterProps> = ({ paletteName }) => (
  <footer className="text-secondary flex w-full justify-end bg-white p-3">
    <span>{paletteName}</span>
  </footer>
);
