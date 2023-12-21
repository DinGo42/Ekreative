import { PalletGalleryFooter, PalletsData } from '@flat-ui/shared';

import { PaleetGalary } from '@flat-ui/widgets/pallet-gallery/pallet-galary';

export const dynamicParams = false;

export async function generateStaticParams() {
  return PalletsData.map(({ id }) => ({
    palletId: id,
  }));
}

const PaletteGalleryPage = ({ params }: { params: { palletId: string } }) => {
  const { palletId } = params;
  const pallet = PalletsData.find(({ id }) => id === palletId);
  if (!pallet) return;
  const { colors, paletteName } = pallet;
  return (
    <>
      <div className="h-screen w-full flex flex-col justify-between">
        <main className="w-full h-full bg-secondary grid tabletM:grid-cols-5 tabletS:grid-cols-4 grid-cols-3">
          <PaleetGalary colors={colors} />
        </main>
        <PalletGalleryFooter paletteName={paletteName} />
      </div>
    </>
  );
};
export default PaletteGalleryPage;
