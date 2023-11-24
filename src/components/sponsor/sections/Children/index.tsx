import React from 'react';

import Wrapper from '@/components/layouts/Wrapper';
import childImage from '@/public/assets/sponsor/child.png';

import ChildGrid from './core/ChildGrid';

const CHILDREN = [
  {
    src: childImage,
    name: 'Hussain Ahmed',
    dateOfBirth: '05/01/2007',
    siblings: {
      sisters: 3,
      brothers: 3,
    },
    admiDate: '04/02/2018',
  },
  {
    src: childImage,
    name: 'Hussain Ahmed',
    dateOfBirth: '05/01/2007',
    siblings: {
      sisters: 3,
      brothers: 3,
    },
    admiDate: '04/02/2018',
  },
  {
    src: childImage,
    name: 'Hussain Ahmed',
    dateOfBirth: '05/01/2007',
    siblings: {
      sisters: 3,
      brothers: 3,
    },
    admiDate: '04/02/2018',
  },
  {
    src: childImage,
    name: 'Hussain Ahmed',
    dateOfBirth: '05/01/2007',
    siblings: {
      sisters: 3,
      brothers: 3,
    },
    admiDate: '04/02/2018',
  },
  {
    src: childImage,
    name: 'Hussain Ahmed',
    dateOfBirth: '05/01/2007',
    siblings: {
      sisters: 3,
      brothers: 3,
    },
    admiDate: '04/02/2018',
  },
  {
    src: childImage,
    name: 'Hussain Ahmed',
    dateOfBirth: '05/01/2007',
    siblings: {
      sisters: 3,
      brothers: 3,
    },
    admiDate: '04/02/2018',
  },
  {
    src: childImage,
    name: 'Hussain Ahmed',
    dateOfBirth: '05/01/2007',
    siblings: {
      sisters: 3,
      brothers: 3,
    },
    admiDate: '04/02/2018',
  },
  {
    src: childImage,
    name: 'Hussain Ahmed',
    dateOfBirth: '05/01/2007',
    siblings: {
      sisters: 3,
      brothers: 3,
    },
    admiDate: '04/02/2018',
  },
  {
    src: childImage,
    name: 'Hussain Ahmed',
    dateOfBirth: '05/01/2007',
    siblings: {
      sisters: 3,
      brothers: 3,
    },
    admiDate: '04/02/2018',
  },
  {
    src: childImage,
    name: 'Hussain Ahmed',
    dateOfBirth: '05/01/2007',
    siblings: {
      sisters: 3,
      brothers: 3,
    },
    admiDate: '04/02/2018',
  },
  {
    src: childImage,
    name: 'Hussain Ahmed',
    dateOfBirth: '05/01/2007',
    siblings: {
      sisters: 3,
      brothers: 3,
    },
    admiDate: '04/02/2018',
  },
  {
    src: childImage,
    name: 'Hussain Ahmed',
    dateOfBirth: '05/01/2007',
    siblings: {
      sisters: 3,
      brothers: 3,
    },
    admiDate: '04/02/2018',
  },
];
export default function Children() {
  return (
    <section className="pt-16">
      <Wrapper>
        <div className="grid place-items-center gap-y-28 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-36 xl:grid-cols-4 xl:gap-x-44 xl:gap-y-36">
          {CHILDREN.map((child, index: number) => (
            <ChildGrid key={index} {...child} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
