import React, { useState } from 'react';

import Wrapper from '@/components/layouts/Wrapper';
import PhotosIcon from '@/icons/home/PhotosIcon';
import VideoIcon from '@/icons/home/VideoIcon';

import Photos from './Photos';
import Videos from './Videos';

export default function Galleries() {
  const [currentTab, setCurrentTab] = useState<string>('Photos');

  return (
    <section>
      <Wrapper>
        <div className="flex flex-col items-center  justify-center space-y-8">
          <div
            className={`relative flex items-center space-x-2 overflow-hidden rounded-full bg-[#F9FAFB] p-1 shadow-inner-grey`}
          >
            <div className="absolute inset-0 flex p-1">
              <div
                className={`h-full w-1/2 rounded-full bg-green-1 duration-200 ${
                  currentTab === 'Videos' && 'translate-x-full'
                }  `}
              />
            </div>
            {['Photos', 'Videos'].map((label, index: number) => (
              <button
                key={index}
                className={`${
                  currentTab === label
                    ? 'text-[#F9FAFB]'
                    : 'text-green-1 hover:text-green-1/70'
                }  z-50 flex items-center justify-center space-x-2 p-3 duration-300 ease-in-out`}
                onClick={() => {
                  setCurrentTab(label);
                }}
              >
                {label === 'Photos' ? <PhotosIcon /> : <VideoIcon />}
                <p className="text-base leading-normal">{label}</p>
              </button>
            ))}
          </div>
          <div className="w-full">
            {currentTab === 'Photos' ? <Photos /> : <Videos />}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
