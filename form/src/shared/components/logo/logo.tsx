import { LogoIcon } from '@form/icons';

export const Logo = () => (
  <div className="flex gap-[13px] items-center">
    <LogoIcon />
    <span className="text-black text-large-secondary uppercase">
      company name
    </span>
  </div>
);
