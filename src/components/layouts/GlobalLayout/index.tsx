import React from 'react';

import CustomImage from '@/components/core/CustomImage';
import globalMask from '@/public/assets/global-mask.png';

type Props = {
  children: React.ReactNode;
};
export default function GlobalLayout({ children }: Props) {
  return (
    <div className="relative w-full">
      {children}
      <div className="absolute inset-0 w-full">
        <CustomImage src={globalMask} alt="globalmask" isBlurring={false} />
      </div>
    </div>
  );
}
