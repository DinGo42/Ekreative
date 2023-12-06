import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';
import './globals.css';
import { UIProvider } from '@flat-ui/shared';
import { TransitionWrapper } from '@flat-ui/widgets/transition-wrapper';

const barlow = Barlow({ weight: ['600'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <UIProvider>
          {/* <TransitionWrapper> */}
          {children}
          {/* </TransitionWrapper> */}
        </UIProvider>
      </body>
    </html>
  );
}
