export const PalletGalleryFooter = ({
  paletteName,
}: {
  paletteName: string;
}) => (
  <footer className="w-full p-3 flex justify-end bg-white text-black">
    <span>{paletteName}</span>
  </footer>
);
