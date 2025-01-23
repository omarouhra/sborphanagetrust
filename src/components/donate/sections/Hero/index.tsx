import React from 'react';

import Heading from '@/components/core/Heading';
import HeroLayout from '@/components/layouts/HeroLayout';
import heroBg from '@/public/assets/donate/hero-bg.png';

export default function Hero() {
  return (
    <HeroLayout heroBg={heroBg}>
      <Heading text="Make a donation" />
    </HeroLayout>
  );
}
