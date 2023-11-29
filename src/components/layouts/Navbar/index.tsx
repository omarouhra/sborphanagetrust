import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Button from '@/components/core/Button';
import CloseIcon from '@/icons/home/CloseIcon';
import HamburgerMenuIcon from '@/icons/home/HamburgerMenuIcon';
import LogoIcon from '@/icons/home/LogoIcon';
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
      <div>
        <header
          className={cx(
            'flex w-full items-center  justify-between py-2 md:py-5 max-w-[1140px]  mx-auto',
            isOpen ? 'px-0' : 'px-3',
          )}
        >
          <div className="w-44 cursor-pointer lg:w-52">
            <Link href="/" aria-label="Home">
              <LogoIcon />
            </Link>
          </div>

          <nav className="hidden w-full flex-row justify-end space-x-3 lg:flex">
            {menuItems.map((menu, index) => {
              return <MenuItems items={menu} key={index} pathname={pathname} />;
            })}
          </nav>
          <div
            className={cx(
              'block lg:hidden ',
              isOpen ? 'fixed top-0 right-0 py-2 z-50 ' : 'py-5',
            )}
          >
            <Button
              appearance="toggleNavigation"
              onClick={() => setOpen(!isOpen)}
              className="overflow-hidden"
            >
              <div
                aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                className={
                  isOpen
                    ? 'flex -translate-y-6   flex-col  space-y-6 text-green-1 transition duration-500 ease-in-out md:-translate-y-5 '
                    : 'flex translate-y-6 flex-col space-y-6 text-green-1 transition duration-500 ease-in-out  md:translate-y-5'
                }
              >
                <HamburgerMenuIcon />
                <CloseIcon />
              </div>
            </Button>
          </div>
          {isOpen && (
            <ul className="fixed top-0 z-50 h-screen w-full space-y-3 overflow-hidden bg-white px-3 py-20">
              {menuItems.map((menu, index) => {
                return (
                  <MenuItems
                    items={menu}
                    key={index}
                    pathname={pathname}
                    className="justify-center"
                  />
                );
              })}
            </ul>
          )}
        </header>
      </div>
    </section>
  );
}
