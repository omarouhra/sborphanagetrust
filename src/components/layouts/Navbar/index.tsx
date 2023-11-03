import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import CustomImage from '@/components/core/CustomImage';
import Logo from '@/public/assets/Logo.png';
import { menuItems } from '@/utils/constants/menuItems';
import { cx } from '@/utils/cx';

import NavBanner from './ NavBanner';
import MenuItems from './MenuItems';

export default function Navbar() {
  const { pathname } = useRouter();

  return (
    <section className="w-full">
      <NavBanner />
      <div className="bg-green-2">
        <header
          className={cx(
            'flex w-full items-center justify-between  py-5 max-w-[1140px]  mx-auto',
          )}
        >
          <div className="w-44 lg:w-52">
            {/**
             * TODO:change Logo to SVG
             */}
            <Link href="/" aria-label="Home">
              <CustomImage
                alt="sbo-log"
                src={Logo}
                isBlurring={false}
                priority
              />
            </Link>
          </div>

          <nav className="hidden w-full flex-row justify-end space-x-3 lg:flex">
            {menuItems.map((menu, index) => {
              return <MenuItems items={menu} key={index} pathname={pathname} />;
            })}
          </nav>
        </header>
      </div>
    </section>
  );
}
