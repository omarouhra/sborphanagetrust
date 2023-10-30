import cx from 'classnames';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
  alt: string;
  src: StaticImageData | string | any;
  className?: string;
  priority?: boolean;
  isBlurring?: boolean;
};

function CustomImage({
  alt,
  src,
  className,
  priority,
  isBlurring = true,
}: Props) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      src={src}
      alt={alt}
      priority={priority}
      className={cx(
        className,
        'duration-500 ease-in-out object-cover',
        isLoading && isBlurring
          ? 'scale-110 blur-2xl grayscale'
          : 'scale-100 blur-0 grayscale-0',
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}

export default CustomImage;
