import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Josh Thorpe Fitness & Injury Clinic',
  description: 'Sports therapy, personal training, injury rehabilitation and performance coaching.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
