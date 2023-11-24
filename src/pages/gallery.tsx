import { NextSeo } from 'next-seo';
import React from 'react';

import Galleries from '@/components/gallery/sections/Galleries';
import Hero from '@/components/gallery/sections/Hero';
import MainLayout from '@/components/layouts/MainLayout';
import { baseURL } from '@/utils/constants/baseUrl';

export default function gallery() {
  return (
    <div className="z-20 bg-[url('/assets/global-mask.png')] bg-cover bg-no-repeat">
      <NextSeo title="Gallery" canonical={`${baseURL}/gallery`} />
      <MainLayout>
        <Hero />
        <Galleries />
      </MainLayout>
    </div>
  );
}
