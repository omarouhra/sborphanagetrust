import { allPolicies } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { NextSeo } from 'next-seo';
import React from 'react';

import MainLayout from '@/components/layouts/MainLayout';
import Wrapper from '@/components/layouts/Wrapper';
import { baseURL } from '@/utils/constants/baseUrl';

export default function Privacy() {
  const policy = allPolicies[0];
  const Component = useMDXComponent((policy?.body as any)?.code);
  return (
    <>
      <NextSeo title="Privacy" canonical={`${baseURL}/privacy`} />
      <MainLayout className="bg-gradient-to-b from-green-2  to-[#cbf0e574]">
        <Wrapper>
          <div
            className="prose  mb-10 mt-7 flex  flex-col justify-between md:mb-24 lg:flex-row lg:space-x-5"
            style={{ wordBreak: 'break-word' }}
          >
            <div
              className="w-full justify-between  md:px-5"
              style={{ wordBreak: 'break-word' }}
            >
              <Component />
            </div>
          </div>
        </Wrapper>
      </MainLayout>
    </>
  );
}
