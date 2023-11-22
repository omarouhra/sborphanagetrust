import React from 'react';

import Button from '@/components/core/Button';
import Heading from '@/components/core/Heading';
import Paragraph from '@/components/core/Paragraph';
import Wrapper from '@/components/layouts/Wrapper';
import HeartIcon from '@/icons/home/heartIcon';

export default function Hero() {
  return (
    <div className="md:px-3">
      <Wrapper className="flex h-[60vh] flex-col items-center justify-center bg-[url('/assets/home/hero-bg.png')] bg-cover bg-no-repeat px-3 text-white md:mt-12 md:rounded-xl">
        <div className="w-full max-w-[800px] text-center">
          <Heading
            text="Empower Orphaned Children through Education and Hope"
            className="mb-4"
          />
          <Paragraph
            text="Your Compassionate Donation Can Make a Profound Difference: Join Us in Our Mission to Transform Lives and Give Hope to Children in Need of a Brighter Future"
            className="mb-8"
          />
        </div>
        <Button
          icon={<HeartIcon />}
          label="Donate Now"
          className="duration-200 hover:opacity-90"
        />
      </Wrapper>
    </div>
  );
}
