import { FC } from 'react';
type PalletGalleryFooterProps = {
  paletteName: string;
};

export const PalletGalleryFooter: FC<PalletGalleryFooterProps> = ({
  paletteName,
}) => (
  <footer className="w-full p-3 flex justify-end bg-white text-secondary">
    <span>{paletteName}</span>
  </footer>
);
