import React from 'react';

import About from '@/components/aboutUs/sections/About';
import Hero from '@/components/aboutUs/sections/Hero';
import MainLayout from '@/components/layouts/MainLayout';

function aboutUs() {
  return (
    <MainLayout>
      <Hero />
      <About />
    </MainLayout>
  );
}

export default aboutUs;
