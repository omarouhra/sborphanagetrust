import React from 'react';

import Button from '@/components/core/Button';
import Heading from '@/components/core/Heading';
import Paragraph from '@/components/core/Paragraph';
import HeroLayout from '@/components/layouts/HeroLayout';
import HeartIcon from '@/icons/home/heartIcon';
import heroBg from '@/public/assets/home/hero-bg.png';

export default function Hero() {
  return (
    <HeroLayout heroBg={heroBg}>
      <div className="w-full max-w-[800px]">
        <Heading
          text="Empower Orphaned Children through Education and Hope"
          className="mb-4"
        />
        <Paragraph
          text="Your Compassionate Donation Can Make a Profound Difference: Join Us in Our Mission to Transform Lives and Give Hope to Children in Need of a Brighter Future"
          className="mb-4"
        />
      </div>
      <Button
        icon={<HeartIcon />}
        label="Donate Now"
        className="duration-200 hover:opacity-90"
      />
    </HeroLayout>
  );
}
