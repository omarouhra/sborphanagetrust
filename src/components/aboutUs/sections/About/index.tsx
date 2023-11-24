import React from 'react';

import CustomImage from '@/components/core/CustomImage';
import GradientContainer from '@/components/core/GradientContainer';
import Paragraph from '@/components/core/Paragraph';
import Wrapper from '@/components/layouts/Wrapper';
import AhsanAhmad from '@/public/assets/aboutus/ahsan-ahmad.png';

export default function About() {
  return (
    <section>
      <Wrapper>
        <div className="mb-16 flex flex-col space-y-96  md:space-y-10 lg:flex-row lg:items-start lg:justify-between lg:space-x-10 lg:space-y-0">
          <div className="relative mt-3">
            <div className="hidden rounded-2xl border-2 border-green-1/50 md:ml-20  md:flex md:h-[430px] md:w-[490px]  lg:ml-0 lg:h-[681px] lg:w-[545px]" />
            <div className="absolute z-30 mb-8 flex justify-end md:absolute md:-bottom-16 md:left-28 md:mb-20 md:h-[430px] md:w-[490px] lg:-right-0 lg:bottom-3  lg:left-4 lg:mb-0 lg:h-[681px] lg:w-[545px]">
              <CustomImage
                src={AhsanAhmad}
                alt="ahmad-ahsann"
                priority
                className="rounded-2xl"
              />
            </div>
          </div>
          <div className="flex w-full flex-col space-y-5 text-dark-1  lg:max-w-[520px]">
            <Paragraph
              text="As many of you may already know, Bangladesh is a country that is affected by natural disasters, overpopulation, and poverty. Today, Bangladesh consists of over 4.8 million orphans.
              Sadly, many of these orphans do not have access to the basic necessities of life such as food, water, and shelter"
              appearance="lightText"
              className="mt-8 text-justify md:mt-0"
            />
            <Paragraph
              text="In 2000, brother Mufti Ahsan Ahmed began an initiative to help provide for some of these orphans living in district of Moulvibazar, Bangladesh. The SB Orphanage was built, in which many
               of these orphans are provided with nutritious meals, education, a nurturing environment, and a place they get to call home."
              appearance="lightText"
              className="text-justify"
            />
            <Paragraph
              text="As a direct result of your generous donations over the years, we were able to expand,
               allowing a safer, more open, and comfortable environment for the children."
              appearance="lightText"
              className="text-justify"
            />
            <Paragraph
              text="The SB Orphanage currently provides shelter for 70 children.
              However, the expenses are increasing significantly with more and more children seeking assistance. With combined efforts, we can help maintain this orphanage. By making a monetary donation, we can help fund the day-to-day operations of this orphanage.
              The funds raised will be put towards the costs for food, education, medical bills, and residence for the children."
              appearance="lightText"
              className="text-justify"
            />
            <Paragraph
              text="For every £25 raised, brother Mufti Ahsan Ahmed will be able to provide nutritious meals for one child for an entire month. An additional £25 will cover the education, medical, and residence costs.
              Your generosity will ensure that no child at the SB Orphanage goes to bed hungry."
              appearance="lightText"
              className="text-justify"
            />
            <Paragraph
              text="Remember, there is no such thing as a big or small donation.
              Donate what you can and do it with the right intention. Don’t forget to keep all orphans around the world in your prayers!"
              appearance="lightText"
              className="text-justify"
            />
            <Paragraph
              text="If you have any questions about the orphanage and it’s operations, please contact via the contact form."
              appearance="lightText"
              className="text-justify"
            />
            <Paragraph
              text="Thank you."
              appearance="lightText"
              className="text-justify"
            />
          </div>
        </div>
        <GradientContainer className="md:py-24">
          <div className="w-full md:max-w-[980px]">
            <p className="mb-6 text-center text-xl font-medium text-white md:text-3xl md:leading-10">
              “Food, shelter, education and good health are what thousands of
              Bangladeshi orphans are deprived of. With your generous donations,
              we can take care of the orphans at SB Orphanage.”
            </p>
            <p className="flex w-full justify-end text-justify text-sm font-medium uppercase	tracking-wide md:text-base md:leading-normal">
              - Mufti Ahsan Ahmed
            </p>
          </div>
        </GradientContainer>
      </Wrapper>
    </section>
  );
}
