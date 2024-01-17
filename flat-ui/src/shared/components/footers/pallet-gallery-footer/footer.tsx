import { FC } from "react";
type PalletGalleryFooterProps = {
  paletteName: string;
};

export const PalletGalleryFooter: FC<PalletGalleryFooterProps> = ({ paletteName }) => (
  <footer className="flex w-full justify-end bg-white p-3 text-secondary">
    <span>{paletteName}</span>
  </footer>
);
