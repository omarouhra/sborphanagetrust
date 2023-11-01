import { Spin as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import CustomImage from '@/components/core/CustomImage';
import Logo from '@/public/assets/Logo.png';
import { menuItems } from '@/utils/constants/menuItems';
import { cx } from '@/utils/cx';

import NavBanner from './ NavBanner';
import MenuItems from './MenuItems';

export default function Navbar() {
  const { pathname } = useRouter();
  const [isOpen, setOpen] = useState(false);


  return (
    <section className="w-full">
      <NavBanner />
      <header
        className={cx(
          'flex w-full items-center justify-between bg-green-g2  md:px-10  py-5 xl:px-40',
          isOpen ? 'px-0' : 'px-3',
        )}
      >
        <div className="w-44 lg:w-52">
          {/**
           * TODO:change Logo to SVG
           */}
          <Link href="/" aria-label="Home">
            <CustomImage alt="sbo-log" src={Logo} isBlurring={false} priority />
          </Link>
        </div>
        <div
          className={cx(
            'block md:hidden',
            isOpen && 'fixed top-0 right-0 py-2 z-50 ',
          )}
        >
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="#009174"
            duration={0.5}
          />
        </div>
        <nav
          className={cx(
            'w-full md:max-w-xl md:space-x-5 lg:max-w-2xl lg:items-center md:justify-end lg:space-x-10 xl:max-w-4xl xl:space-x-16',
            isOpen
              ? 'fixed top-0 py-28 flex h-screen w-full flex-col bg-white px-3 space-y-4'
              : 'hidden md:flex',
          )}
        >
          {menuItems.map((menu, index) => {
            return (
              <MenuItems
                items={menu}
                key={index}
                isOpen={isOpen}
                pathname={pathname}
              />
            );
          })}
        </nav>
      </header>
    </section>
  );
}
