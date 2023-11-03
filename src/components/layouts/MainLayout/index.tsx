import React from 'react';

import { cx } from '@/utils/cx';

import Footer from '../Footer';
import Navbar from '../Navbar';

type Props = {
  children: React.ReactNode;
  className?: string;
};
export default function MainLayout({ children, className }: Props) {
  return (
    <section className={cx('flex w-full flex-col', className)}>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
