import React from 'react';

import Button from '@/components/core/Button';
import CheckIcon from '@/icons/home/CheckIcon';
import { cx } from '@/utils/cx';

type Props = {
  className?: string;
  appearance?: 'selected' | 'normal';
  title: string;
  text: string;
  price: string;
  features: string[];
  label: string;
  hasSign: boolean;
};

const styles = {
  selected: {
    title: 'text-white',
    text: 'text-white',
    priceText: 'text-white',
    bgColor: 'bg-gradient-to-b from-[#009174] to-[#52BD94] xl:scale-110',
    featBg: 'bg-white',
    button: 'primary',
  },
  normal: {
    title: 'text-dark-d1',
    text: 'text-grey-g1',
    priceText: 'text-dark-d1',
    bgColor: 'bg-white',
    featBg: 'bg-[#F9FAFB]',
    button: 'secondary',
  },
};

export default function DonationTable({
  className,
  appearance = 'normal',
  title,
  text,
  price,
  features,
  label,
  hasSign,
}: Props) {
  return (
    <div
      className={cx(
        'h-[622px] xl:w-[360px] md:w-[320px] w-full rounded-2xl px-2 py-9 xl:px-5 shadow-xl shadow-gray-300',
        styles[appearance].bgColor,
        className,
      )}
    >
      <div className="flex flex-col items-center">
        <p
          className={cx(
            'text-4xl font-bold mb-2 text-center',
            styles[appearance].title,
          )}
        >
          {title}
        </p>
        <p
          className={cx(
            'text-base font-medium mb-5 w-56 text-center h-10',
            styles[appearance].text,
          )}
        >
          {text}
        </p>
        <div
          className={cx(
            'text-3xl font-bold text-center mb-7 flex space-x-1.5',
            styles[appearance].priceText,
          )}
        >
          {hasSign && (
            <span className="text-sm font-light text-grey-g1">£</span>
          )}
          <p>{price}</p>
        </div>
      </div>
      <div
        className={cx(
          'rounded-2xl py-6 px-2 xl:px-4',
          styles[appearance].featBg,
        )}
      >
        {features.map((feat, index: number) => (
          <div className="flex items-center space-x-3 py-3" key={index}>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-g1 text-white">
              <CheckIcon />
            </div>
            <p className="text-sm font-medium text-dark-d1">{feat}</p>
          </div>
        ))}
        <div className="mt-7 flex w-full items-center justify-center">
          <Button
            label={label}
            appearance={styles[appearance].button as any}
            className="shadow-xl shadow-gray-300"
          />
        </div>
      </div>
    </div>
  );
}