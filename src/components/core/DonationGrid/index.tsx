import React from 'react';

import DonationTable from '@/components/home/sections/Donation/core/DonationTable';

const DONATION = [
  {
    appearance: 'normal',
    title: 'Be a Sponsor',
    text: 'one child for a year',
    price: '240',
    features: [
      '£240 one off',
      '£20 monthly direct debit',
      '100% donation used',
      'Get frequent updates',
      'Talk to your sponsored child',
    ],
    label: 'Sponsor a child',
    hasSign: true,
    link: 'https://www.paypal.com/paypalme/sborphanage/240',
  },
  {
    appearance: 'selected',
    title: 'Zakat Donation',
    text: 'make your Zakat donation',
    price: '2.5%',
    features: [
      'Yearly one off',
      'Monthly direct debit',
      '100% donation used',
      'Eligible to receive zakat',
      'Yearly news and updates',
    ],
    label: 'Zakat Donation',
    hasSign: false,
    link: 'https://www.paypal.com/paypalme/sborphanage',
  },
  {
    appearance: 'normal',
    title: 'Sadaqah Jariyah',
    text: 'Unique and sustainable projects',
    price: 'Any',
    features: [
      'One off',
      'Monthly direct debit',
      '100% donation used',
      'Used in unique projects',
      'Yearly news and updates',
    ],
    label: 'Sadaqah Donation',
    hasSign: false,
    link: 'https://www.paypal.com/paypalme/sborphanage',
  },
];
export default function DonationGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-24">
      {DONATION.map((donat, index: number) => (
        <DonationTable
          key={index}
          {...donat}
          appearance={donat.appearance as any}
        />
      ))}
    </div>
  );
}
