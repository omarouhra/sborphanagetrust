import React from 'react';

import Heading from '@/components/core/Heading';
import Wrapper from '@/components/layouts/Wrapper';
import { STATICS } from '@/utils/constants/statics';

import StaticItem from './core/StaticItem';

export default function Statics() {
  return (
    <section className="bg-gradient-to-r from-[#009174] to-[#52BD94]">
      <Wrapper>
        <div className="text-white">
          <Heading
            text="Our Statics"
            className="mb-16 text-center font-bold"
            appearance="primary"
          />
          <div className="flex flex-col space-y-5 md:flex-row md:items-center md:space-x-2 md:space-y-0 lg:space-x-5">
            {STATICS.map((item, index: number) => (
              <StaticItem key={index} {...item} />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
