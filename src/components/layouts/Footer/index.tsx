import Link from 'next/link';

import Facebook from '@/icons/footer/facebook';
import Youtube from '@/icons/footer/youtube';
import LogoIcon from '@/icons/home/LogoIcon';
import UKIcon from '@/icons/home/UKIcon';
import { BANK_ACCOUNT } from '@/utils/constants/bankAccount';
import { FOOTER_MENU } from '@/utils/constants/footerMenu';

import Wrapper from '../Wrapper';

export default function Footer() {
  return (
    <footer className="bg-white">
      <Wrapper className="border-b-2 border-[#A6A6A659]">
        <p className="mb-8 text-2xl">Organisation</p>
        <div className="flex flex-col space-y-10 pb-10 md:flex-row md:items-start md:space-x-16 md:space-y-0">
          <div className="w-full max-w-[457px] text-grey-3">
            <div className="mb-4 w-[200px]">
              <LogoIcon />
            </div>
            <p className="mb-5  text-sm md:leading-6">
              Is dedicated to improving the welfare of children who have become
              uncared for in the district of Sylhet Bangladesh.
            </p>
            <div className="flex items-center space-x-2 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient">
                <Link href={'https://www.facebook.com/rukyahijama1'}>
                  <a target="_blank" aria-label="facebook-link">
                    <Facebook />
                  </a>
                </Link>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient">
                <Link
                  href={
                    'https://www.youtube.com/channel/UCkjUA3xAWBTPSVe95BMyqxg'
                  }
                >
                  <a target="_blank" aria-label="youtube-link">
                    <Youtube />
                  </a>
                </Link>
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
                      'w-max bg-grey-3 bg-clip-text text-sm text-transparent transition duration-300 hover:bg-gradient'
                    }
                    aria-label={link}
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
            <div className="text-sm leading-normal text-grey-3">
              Call Mufti Ahsan Ahmed on
              <div className="flex space-x-2 transition duration-200 hover:text-green-1 md:items-center">
                <Link href="tel:07903106037">
                  <div className="flex cursor-pointer  items-center space-x-2 ">
                    <div className="flex  items-center space-x-1">
                      <UKIcon />
                      <p>+44</p>
                    </div>
                    <p> 790 310 6037</p>
                  </div>
                </Link>
              </div>
              or email viacontact form
            </div>
          </div>
        </div>
        <div className="flex flex-col  space-y-8 border-t pt-8 text-xs leading-normal text-grey-3 lg:flex-row lg:items-center  lg:justify-between lg:space-y-0">
          <p>
            © 2020 SB Orphanage Trust. All rights reserved. SB Orphanage Trust
            is a registered charity in UK | Charity No: 11470lg
          </p>
          <Link href={'https://www.amigoscode.com/'}>
            <a
              target="_blank"
              className="flex space-x-1"
              aria-label="amigoscode-page"
            >
              <p>Website Design by</p>
              <span className="h-auto font-semibold text-green-1">
                AMIGOSCODE
              </span>
            </a>
          </Link>
        </div>
      </Wrapper>
    </footer>
  );
}
