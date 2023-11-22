import type { StaticImageData } from 'next/image';
import React from 'react';

import Button from '@/components/core/Button';
import CustomImage from '@/components/core/CustomImage';
import HeartIcon from '@/icons/home/heartIcon';

type Props = {
  src: string | StaticImageData;
  title: string;
  description: string;
  country: string;
  flag: string | StaticImageData;
  raised: string;
  goal: string;
  donatone: number;
};
export default function FundraisingGrid({
  src,
  title,
  description,
  country,
  flag,
  raised,
  goal,
  donatone,
}: Props) {
  return (
    <div className="h-[633px] w-full  rounded-2xl bg-white xl:w-[366px]">
      <div className="relative h-[245px] rounded-t-2xl">
        <CustomImage
          src={src}
          alt={`${title}-project`}
          priority
          isBlurring
          className="h-[245px] rounded-t-2xl bg-cover"
        />
      </div>
      <div className="flex flex-col items-start px-4 py-8">
        <p className="mb-3 text-lg font-bold  capitalize text-green-1">
          {title}
        </p>
        <p className="mb-3 text-xl font-bold text-dark-1">{description}</p>
        <div className="mb-8 flex items-center space-x-2">
          <div className="relative h-6 w-6 rounded-full border-2 border-red-900">
            <CustomImage
              src={flag}
              alt={`${title}-country`}
              priority
              isBlurring
              className="h-6 w-6 rounded-full object-cover"
            />
          </div>
          <p className="text-base capitalize  text-grey-4">{country}</p>
        </div>
        <div className="mb-6 w-full">
          <div className="mb-4 flex items-center justify-between space-x-2 capitalize  text-dark-1">
            <p className="text-base ">Donatone</p>
            <span className="text-sm">{donatone} %</span>
          </div>
          <div className="relative h-full w-full">
            <div className="h-2 w-full rounded-2xl  bg-green-1/20" />
            <div
              className={`absolute inset-0 h-2 rounded-2xl bg-green-1`}
              style={{ width: `${donatone}%` }}
            />
          </div>
        </div>
        <div className="mb-8 flex w-full items-center justify-between space-x-2 text-base capitalize  text-dark-1">
          <p>
            Raised: $<span>{raised}</span>
          </p>
          <p>
            Goal: $<span>{goal}</span>
          </p>
        </div>
        <div>
          <Button
            appearance="secondary"
            label={'Donate now'}
            icon={<HeartIcon />}
            className="border border-green-1"
          />
        </div>
      </div>
    </div>
  );
}
