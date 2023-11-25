import { NextSeo } from 'next-seo';
import React from 'react';

import About from '@/components/aboutUs/sections/About';
import Hero from '@/components/aboutUs/sections/Hero';
import GlobalLayout from '@/components/layouts/GlobalLayout';
import MainLayout from '@/components/layouts/MainLayout';
import { baseURL } from '@/utils/constants/baseUrl';

function aboutUs() {
  return (
    <GlobalLayout>
      <NextSeo title="About" canonical={`${baseURL}/about`} />
      <MainLayout className="relative z-30">
        <Hero />
        <About />
      </MainLayout>
    </GlobalLayout>
  );
}

export default aboutUs;
