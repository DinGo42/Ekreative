import { Pallet } from '@flat-ui/shared';
import { PalletsData } from '@flat-ui/shared/data';
export default function Home() {
  return (
    <>
      <div className="w-full flex h-[35%] gap-16">
        {PalletsData.slice(0, 3).map(({ paletteName, ...pallet }, index) => (
          <Pallet {...pallet} name={paletteName} key={index} />
        ))}
      </div>
      <div className="bg-secondary w-full pt-5 pb-5 flex items-center justify-around h-fit rounded-md">
        <span>Figma/Frama</span>
        <span>asda</span>
        <span>asdada</span>
      </div>
      <div className="grid grid-cols-3 h-full gap-x-14 gap-y-10">
        {PalletsData.slice(3).map(({ paletteName, ...pallet }, index) => (
          <Pallet {...pallet} name={paletteName} key={index} />
        ))}
      </div>
    </>
  );
}
