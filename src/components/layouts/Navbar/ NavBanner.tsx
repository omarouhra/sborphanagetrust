import Link from 'next/link';
import React from 'react';

import PhoneIcon from '@/icons/home/phoneIcon';
import EmailIcon from '@/icons/share/emailIcon';
import FacebookIcon from '@/icons/share/facebookIcon';
import YoutubeIcon from '@/icons/share/youtubeIcon';

export default function NavBanner() {
  return (
    <section className="bg-gradient">
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
    </section>
  );
}
