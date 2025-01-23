import Link from 'next/link';
import { NextSeo } from 'next-seo';
import React from 'react';

import Button from '@/components/core/Button';
import MainLayout from '@/components/layouts/MainLayout';
import Wrapper from '@/components/layouts/Wrapper';
import { baseURL } from '@/utils/constants/baseUrl';

function error() {
  return (
    <>
      <NextSeo title="Page Not Found" canonical={`${baseURL}`} />
      <MainLayout>
        <Wrapper className="h-full">
          <div className="flex h-full flex-col items-center justify-center">
            <p className="bg-gradient bg-clip-text text-[200px] font-bold tracking-widest text-transparent">
              404
            </p>
            <p className="mb-8 text-3xl font-semibold text-green-1">
              Oops! Page Not Found
            </p>
            <Button className="duration-200 hover:opacity-90">
              <Link href="/">Go Back</Link>
            </Button>
          </div>
        </Wrapper>
      </MainLayout>
    </>
  );
}

export default error;
