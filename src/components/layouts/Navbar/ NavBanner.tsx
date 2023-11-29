import Link from 'next/link';
import React from 'react';

import PhoneIcon from '@/icons/home/phoneIcon';
import UKIcon from '@/icons/home/UKIcon';
import EmailIcon from '@/icons/share/emailIcon';
import FacebookIcon from '@/icons/share/facebookIcon';
import YoutubeIcon from '@/icons/share/youtubeIcon';

export default function NavBanner() {
  return (
    <section className="hidden items-start justify-between bg-gradient md:flex">
      <div className="mx-auto flex w-full max-w-[1140px] flex-col items-start space-y-2  px-2 py-5 text-white md:flex-row md:items-center md:justify-between md:space-x-3">
        <div className="flex items-center space-x-4">
          <Link
            href={'https://www.youtube.com/channel/UCkjUA3xAWBTPSVe95BMyqxg'}
          >
            <a target="_blank" aria-label="youtube-link">
              <YoutubeIcon />
            </a>
          </Link>
          <Link href={'https://www.facebook.com/rukyahijama1'}>
            <a target="_blank" aria-label="facebook-link">
              <FacebookIcon />
            </a>
          </Link>
        </div>
        <div className="flex flex-col items-start space-y-2 text-sm md:flex-row md:items-center md:space-x-8 md:space-y-0">
          <Link href="mailto:info@sborphanagetrust.co.uk" title="email">
            <div className="flex cursor-pointer items-center space-x-2">
              <EmailIcon />
              <p>info@sborphanagetrust.co.uk</p>
            </div>
          </Link>
          <Link href="tel:07903106037" title="phone number">
            <div className="flex cursor-pointer space-x-2 md:items-center ">
              <PhoneIcon />
              <div className="flex  items-center space-x-2 ">
                <div className="flex  items-center space-x-1">
                  <UKIcon />
                  <p>+44</p>
                </div>
                <p> 790 310 6037</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
