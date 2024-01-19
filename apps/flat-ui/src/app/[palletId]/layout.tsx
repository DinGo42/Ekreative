import { PalletGalleryHeader } from "@flat-ui/shared";

export default function PalletLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full flex-col justify-between">
      <PalletGalleryHeader />
      {children}
    </div>
  );
}
