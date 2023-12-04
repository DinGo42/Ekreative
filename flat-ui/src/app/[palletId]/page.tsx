import { PalletsData } from '@flat-ui/shared';
import { PalletGalleryFooter, PalletGalleryHeader } from '@flat-ui/widgets';
import { PaleetGalary } from '@flat-ui/widgets/pallet-gallery/pallet-galary';

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
