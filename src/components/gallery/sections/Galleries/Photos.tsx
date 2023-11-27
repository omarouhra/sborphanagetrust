import React, { useState } from 'react';

import CustomImage from '@/components/core/CustomImage';
import Modal from '@/components/core/Modal';
import ChevronLeftIcon from '@/icons/home/ChevronLeftIco';
import ChevronRightIcon from '@/icons/home/ChevronRightIcon';
import galleries from '@/lib/galleries.json';

export default function Photos() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImgId, setSelectedImageId] = useState<number>(0);

  const selectedImage: {
    id: number;
    image: string;
  }[] = galleries.filter((img) => img.id === selectedImgId);

  return (
    <>
      <div className="flex flex-col space-y-3 md:space-y-10">
        <div className="grid w-full gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {galleries.slice(0, 15).map(({ image, id }, index: number) => (
            <button
              key={index}
              className="relative h-[300px] w-full overflow-hidden rounded-2xl md:h-[244px] md:w-[365]"
              onClick={() => {
                setSelectedImageId(id);
                setIsOpen(true);
              }}
            >
              <CustomImage
                alt={`gallery_${index}`}
                src={image}
                isBlurring
                className="rounded-2xl transition duration-300 hover:scale-105 hover:brightness-75"
                layout="fill"
              />
            </button>
          ))}
        </div>
        <div className="grid w-full gap-2 md:grid-cols-2 md:gap-4">
          {galleries.slice(15, 23).map(({ image, id }, index: number) => (
            <button
              key={index}
              className="relative h-[300px] w-full overflow-hidden rounded-2xl md:h-[550px] md:w-[365]"
              onClick={() => {
                setSelectedImageId(id);
                setIsOpen(true);
              }}
            >
              <CustomImage
                alt={`gallery_${index}`}
                src={image}
                isBlurring
                className="rounded-2xl transition duration-300 hover:scale-105 hover:brightness-75"
                layout="fill"
              />
            </button>
          ))}
        </div>
        <div className="grid w-full gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {galleries.slice(23, 38).map(({ image, id }, index: number) => (
            <button
              key={index}
              className="relative  h-[300px] w-full overflow-hidden rounded-2xl md:h-[244px] md:w-[365]"
              onClick={() => {
                setSelectedImageId(id);
                setIsOpen(true);
              }}
            >
              <CustomImage
                alt={`gallery_${index}`}
                src={image}
                isBlurring
                className="rounded-2xl transition duration-300 hover:scale-105 hover:brightness-75"
                layout="fill"
              />
            </button>
          ))}
        </div>
      </div>
      <Modal closeModal={() => setIsOpen(false)} isVisible={isOpen}>
        <div className="flex h-[600px] w-full flex-col rounded-2xl md:flex-row">
          <button
            className="absolute left-1/2 top-0 flex h-fit w-max rotate-90  items-center justify-center text-white disabled:cursor-not-allowed md:-left-9 md:top-1/2  md:rotate-0"
            disabled={selectedImgId === 1}
            onClick={() => {
              if (selectedImgId !== 1) {
                setSelectedImageId(selectedImgId - 1);
              }
            }}
          >
            <ChevronLeftIcon />
          </button>
          <div className="relative mt-12 h-[500px] overflow-hidden md:mt-0 md:h-full md:flex-1">
            <CustomImage
              alt={`gallery_${selectedImgId}`}
              src={selectedImage[0]?.image}
              isBlurring
              className="md:rounded-2xl"
              layout="fill"
            />
          </div>
          <button
            className="absolute right-1/2 top-[95%] flex w-max rotate-90 items-center justify-center text-white disabled:cursor-not-allowed md:-right-9 md:top-1/2 md:rotate-0"
            disabled={selectedImgId === galleries.length}
            onClick={() => {
              if (selectedImgId !== galleries.length) {
                setSelectedImageId(selectedImgId + 1);
              }
            }}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </Modal>
    </>
  );
}
