import type { NextPage } from 'next';

import Navbar from '@/components/Navbar';

const Home: NextPage = () => (
  <div className="flex h-screen w-full">
    <Navbar />
    {/* <h1 className="text-3xl font-semibold">Welcome back</h1>
    <Button label="Donate Now" icon={<HeartIcon />}></Button> */}
  </div>
);

export default Home;
