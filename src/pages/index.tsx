import type { NextPage } from 'next';

import AboutSB from '@/components/home/sections/AboutSB';
import Donation from '@/components/home/sections/Donation';
import Hero from '@/components/home/sections/Hero';
import Provision from '@/components/home/sections/Provision';
import Statics from '@/components/home/sections/Statics';
import MainLayout from '@/components/layouts/MainLayout';

const Home: NextPage = () => (
  <MainLayout>
    <Hero />
    <div className="bg-gradient-to-b from-[#cbf1e9d5]  to-[#dee4e25d]">
      <AboutSB />
      <Provision />
    </div>
    <Statics />
    <Donation />
  </MainLayout>
);

export default Home;
