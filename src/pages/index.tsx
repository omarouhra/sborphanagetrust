import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import AboutSB from '@/components/home/sections/AboutSB';
import Donation from '@/components/home/sections/Donation';
import Hero from '@/components/home/sections/Hero';
import Provision from '@/components/home/sections/Provision';
import Statics from '@/components/home/sections/Statics';
import GlobalLayout from '@/components/layouts/GlobalLayout';
import MainLayout from '@/components/layouts/MainLayout';
import { baseURL } from '@/utils/constants/baseUrl';

const Home: NextPage = () => (
  <GlobalLayout>
    <NextSeo title="Home" canonical={baseURL} />
    <MainLayout className="relative z-30">
      <Hero />
      <AboutSB />
      <Provision />
      <Statics />
      <Donation />
    </MainLayout>
  </GlobalLayout>
);

export default Home;
