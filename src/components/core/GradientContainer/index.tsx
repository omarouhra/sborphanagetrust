import React from 'react';

import { cx } from '@/utils/cx';

type Props = {
  children: React.ReactNode;
  className?: string;
};
export default function GradientContainer({ children, className }: Props) {
  return (
    <div className="rounded-2xl bg-gradient text-center text-green-2">
      <div
        className={cx(
          "bg-[url('/assets/home/mask-ob.png')] bg-cover bg-no-repeat px-2 py-8 md:px-12",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
