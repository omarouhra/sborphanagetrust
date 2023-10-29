import React from 'react';

import EmailIcon from '@/icons/emailIcon';
import FacebookIcon from '@/icons/facebookIcon';
import PhoneIcon from '@/icons/phoneIcon';
import YoutubeIcon from '@/icons/youtubeIcon';

function TopBar() {
  return (
    <section className="flex flex-col space-y-2 md:flex-row md:items-center w-full md:justify-between md:space-x-3 bg-green-g1 px-10 md:px-40 py-5 text-white">
      <div className="flex items-center space-x-4">
        <YoutubeIcon />
        <FacebookIcon />
      </div>
      <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-x-8 text-sm">
        <div className="flex items-center space-x-2">
          <EmailIcon />
          <span>info@sborphanagetrust.co.uk</span>
        </div>
        <div className="flex items-center space-x-2">
          <PhoneIcon />
          <span>0790 310 6037</span>
        </div>
      </div>
    </section>
  );
}

export default TopBar;
