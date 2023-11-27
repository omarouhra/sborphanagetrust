import { NextSeo } from 'next-seo';
import React from 'react';

import Galleries from '@/components/gallery/sections/Galleries';
import Hero from '@/components/gallery/sections/Hero';
import GlobalLayout from '@/components/layouts/GlobalLayout';
import MainLayout from '@/components/layouts/MainLayout';
import { baseURL } from '@/utils/constants/baseUrl';

export default function gallery() {
  return (
    <GlobalLayout>
      <NextSeo title="Gallery" canonical={`${baseURL}/gallery`} />
      <MainLayout className="relative z-30">
        <Hero />
        <Galleries />
      </MainLayout>
    </GlobalLayout>
  );
}
