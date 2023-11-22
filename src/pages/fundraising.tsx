import React from 'react';

import FundraisingGrid from '@/components/fundraisingProject/core/FundraisingGrid';
import MainLayout from '@/components/layouts/MainLayout';
import Wrapper from '@/components/layouts/Wrapper';
import flag from '@/public/assets/flag.png';
import Fundraising from '@/public/assets/fundraising.png';

const FUNDRAISINGS = [
  {
    src: Fundraising,
    title: 'Homeless',
    description: 'Donate for poor peoples treatment and medicine',
    flag,
    country: 'Pakistan',
    raised: '600',
    goal: '1,000',
    donatone: 60,
  },
  {
    src: Fundraising,
    title: 'Homeless',
    description: 'Donate for poor peoples treatment and medicine',
    flag,
    country: 'Pakistan',
    raised: '600',
    goal: '1,000',
    donatone: 60,
  },
  {
    src: Fundraising,
    title: 'Homeless',
    description: 'Donate for poor peoples treatment and medicine',
    flag,
    country: 'Pakistan',
    raised: '600',
    goal: '1,000',
    donatone: 60,
  },
  {
    src: Fundraising,
    title: 'Homeless',
    description: 'Donate for poor peoples treatment and medicine',
    flag,
    country: 'Pakistan',
    raised: '600',
    goal: '1,000',
    donatone: 60,
  },
  {
    src: Fundraising,
    title: 'Homeless',
    description: 'Donate for poor peoples treatment and medicine',
    flag,
    country: 'Pakistan',
    raised: '600',
    goal: '1,000',
    donatone: 60,
  },
  {
    src: Fundraising,
    title: 'Homeless',
    description: 'Donate for poor peoples treatment and medicine',
    flag,
    country: 'Pakistan',
    raised: '600',
    goal: '1,000',
    donatone: 60,
  },
  {
    src: Fundraising,
    title: 'Homeless',
    description: 'Donate for poor peoples treatment and medicine',
    flag,
    country: 'Pakistan',
    raised: '600',
    goal: '1,000',
    donatone: 60,
  },
  {
    src: Fundraising,
    title: 'Homeless',
    description: 'Donate for poor peoples treatment and medicine',
    flag,
    country: 'Pakistan',
    raised: '600',
    goal: '1,000',
    donatone: 60,
  },
  {
    src: Fundraising,
    title: 'Homeless',
    description: 'Donate for poor peoples treatment and medicine',
    flag,
    country: 'Pakistan',
    raised: '600',
    goal: '1,000',
    donatone: 60,
  },
];
export default function fundraising() {
  return (
    <MainLayout>
      <section className="bg-gradient-to-b from-[#cbf1e9d5]  to-[#dee4e25d]  pt-16">
        <Wrapper>
          <div className="grid place-items-center gap-y-28 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 lg:gap-8 xl:grid-cols-3 xl:gap-28">
            {FUNDRAISINGS.map((fund, index: number) => (
              <FundraisingGrid key={index} {...fund} />
            ))}
          </div>
        </Wrapper>
      </section>
    </MainLayout>
  );
}
