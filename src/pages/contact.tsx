import { NextSeo } from 'next-seo';
import React from 'react';

import Form from '@/components/contact/sections/Form';
import Hero from '@/components/contact/sections/Hero';
import MainLayout from '@/components/layouts/MainLayout';
import { baseURL } from '@/utils/constants/baseUrl';

function contact() {
  return (
    <>
      <NextSeo title="Contact" canonical={`${baseURL}/contact`} />
      <MainLayout>
        <Hero />
        <Form />
      </MainLayout>
    </>
  );
}

export default contact;
