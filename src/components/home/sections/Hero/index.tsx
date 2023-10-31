import React from 'react';

import Button from '@/components/core/Button';
import Heading from '@/components/core/Heading';
import Paragraph from '@/components/core/Paragraph';
import HeartIcon from '@/icons/heartIcon';

export default function Hero() {
  return (
    <section className="flex h-screen flex-col items-center justify-center bg-[url('/assets/home/hero-bg.png')] bg-cover bg-no-repeat px-3 text-white">
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
      <Button icon={<HeartIcon />} label="Donate Now" />
    </section>
  );
}
