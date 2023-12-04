import {
  Company1,
  Company2,
  Company3,
  Company4,
  Company5,
} from '@finsweet/icons';
import { FC } from 'react';

export const Sponsors:FC = () => (
  <div className="flex w-full items-center justify-between">
    <div className="flex flex-col text-bs-1">
      <span className="text-lg">100.000+</span>
      <span>@finsweet Users</span>
    </div>
    <Company1 className="max-dectopS:hidden" />
    <Company2 className="max-dectopS:hidden" />
    <Company3 className="max-tabletS_Plus:hidden" />
    <Company4 className="max-tabletS:hidden" />
    <Company5 className="max-phoneM:hidden" />
  </div>
);
