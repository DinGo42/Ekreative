import { Company1, Company2, Company3, Company4, Company5 } from '@pr2/icons';

export const Sponsors = () => (
  <div className="flex w-full gap-16 items-center justify-between">
    <div className="flex flex-col text-bs-1">
      <span className="text-lg">100.000+</span>
      <span>Finsweet Users</span>
    </div>
    <Company1 />
    <Company2 />
    <Company3 />
    <Company4 />
    <Company5 />
  </div>
);
