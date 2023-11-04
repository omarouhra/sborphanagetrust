import type { StaticImageData } from 'next/image';
import React from 'react';

import CustomImage from '@/components/core/CustomImage';
import BirthIcon from '@/icons/sponsor/BirthIcon';
import CalendarIcon from '@/icons/sponsor/CalendarIcon';
import SbilingIcon from '@/icons/sponsor/SbilingIcon';

type Props = {
  src: string | StaticImageData;
  name: string;
  dateOfBirth: string;
  siblings: {
    sisters: number;
    brothers: number;
  };
  admiDate: string;
};
export default function ChildGrid({
  src,
  name,
  dateOfBirth,
  siblings,
  admiDate,
}: Props) {
  return (
    <div className="relative">
      <div className="flex h-[310px] w-[290px] items-end rounded-2xl bg-white px-5 py-6">
        <div className="w-full">
          <p className="mb-8 text-center text-lg font-medium leading-normal text-dark-1">
            {name}
          </p>
          <div className="flex flex-col space-y-4 text-sm leading-normal text-dark-1">
            <div className="flex flex-nowrap items-center space-x-2">
              <BirthIcon />
              <p>
                Date of Birth: <span>{dateOfBirth}</span>
              </p>
            </div>
            <div className="flex flex-nowrap items-center space-x-2">
              <SbilingIcon />
              <p>
                Siblings: <span>{siblings.brothers}</span> Brothers,
                <span>{siblings.sisters}</span> Sisters
              </p>
            </div>
            <div className="flex flex-nowrap items-center space-x-2">
              <CalendarIcon />
              <p>
                Admission Date: <span>{admiDate}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -top-20 left-12 h-52 w-52 rounded-full">
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
