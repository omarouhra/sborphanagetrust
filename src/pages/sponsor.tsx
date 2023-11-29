import { NextSeo } from 'next-seo';
import React from 'react';

import MainLayout from '@/components/layouts/MainLayout';
import Children from '@/components/sponsor/sections/Children';
import Hero from '@/components/sponsor/sections/Hero';
import { baseURL } from '@/utils/constants/baseUrl';

function sponsor() {
  return (
    <>
      <NextSeo title="Sponsor" canonical={`${baseURL}/about`} />
      <MainLayout>
        <Hero />
        <Children />
      </MainLayout>
    </>
  );
}

export default sponsor;
