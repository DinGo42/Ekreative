import { PalletsData } from '@flat-ui/shared';
import { PaleetGalary } from '@flat-ui/widgets/pallet-gallery/pallet-galary';
import { ColorTypeSelector } from '@flat-ui/widgets/pallet-galary-header/select-color-type/select-color-type';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { PalletGalleryFooter, PalletGalleryHeader } from '@flat-ui/widgets';

export const dynamicParams = false;

export async function generateStaticParams() {
  return PalletsData.map(({ id }) => ({
    palletId: id,
  }));
}

const PaletteGalleryPage = ({ params }: { params: { palletId: string } }) => {
  const pallet = PalletsData.find(({ id }) => id === params.palletId);
  if (!pallet) return;
  const { colors, paletteName } = pallet;
  return (
    <>
      <div className="h-screen w-full">
        <PalletGalleryHeader />
        <main className="w-full h-full bg-secondary grid grid-cols-5">
          <PaleetGalary colors={colors} />
        </main>
        <PalletGalleryFooter paletteName={paletteName} />
      </div>
    </>
  );
};
export default PaletteGalleryPage;
