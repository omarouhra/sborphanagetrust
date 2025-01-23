import { NextSeo } from 'next-seo';
import React from 'react';

import About from '@/components/aboutUs/sections/About';
import Hero from '@/components/aboutUs/sections/Hero';
import MainLayout from '@/components/layouts/MainLayout';
import { baseURL } from '@/utils/constants/baseUrl';

function aboutUs() {
  return (
    <>
      <NextSeo title="About" canonical={`${baseURL}/about`} />
      <MainLayout>
        <Hero />
        <About />
      </MainLayout>
    </>
  );
}

export default aboutUs;
