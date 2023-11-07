import React from 'react';

import Heading from '@/components/core/Heading';

export default function Hero() {
  return (
    <section className="flex h-[80vh] flex-col items-center justify-center bg-[url('/assets/contact/hero-bg.png')] bg-cover bg-no-repeat px-3 text-white md:bg-contain">
      <div className="w-full text-center">
        <Heading text="Get In Touch" />
      </div>
    </section>
  );
}
