import type { NextPage } from 'next';

import Hero from '@/components/home/sections/Hero';
import Navbar from '@/components/layouts/Navbar';

const Home: NextPage = () => (
  <div className="flex h-screen w-full flex-col">
    <Navbar />
    <Hero />
  </div>
);

export default Home;
