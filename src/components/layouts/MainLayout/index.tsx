import React from 'react';

import { cx } from '@/utils/cx';

type Props = {
  children: React.ReactNode;
  className?: string;
};
export default function MainLayout({ children, className }: Props) {
  return (
    <section
      className={cx(
        'lg:max-w-[1140px] w-full px-3 md:py-24 py-12 mx-auto',
        className,
      )}
    >
      {children}
    </section>
  );
}
