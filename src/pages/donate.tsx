import React from 'react';

import Donations from '@/components/donate/sections/Donations';
import Hero from '@/components/donate/sections/Hero';
import MainLayout from '@/components/layouts/MainLayout';

function donate() {
  return (
    <MainLayout>
      <Hero />
      <Donations />
    </MainLayout>
  );
}

export default donate;
