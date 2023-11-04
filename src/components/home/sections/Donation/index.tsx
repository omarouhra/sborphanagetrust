import React from 'react';

import DonationGrid from '@/components/core/DonationGrid';
import Heading from '@/components/core/Heading';
import Paragraph from '@/components/core/Paragraph';
import Wrapper from '@/components/layouts/Wrapper';

export default function Donation() {
  return (
    <section className="bg-gradient-to-b from-[#cbf1e9d5] to-[#a5b2af5d]">
      <Wrapper>
        <div className="mb-12 flex flex-col items-center md:mb-28">
          <Heading
            text="Donation"
            className="mb-4 text-center font-bold text-green-1"
            appearance="primary"
          />
          <Paragraph
            text="All donations made via secure PayPal or UK bank transferfor direct debit please contact us via email."
            className="max-w-lg text-center text-grey-2"
          />
        </div>
        <DonationGrid />
      </Wrapper>
    </section>
  );
}
