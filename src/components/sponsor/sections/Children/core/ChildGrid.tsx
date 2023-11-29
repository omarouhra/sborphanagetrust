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
    <div>
      <div className="w-full -space-y-24 ">
        <div className="flex items-center justify-center">
          <div className="relative w-44 h-44 rounded-full">
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
        <div className=" flex w-full flex-col items-center justify-center shadow bg-white rounded-xl pt-24 pb-8 min-h-[300px] h-full">
          <p className="mb-8 pt-5 text-center text-lg font-medium leading-normal text-dark-1">
            {name}
          </p>
          <div className="flex flex-col space-y-4 text-sm leading-normal text-dark-1">
            <div>
              {dateOfBirth && (
                <div className={cx('flex flex-nowrap items-center space-x-2')}>
                  <BirthIcon />
                  <p>Date of Birth: {dateOfBirth}</p>
                </div>
              )}
            </div>
            <div>
              {siblings && (
                <div className={cx('flex flex-nowrap items-center space-x-2')}>
                  <SbilingIcon />
                  <p>Siblings: {siblings}</p>
                </div>
              )}
            </div>
            <div>
              {admissionDate && (
                <div className={cx('flex flex-nowrap items-center space-x-2')}>
                  <CalendarIcon />
                  <p>Admission Date: {admissionDate}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
