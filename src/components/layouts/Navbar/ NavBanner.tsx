import React from 'react';

import PhoneIcon from '@/icons/home/phoneIcon';
import EmailIcon from '@/icons/share/emailIcon';
import FacebookIcon from '@/icons/share/facebookIcon';
import YoutubeIcon from '@/icons/share/youtubeIcon';

export default function NavBanner() {
  return (
    <section className="flex w-full flex-col items-start space-y-2 bg-green-g1 px-3 py-5 text-white md:flex-row md:items-center md:justify-between md:space-x-3 md:px-10 xl:px-40">
      <div className="flex items-center space-x-4">
        <YoutubeIcon />
        <FacebookIcon />
      </div>
      <div className="flex flex-col items-start space-y-2 text-sm md:flex-row md:items-center md:space-x-8 md:space-y-0">
        <div className="flex items-center space-x-2">
          <EmailIcon />
          <span>info@sborphanagetrust.co.uk</span>
        </div>
        <div className="flex space-x-2 md:items-center">
          <PhoneIcon />
          <span>0790 310 6037</span>
        </div>
      </div>
    </section>
  );
}
