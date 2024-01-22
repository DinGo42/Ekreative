import { PalletGalleryFooter, PalletsData } from "@flat-ui/shared";
import { PaletteGallery } from "@flat-ui/widgets";

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
      <div className="flex h-screen w-full flex-col justify-between">
        <main className="bg-secondary tabletS:grid-cols-4 tabletM:grid-cols-5 grid h-full w-full grid-cols-3">
          <PaletteGallery colors={colors} />
        </main>
        <PalletGalleryFooter paletteName={paletteName} />
      </div>
    </>
  );
};
export default PaletteGalleryPage;
