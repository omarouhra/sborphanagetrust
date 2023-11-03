import Link from 'next/link';
import React from 'react';

import CustomImage from '@/components/core/CustomImage';
import Facebook from '@/icons/footer/facebook';
import Youtube from '@/icons/footer/youtube';
import Logo from '@/public/assets/Logo.png';
import { BANK_ACCOUNT } from '@/utils/constants/bankAccount';
import { FOOTER_MENU } from '@/utils/constants/footerMenu';

import Wrapper from '../Wrapper';

export default function Footer() {
  return (
    <section className="bg-white">
      <Wrapper className="border-b-2 border-[#A6A6A659]">
        <p className="mb-8 text-2xl">Organisation</p>
        <div className="flex flex-col space-y-10 pb-10 md:flex-row md:items-start md:space-x-16 md:space-y-0">
          <div className="w-full max-w-[457px] text-grey-3">
            <div className="mb-4 w-[200px]">
              <CustomImage
                alt="sbo-log"
                src={Logo}
                isBlurring={false}
                priority
              />
            </div>
            <p className="mb-5  text-sm md:leading-6">
              Is dedicated to improving the welfare of children who have become
              uncared for in the district of Sylhet Bangladesh.
            </p>
            <div className="flex items-center space-x-2 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient">
                <Facebook />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient">
                <Youtube />
              </div>
            </div>
          </div>
          <div className="flex min-w-fit flex-col justify-start">
            <p className="mb-3 text-sm font-bold text-grey-3 md:mb-6">Menu</p>
            <div className="flex flex-col space-y-5">
              {FOOTER_MENU.map(({ link, name }, index: number) => (
                <Link href={link} key={index}>
                  <a
                    className={
                      'text-sm bg-grey-3 w-max text-transparent bg-clip-text hover:bg-gradient transition duration-300'
                    }
                  >
                    {name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex min-w-fit flex-col">
            <p className="mb-3 text-sm font-bold text-grey-3 md:mb-6">
              DD Bank Account
            </p>
            <div className="flex flex-col space-y-5">
              {BANK_ACCOUNT.map((name, index: number) => (
                <p key={index} className="text-sm text-grey-3">
                  {name}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <p className="mb-6 text-sm font-bold text-grey-3">Follow Us</p>
            <p className="text-sm leading-normal text-grey-3">
              Call Mufti Ahsan Ahmed on 07903106037 or email viacontact form
            </p>
          </div>
        </div>
      </Wrapper>
      <div className=" mx-auto flex w-full max-w-[1140px] items-center justify-center py-8">
        <p className="text-xs leading-normal text-grey-3">
          © 2020 SB Orphanage Trust. All rights reserved. SB Orphanage Trust is
          a registered charity in UK | Charity No: 1147041 | Website Design by
          2d Studio
        </p>
      </div>
    </section>
  );
}
