import React from 'react';

import Wrapper from '@/components/layouts/Wrapper';
import students from '@/lib/students.json';

import ChildGrid from './core/ChildGrid';

export default function Children() {
  return (
    <section className="pt-16">
      <Wrapper>
        <div className="grid place-items-center gap-y-28 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-36 xl:grid-cols-4 xl:gap-x-44 xl:gap-y-36">
          {students.map((student, index: number) => (
            <ChildGrid key={index} {...student} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
