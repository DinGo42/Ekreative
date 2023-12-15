import { MenuIcon } from '@untitled/icons';
import { DropDown } from '../..';
export const PhoneMenu = () => {
  return (
    <DropDown
      DropDownWrapperClassName="tabletS:hidden static"
      buttonContent={<MenuIcon />}
      buttonProps={{
        className: 'p-2 rounded-lg',
      }}
      contentClassName="bg-white rounded-lg border-[1px] border-[#D0D5DD]"
      contentContainerClassName="absolute top-[68px] right-0 w-fit"
    >
      <span className="p-2 border-[#D0D5DD] border-b-[1px]">Home</span>
      <DropDown
        buttonTitle="Products"
        buttonProps={{
          className:
            'p-2 flex justify-between items-center gap-10 w-full border-b-[1px] border-[#D0D5DD]',
        }}
        contentClassName="border-b-[1px] border-[#D0D5DD]"
      >
        <span className="p-3">Products1</span>
        <span className="p-3">Products2</span>
        <span className="p-3">Products3</span>
      </DropDown>
      <DropDown
        buttonTitle="Resources"
        buttonProps={{
          className: 'p-2 rounded-lg flex justify-between items-center gap-10',
        }}
        contentClassName="border-t-[1px] border-[#D0D5DD]"
      >
        <span className="p-3">Resources1</span>
        <span className="p-3">Resources2</span>
        <span className="p-3">Resources3</span>
      </DropDown>
      <span className="p-3 border-[#D0D5DD] border-t-[1px]">Pricing</span>
    </DropDown>
  );
};
