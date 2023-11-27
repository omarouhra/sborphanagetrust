import { NextSeo } from 'next-seo';
import React from 'react';

import Donations from '@/components/donate/sections/Donations';
import Hero from '@/components/donate/sections/Hero';
import GlobalLayout from '@/components/layouts/GlobalLayout';
import MainLayout from '@/components/layouts/MainLayout';
import { baseURL } from '@/utils/constants/baseUrl';

function donate() {
  return (
    <GlobalLayout>
      <NextSeo title="Donate" canonical={`${baseURL}/donate`} />
      <MainLayout className="relative z-30">
        <Hero />
        <Donations />
      </MainLayout>
    </GlobalLayout>
  );
}

export default donate;
