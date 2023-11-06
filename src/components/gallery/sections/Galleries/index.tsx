import React, { useState } from 'react';

import Wrapper from '@/components/layouts/Wrapper';
import PhotosIcon from '@/icons/home/PhotosIcon';
import VideoIcon from '@/icons/home/VideoIcon';

import Photos from './Photos';
import Videos from './Videos';

export default function Galleries() {
  const [currentTab, setCurrentTab] = useState<string>('Photos');

  return (
    <section className="bg-gradient-to-b from-[#cbf1e9d5]  to-[#dee4e25d]">
      <Wrapper>
        <div className="flex flex-col items-center  justify-center space-y-8">
          <div
            className={`flex items-center space-x-4 rounded-3xl bg-[#F9FAFB] p-1 shadow-inner-grey `}
          >
            {['Photos', 'Videos'].map((label, index: number) => (
              <button
                key={index}
                className={`${
                  currentTab === label
                    ? 'bg-green-1 text-[#F9FAFB]'
                    : 'text-green-1 hover:bg-green-1 hover:text-[#F9FAFB]'
                }  flex items-center space-x-2 rounded-3xl px-4 py-2  transition duration-300 ease-in-out`}
                onClick={() => {
                  setCurrentTab(label);
                }}
              >
                {label === 'Photos' ? <PhotosIcon /> : <VideoIcon />}
                <p className="text-base leading-normal">{label}</p>
              </button>
            ))}
          </div>
          {currentTab === 'Photos' ? <Photos /> : <Videos />}
        </div>
      </Wrapper>
    </section>
  );
}
