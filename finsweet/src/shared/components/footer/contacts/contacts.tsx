export const Constacts = () => (
  <div className="bg-yellow-90 phoneM:pl-6 pl-3 pt-4 pb-2 tabletS:pr-28 flex text-lb-1 gap-7 w-fit dectopS:ml-40 tabletS:ml-20 max-tabletS:w-full max-phoneSPlus:hidden">
    <div className="flex flex-col">
      <span>Email me at</span>
      <a className="text-bs-1" href="mailto:contact@website.com">
        contact@website.com
      </a>
    </div>
    <div className="flex flex-col">
      <span>Call us</span>
      <a className="text-bs-1" href="tel:+0927627728525">
        0927-6277-28525
      </a>
    </div>
  </div>
);
