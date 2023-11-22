import type { StaticImageData } from 'next/image';
import React from 'react';

import CustomImage from '@/components/core/CustomImage';
import AgeIcon from '@/icons/hifz/AgeIcon';
import CertificateIcon from '@/icons/hifz/CertificateIcon';

type Props = {
  src: string | StaticImageData;
  name: string;
  age: string;
  grad_date: string;
};
export default function HifzGrid({ src, name, age, grad_date }: Props) {
  return (
    <div className="relative">
      <div className="flex h-[280px] w-[270px] items-end rounded-2xl bg-white px-5 py-6">
        <div className="w-full">
          <p className="mb-8 text-center text-lg font-medium text-dark-1 md:leading-normal">
            {name}
          </p>
          <div className="flex  flex-col space-y-4 text-sm leading-normal ">
            <div className="flex flex-nowrap items-center space-x-2 text-green-1">
              <AgeIcon />
              <p className="text-dark-1">
                Age: <span>{age} </span>
                years old
              </p>
            </div>
            <div className="flex  flex-nowrap items-center space-x-2 text-green-1">
              <CertificateIcon />
              <p className="text-dark-1">
                Graduation date: <span>{grad_date}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -top-20 left-9 h-52 w-52 rounded-full">
        <CustomImage
          src={src}
          alt={`${name}-child`}
          priority
          isBlurring
          className="rounded-full"
        />
      </div>
    </div>
  );
}
