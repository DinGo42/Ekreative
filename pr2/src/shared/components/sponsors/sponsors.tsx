import { Company1, Company2, Company3, Company4, Company5 } from '@pr2/icons';

export const Sponsors = () => (
  <div className="flex w-full items-center justify-between">
    <div className="flex flex-col text-bs-1">
      <span className="text-lg">100.000+</span>
      <span>Finsweet Users</span>
    </div>
    <Company1 className="max-dectopS:hidden" />
    <Company2 className="max-dectopS:hidden" />
    <Company3 className="max-tabletS_Plus:hidden" />
    <Company4 className="max-tabletS:hidden" />
    <Company5 className="max-phoneM:hidden" />
  </div>
);
