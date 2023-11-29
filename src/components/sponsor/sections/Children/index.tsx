import React from 'react';

import Wrapper from '@/components/layouts/Wrapper';
import students from '@/lib/students.json';

import ChildGrid from './core/ChildGrid';

export default function Children() {
  return (
    <section className="pt-16">
      <Wrapper>
        <div className="grid gap-4 md:gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4">
          {students.map((student, index: number) => (
            <ChildGrid key={index} {...student} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
