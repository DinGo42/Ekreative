import Link from 'next/link';
import { ColorTypeSelector } from './select-color-type/select-color-type';

export const PalletGalleryHeader = () => (
  <header className="w-full flex items-center justify-between bg-white text-black p-3">
    <Link href={'/'} className="flex items-center gap-3">
      <span>←</span>
      <span>Back</span>
    </Link>
    <ColorTypeSelector />
    <button>Sound ON</button>
  </header>
);
