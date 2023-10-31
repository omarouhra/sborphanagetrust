import React from 'react';

import Heading from '@/components/core/Heading';
import MainLayout from '@/components/layouts/MainLayout';

import ProvItem from './core/ProvItem';
import { PROVISIONS } from '@/utils/constants/provisions';

export default function Provision() {
  return (
    <MainLayout>
      <div className="text-green-g1">
        <Heading
          text="Our Provision"
          className="mb-16 text-center font-bold"
          appearance="primary"
        />
        <div className="flex flex-col space-y-5 md:flex-row md:items-center md:space-x-2 md:space-y-0 lg:space-x-5">
          {PROVISIONS.map((prov, index: number) => (
            <ProvItem key={index} {...prov} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
