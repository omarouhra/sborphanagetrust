import React from 'react';

import HifzGrid from '@/components/hifz/core/HifzGrid';
import MainLayout from '@/components/layouts/MainLayout';
import Wrapper from '@/components/layouts/Wrapper';
import childImage from '@/public/assets/sponsor/child.png';

const CHILDREN = [
  {
    src: childImage,
    name: 'Hussain Ahmed',
    age: '12',
    grad_date: '12/05/2016',
  },
  {
    src: childImage,
    name: 'Hussain Ahmed',
    age: '12',
    grad_date: '12/05/2016',
  },
  {
    src: childImage,
    name: 'Hussain Ahmed',
    age: '12',
    grad_date: '12/05/2016',
  },
  {
    src: childImage,
    name: 'Hussain Ahmed',
    age: '12',
    grad_date: '12/05/2016',
  },
  {
    src: childImage,
    name: 'Hussain Ahmed',
    age: '12',
    grad_date: '12/05/2016',
  },
  {
    src: childImage,
    name: 'Hussain Ahmed',
    age: '12',
    grad_date: '12/05/2016',
  },
  {
    src: childImage,
    name: 'Hussain Ahmed',
    age: '12',
    grad_date: '12/05/2016',
  },
  {
    src: childImage,
    name: 'Hussain Ahmed',
    age: '12',
    grad_date: '12/05/2016',
  },
  {
    src: childImage,
    name: 'Hussain Ahmed',
    age: '12',
    grad_date: '12/05/2016',
  },
  {
    src: childImage,
    name: 'Hussain Ahmed',
    age: '12',
    grad_date: '12/05/2016',
  },
  {
    src: childImage,
    name: 'Hussain Ahmed',
    age: '12',
    grad_date: '12/05/2016',
  },
  {
    src: childImage,
    name: 'Hussain Ahmed',
    age: '12',
    grad_date: '12/05/2016',
  },
];
export default function hifz() {
  return (
    <MainLayout>
      <section className="bg-gradient-to-b from-[#cbf1e9d5]  to-[#dee4e25d]  pt-16">
        <Wrapper>
          <div className="grid place-items-center gap-y-28 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-36 xl:grid-cols-4 xl:gap-x-44 xl:gap-y-36">
            {CHILDREN.map((child, index: number) => (
              <HifzGrid key={index} {...child} />
            ))}
          </div>
        </Wrapper>
      </section>
    </MainLayout>
  );
}
