import { DropDown } from '../drop-down';
import { Logo } from '../logo';
import { PhoneMenu } from './phone-menu.tsx';
export const Header = () => {
  return (
    <header className="w-full flex items-center max-tabletS:justify-between tabletS:gap-10 sticky top-0 bg-white z-50 pt-4 pb-4">
      <Logo />
      <div className="flex gap-8 items-center max-tabletS:hidden">
        <span className="text-medium-semibold-secondary text-gray-600">
          Home
        </span>
        <DropDown
          buttonTitle="Products"
          buttonProps={{
            className: 'p-2 flex justify-between items-center gap-2 w-full',
          }}
          titleclassName="text-medium-semibold-secondary text-gray-600"
          contentContainerClassName="absolute w-full bg-white"
          contentClassName="border-[1px] border-[#D0D5DD] rounded-lg"
        >
          <span className="p-3 text-gray-600">Products1</span>
          <span className="p-3 text-gray-600">Products2</span>
          <span className="p-3 text-gray-600">Products3</span>
        </DropDown>
        <DropDown
          titleclassName="text-medium-semibold-secondary text-gray-600"
          buttonTitle="Resources"
          buttonProps={{
            className: 'p-2 flex justify-between items-center gap-2 w-full',
          }}
          contentContainerClassName="absolute w-full bg-white"
          contentClassName="border-[1px] border-[#D0D5DD] rounded-lg"
        >
          <span className="p-3 text-gray-600">Resources1</span>
          <span className="p-3 text-gray-600">Resources2</span>
          <span className="p-3 text-gray-600">Resources3</span>
        </DropDown>
        <span className="text-medium-semibold-secondary text-gray-600">
          Pricing
        </span>
      </div>
      <PhoneMenu />
    </header>
  );
};
