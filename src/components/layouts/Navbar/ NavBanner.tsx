import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Button from '@/components/core/Button';
import CloseIcon from '@/icons/home/CloseIcon';
import HamburgerMenuIcon from '@/icons/home/HamburgerMenuIcon';
import PhoneIcon from '@/icons/home/phoneIcon';
import EmailIcon from '@/icons/share/emailIcon';
import FacebookIcon from '@/icons/share/facebookIcon';
import YoutubeIcon from '@/icons/share/youtubeIcon';
import { menuItems } from '@/utils/constants/menuItems';
import { cx } from '@/utils/cx';

import MenuItems from './MenuItems';

export default function NavBanner() {
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useRouter();

  return (
    <section className="flex items-start justify-between bg-gradient">
      <div className="mx-auto flex w-full max-w-[1140px] flex-col items-start space-y-2  px-3 py-5 text-white md:flex-row md:items-center md:justify-between md:space-x-3">
        <div className="flex items-center space-x-4">
          <YoutubeIcon />
          <FacebookIcon />
        </div>
        <div className="flex flex-col items-start space-y-2 text-sm md:flex-row md:items-center md:space-x-8 md:space-y-0">
          <div className="flex items-center space-x-2">
            <EmailIcon />
            <Link href="mailto:info@sborphanagetrust.co.uk">
              <span className="cursor-pointer">
                info@sborphanagetrust.co.uk
              </span>
            </Link>
          </div>
          <div className="flex space-x-2 md:items-center">
            <PhoneIcon />
            <Link href="tel:07903106037">
              <span className="cursor-pointer">0790 310 6037</span>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={cx(
          'block lg:hidden ',
          isOpen ? 'fixed top-0 right-0 py-2 z-50 ' : 'py-5',
        )}
      >
        {/* <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color={isOpen ? '#009174' : 'white'}
          duration={0.5}
        /> */}
        <Button
          appearance="toggleNavigation"
          onClick={() => setOpen(!isOpen)}
          className="overflow-hidden"
        >
          <div
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            className={
              isOpen
                ? 'flex -translate-y-4 translate-x-1.5 flex-col   space-y-6 text-green-1 transition duration-500 ease-in-out md:-translate-y-5 '
                : 'flex translate-y-9 flex-col space-y-6 text-white transition duration-500 ease-in-out  md:translate-y-5'
            }
          >
            <HamburgerMenuIcon />
            <CloseIcon />
          </div>
        </Button>
      </div>
      {isOpen && (
        <div className="fixed top-0 z-20 h-screen w-full space-y-3 overflow-hidden bg-white px-3 py-20">
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
        </div>
      )}
    </section>
  );
}
