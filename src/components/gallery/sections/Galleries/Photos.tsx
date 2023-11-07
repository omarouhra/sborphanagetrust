import React from 'react';

import CustomImage from '@/components/core/CustomImage';
import gallery_1 from '@/public/assets/gallery/gallery_1.png';
import gallery_2 from '@/public/assets/gallery/gallery_2.png';

export default function Photos() {
  return (
    <div className="grid gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
      {[...Array(12)].map((index: number) => (
        <div key={index} className="rounded-2xl md:h-[244px] md:w-[365]">
          <CustomImage
            alt={`gallery_${index}`}
            src={gallery_1}
            isBlurring
            className="rounded-2xl"
          />
        </div>
      ))}
      {[...Array(6)].map((index: number) => (
        <div key={index} className="rounded-2xl md:h-[550px] md:w-[365]">
          <CustomImage
            alt={`gallery_${index}`}
            src={gallery_2}
            isBlurring
            className="rounded-2xl"
          />
        </div>
      ))}
      {[...Array(12)].map((index: number) => (
        <div key={index} className="rounded-2xl md:h-[244px] md:w-[365]">
          <CustomImage
            alt={`gallery_${index}`}
            src={gallery_1}
            isBlurring
            className="rounded-2xl"
          />
        </div>
      ))}
    </div>
  );
}
