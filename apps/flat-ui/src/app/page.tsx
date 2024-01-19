import { AppWrapper, Pallet } from "@flat-ui/shared";
import { PalletsData } from "@flat-ui/shared/data";
export default function Home() {
  return (
    <>
      <AppWrapper>
        <div className="flex h-[35%] w-full gap-x-8 gap-y-8 max-desktopS:grid max-desktopS:grid-cols-2 max-phoneM:grid-cols-1 tabletM:gap-x-16">
          {PalletsData.slice(0, 3).map(({ paletteName, ...pallet }, index) => (
            <Pallet {...pallet} name={paletteName} key={index} />
          ))}
        </div>
        <div className="flex h-fit w-full items-center justify-around rounded-md bg-secondary pb-5 pt-5">
          <span>Figma/Figma</span>
          <span>Ivan</span>
          <span>Nesterenko</span>
        </div>
        <div className="grid h-full grid-cols-1 gap-x-7 gap-y-4 phoneM:grid-cols-2 tabletM:gap-x-14 tabletM:gap-y-10 desktopS:grid-cols-3">
          {PalletsData.slice(3).map(({ paletteName, ...pallet }, index) => (
            <Pallet {...pallet} name={paletteName} key={index} />
          ))}
        </div>
      </AppWrapper>
    </>
  );
}
