import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';
import './globals.css';
import { AppWrapper } from '@flat-ui/shared';

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
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
