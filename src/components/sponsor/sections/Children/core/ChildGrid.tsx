import type { StaticImageData } from 'next/image';
import React from 'react';

import CustomImage from '@/components/core/CustomImage';
import BirthIcon from '@/icons/sponsor/BirthIcon';
import CalendarIcon from '@/icons/sponsor/CalendarIcon';
import SbilingIcon from '@/icons/sponsor/SbilingIcon';
import { cx } from '@/utils/cx';

type Props = {
  id: number;
  image: string | StaticImageData;
  name: string;
  dateOfBirth?: string | undefined;
  siblings?: string | undefined;
  admissionDate?: string | undefined;
};
export default function ChildGrid({
  image,
  name,
  dateOfBirth,
  siblings,
  admissionDate,
}: Props) {
  return (
    <div className="relative">
      <div className="flex h-[310px] w-[290px] items-end rounded-2xl bg-white px-5 py-6">
        <div className="flex h-2/3 w-full flex-col">
          <p className="mb-8 pt-5 text-center text-lg font-medium leading-normal text-dark-1">
            {name}
          </p>
          <div className="flex flex-col space-y-4 text-sm leading-normal text-dark-1">
            {dateOfBirth && (
              <div className={cx('flex flex-nowrap items-center space-x-2')}>
                <BirthIcon />
                <p>
                  Date of Birth: <span>{dateOfBirth}</span>
                </p>
              </div>
            )}
            {siblings && (
              <div className={cx('flex flex-nowrap items-center space-x-2')}>
                <SbilingIcon />
                <p>Siblings: {siblings}</p>
              </div>
            )}
            {admissionDate && (
              <div className={cx('flex flex-nowrap items-center space-x-2')}>
                <CalendarIcon />
                <p>
                  Admission Date: <span>{admissionDate}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="absolute -top-24 left-11 h-52 w-52 rounded-full">
        <CustomImage
          src={image}
          alt={`${name}-child`}
          priority
          isBlurring
          className="rounded-full"
          layout="fill"
        />
      </div>
    </div>
  );
}
