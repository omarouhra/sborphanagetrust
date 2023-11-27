import { NextSeo } from 'next-seo';
import React from 'react';

import Form from '@/components/contact/sections/Form';
import Hero from '@/components/contact/sections/Hero';
import GlobalLayout from '@/components/layouts/GlobalLayout';
import MainLayout from '@/components/layouts/MainLayout';
import { baseURL } from '@/utils/constants/baseUrl';

function contact() {
  return (
    <GlobalLayout>
      <NextSeo title="Contact" canonical={`${baseURL}/contact`} />
      <MainLayout className="relative z-30">
        <Hero />
        <Form />
      </MainLayout>
    </GlobalLayout>
  );
}

export default contact;
