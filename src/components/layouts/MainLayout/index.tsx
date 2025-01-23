import React from 'react';

import CustomImage from '@/components/core/CustomImage';
import globalMask from '@/public/assets/global-mask.png';
import { cx } from '@/utils/cx';

import Footer from '../Footer';
import Navbar from '../Navbar';

type Props = {
  children: React.ReactNode;
  className?: string;
};
export default function MainLayout({ children, className }: Props) {
  return (
    <section className={cx('w-full h-screen', className)}>
      <div className="relative z-30 flex h-full w-full  flex-col">
        <Navbar />
        <div className="flex-1">
          <div className="relative h-full"> {children}</div>
        </div>
        <Footer />
      </div>
      <div className="absolute inset-0 w-full">
        <CustomImage src={globalMask} alt="globalmask" isBlurring={false} />
      </div>
    </section>
  );
}
