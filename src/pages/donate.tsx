import { NextSeo } from 'next-seo';
import React from 'react';

import Donations from '@/components/donate/sections/Donations';
import Hero from '@/components/donate/sections/Hero';
import MainLayout from '@/components/layouts/MainLayout';
import { baseURL } from '@/utils/constants/baseUrl';

function donate() {
  return (
    <>
      <NextSeo title="Donate" canonical={`${baseURL}/donate`} />
      <MainLayout>
        <Hero />
        <Donations />
      </MainLayout>
    </>
  );
}

export default donate;
