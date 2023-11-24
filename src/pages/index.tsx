import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import AboutSB from '@/components/home/sections/AboutSB';
import Donation from '@/components/home/sections/Donation';
import Hero from '@/components/home/sections/Hero';
import Provision from '@/components/home/sections/Provision';
import Statics from '@/components/home/sections/Statics';
import MainLayout from '@/components/layouts/MainLayout';
import { baseURL } from '@/utils/constants/baseUrl';

const Home: NextPage = () => (
  <div className="z-20 bg-[url('/assets/global-mask.png')] bg-cover bg-no-repeat">
    <NextSeo title="Home" canonical={baseURL} />
    <MainLayout>
      <Hero />
      <AboutSB />
      <Provision />
      <Statics />
      <Donation />
    </MainLayout>
  </div>
);

export default Home;
