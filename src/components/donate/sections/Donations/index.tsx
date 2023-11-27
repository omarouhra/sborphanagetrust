import React from 'react';

import DonationGrid from '@/components/core/DonationGrid';
import Wrapper from '@/components/layouts/Wrapper';

export default function Donations() {
  return (
    <section>
      <Wrapper>
        <div className="mx-auto mb-10 w-full md:mb-24 md:max-w-3xl">
          <p className="text-center text-lg font-light text-grey-2 md:text-2xl md:leading-normal">
            All donations made via secure
            <span className="px-1 font-medium text-green-1">PayPal</span>
            or
            <span className="px-1 font-medium text-green-1">UK bank</span>
            transferfor direct debit please contact us via email.
          </p>
        </div>
        <DonationGrid />
      </Wrapper>
    </section>
  );
}
