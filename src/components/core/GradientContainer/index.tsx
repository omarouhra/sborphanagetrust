import React from 'react';

import maskOb from '@/public/assets/home/mask-ob.png';
import { cx } from '@/utils/cx';

import CustomImage from '../CustomImage';

type Props = {
  children: React.ReactNode;
  className?: string;
};
export default function GradientContainer({ children, className }: Props) {
  return (
    <div className="relative rounded-2xl bg-gradient text-center text-green-2">
      <div className={cx('py-8 md:px-12', className)}>{children}</div>
      <div className="absolute inset-0  h-full w-full">
        <CustomImage src={maskOb} alt="gradient-mask" isBlurring={false} />
      </div>
    </div>
  );
}
