import { Comp1, Comp2, Comp3, Comp4, Comp5 } from '../../../public';

export const Sponsors = () => (
  <div className="flex w-full gap-16 items-center justify-between">
    <div className="flex flex-col text-bs-1">
      <span className="text-lg">100.000+</span>
      <span>Finsweet Users</span>
    </div>
    <Comp1 />
    <Comp2 />
    <Comp3 />
    <Comp4 />
    <Comp5 />
  </div>
);
