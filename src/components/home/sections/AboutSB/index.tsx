import React from 'react';

import CustomImage from '@/components/core/CustomImage';
import GradientContainer from '@/components/core/GradientContainer';
import Heading from '@/components/core/Heading';
import Paragraph from '@/components/core/Paragraph';
import MainLayout from '@/components/layouts/MainLayout';
import CharityIcon from '@/icons/home/CharityIcon';
import aboutSB from '@/public/assets/home/aboutSB.png';

export default function AboutSB() {
  return (
    <MainLayout>
      <div className="mb-16 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-7">
        <div className="w-full lg:max-w-xl">
          <div className="mb-8">
            <p className="mb-4 text-sm font-medium uppercase text-green-g1">
              - Prophet Muhammad, (ﷺ) said;
            </p>
            <Heading
              text="“Myself and the caretaker of an orphan will be in Paradise like this,”"
              appearance="primary"
              className="mb-2 font-medium text-green-g1"
            />
            <div className="flex w-full justify-end">
              <span className="text-sm font-semibold text-green-g1">
                and he held his two fingers together.
              </span>
            </div>
          </div>
          <div className="text-dark-d1">
            <Paragraph
              text="What do your children mean to you? And how would you feel if you
            couldn’t be there to love, guide and protect them?"
              className="mb-3 font-bold"
            />
            <Paragraph
              text="Losing a parent can mean that access to education, the protection of shelter, the sustenance of nutritious meals and the chance for a secure future all become an impossible dream.
             This is why the responsibility of care for the orphan falls on all of us."
              appearance="subTitle"
              className="text-justify"
            />
          </div>
        </div>
        <div className="relative order-first md:my-12 lg:order-last">
          <div className="hidden h-[430px] w-[490px] rounded-2xl border-2  border-green-g1/50 md:ml-20 md:flex  lg:ml-0 lg:h-[340px] lg:w-[400px]" />
          <div className="relative z-30 mb-8 flex justify-end md:absolute md:-bottom-16 md:left-28 md:mb-20 lg:-right-0 lg:bottom-3 lg:left-8 lg:mb-0">
            <CustomImage src={aboutSB} alt="all-about-SBO" priority />
          </div>
          <div className="absolute -right-3 -top-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-g1 to-green-g3 text-white md:-top-28 md:right-14 md:h-24 md:w-24 lg:-right-0 lg:-top-16 xl:-right-8 xl:-top-20">
            <CharityIcon className="h-8 w-8 md:h-16 md:w-16" />
          </div>
        </div>
      </div>
      <GradientContainer>
        <Heading
          text="SB Orphanage"
          className="mb-6 font-bold"
          appearance="primary"
        />
        <Paragraph
          text="Is dedicated to improving the welfare of children who have become uncared for in the district of Sylhet Bangladesh.
              The mission we intend to carry out is such that we aim to deliver relief in the form of aid ranging from the provision of shelter, food, clothing, education and medical support to those children
              within the communities that are deprived as result of unfortunate economical and social factors."
          className="md:leading-8"
        />
        <Paragraph
          text="In doing this we hope to help rebuild lives and give more confidence to families in need with particular
              emphasis on abandoned and orphaned children within these communities."
          className="md:leading-8"
        />
      </GradientContainer>
    </MainLayout>
  );
}