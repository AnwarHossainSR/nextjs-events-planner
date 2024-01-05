import '@/styles/globals.css';

import { Inter as FontSans } from "next/font/google";

import MainFooter from '@/components/Footer';
import { cn } from '@/lib/utils';
import type { ChildrenProps } from '@/types';

export const metadata = {
  description:
    'A highly opinionated and complete starter for Next.js projects ready to production. Includes Typescript, Styled Components, Prettier, ESLint, Husky, SEO, and more.',
  keywords:
    'next, starter, typescript, tailwind css, prettier, eslint, husky, seo',
  title: 'Next Starter',
};

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default async function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body
        className={cn('h-full flex flex-col justify-between',fontSans.variable)}>
        <section className="flex-1">{children}</section>
        <MainFooter />
      </body>
    </html>
  );
}
