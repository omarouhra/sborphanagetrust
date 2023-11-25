import type { StaticImageData } from 'next/image';
import React from 'react';

import CustomImage from '@/components/core/CustomImage';
import { cx } from '@/utils/cx';

type Props = {
  children: React.ReactNode;
  className?: string;
  heroBg: string | StaticImageData;
};
export default function HeroLayout({ heroBg, children, className }: Props) {
  return (
    <div className="md:px-3">
      <div
        className={cx(
          'mx-auto flex max-w-[1200px]  text-white md:mt-8 md:rounded-xl',
          className,
        )}
      >
        <div className="relative h-[500px]">
          <div className="relative h-full">
            <CustomImage
              src={heroBg}
              alt="hero"
              className="md:rounded-lg"
              isOverlay
            />
          </div>
          <div className="absolute inset-0 flex h-full w-full flex-col items-start justify-end p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
