import { AppWrapper, Pallet } from '@flat-ui/shared';
import { PalletsData } from '@flat-ui/shared/data';
export default function Home() {
  return (
    <>
      <AppWrapper>
        <div className="w-full flex h-[35%] tabletM:gap-x-16 gap-x-8 gap-y-8 max-dectopS:grid max-dectopS:grid-cols-2 max-phoneM:grid-cols-1">
          {PalletsData.slice(0, 3).map(({ paletteName, ...pallet }, index) => (
            <Pallet {...pallet} name={paletteName} key={index} />
          ))}
        </div>
        <div className="bg-secondary w-full pt-5 pb-5 flex items-center justify-around h-fit rounded-md">
          <span>Figma/Frama</span>
          <span>asda</span>
          <span>asdada</span>
        </div>
        <div className="grid dectopS:grid-cols-3 phoneM:grid-cols-2 grid-cols-1 h-full tabletM:gap-x-14 gap-x-7 tabletM:gap-y-10 gap-y-4">
          {PalletsData.slice(3).map(({ paletteName, ...pallet }, index) => (
            <Pallet {...pallet} name={paletteName} key={index} />
          ))}
        </div>
      </AppWrapper>
    </>
  );
}
