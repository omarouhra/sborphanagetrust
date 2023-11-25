import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React, { useState } from 'react';

import { cx } from '@/utils/cx';

type Props = {
  alt: string;
  src: StaticImageData | string | any;
  className?: string;
  priority?: boolean;
  isBlurring?: boolean;
  isOverlay?: boolean;
};

function CustomImage({
  alt,
  src,
  className,
  priority,
  isBlurring = true,
  isOverlay = false,
}: Props) {
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        priority={priority}
        className={cx(
          className,
          'duration-500 ease-in-out object-cover',
          isLoading && isBlurring
            ? 'scale-100 blur-xl grayscale'
            : 'scale-100 blur-0 grayscale-0',
        )}
        onLoadingComplete={() => setLoading(false)}
      />
      {isOverlay && !isLoading && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-[#0000007d] to-[#0000007d]" />
      )}
    </>
  );
}

export default CustomImage;
