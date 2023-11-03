import type { NextPage } from 'next';

import AboutSB from '@/components/home/sections/AboutSB';
import Donation from '@/components/home/sections/Donation';
import Hero from '@/components/home/sections/Hero';
import Provision from '@/components/home/sections/Provision';
import Statics from '@/components/home/sections/Statics';
import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';

const Home: NextPage = () => (
  <div className="flex  w-full flex-col">
    <Navbar />
    <Hero />
    <div className="bg-gradient-to-b from-[#cbf1e9d5]  to-[#a5b2af5d]">
      <AboutSB />
      <Provision />
    </div>
    <Statics />
    <Donation />
    <Footer />
  </div>
);

export default Home;
