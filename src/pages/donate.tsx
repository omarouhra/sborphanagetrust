import { NextSeo } from 'next-seo';
import React from 'react';

import Donations from '@/components/donate/sections/Donations';
import Hero from '@/components/donate/sections/Hero';
import MainLayout from '@/components/layouts/MainLayout';
import { baseURL } from '@/utils/constants/baseUrl';

function donate() {
  return (
    <div className="z-20 bg-[url('/assets/global-mask.png')] bg-cover bg-no-repeat">
      <NextSeo title="Donate" canonical={`${baseURL}/donate`} />
      <MainLayout>
        <Hero />
        <Donations />
      </MainLayout>
    </div>
  );
}

export default donate;
