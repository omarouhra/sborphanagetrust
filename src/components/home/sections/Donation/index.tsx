import React from 'react';

import Heading from '@/components/core/Heading';
import Paragraph from '@/components/core/Paragraph';
import MainLayout from '@/components/layouts/MainLayout';

import DonationTable from './core/DonationTable';

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
  },
];
export default function Donation() {
  return (
    <section className="bg-gradient-to-b from-[#cbf1e9d5] to-[#a5b2af5d]">
      <MainLayout>
        <div className="mb-12 flex flex-col items-center md:mb-28">
          <Heading
            text="Donation"
            className="mb-4 text-center font-bold text-green-g1"
            appearance="primary"
          />
          <Paragraph
            text="All donations made via secure PayPal or UK bank transferfor direct debit please contact us via email."
            className="max-w-lg text-center text-grey-g2"
          />
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-24">
          {DONATION.map((donat, index: number) => (
            <DonationTable
              key={index}
              {...donat}
              appearance={donat.appearance as any}
            />
          ))}
        </div>
      </MainLayout>
    </section>
  );
}
