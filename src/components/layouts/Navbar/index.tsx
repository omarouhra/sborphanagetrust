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
      <div className="bg-green-g2">
        <header
          className={cx(
            'flex w-full items-center justify-between  py-5 max-w-[1140px]  mx-auto',
            isOpen ? 'px-0' : '',
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
          <div
            className={cx(
              'block lg:hidden',
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
