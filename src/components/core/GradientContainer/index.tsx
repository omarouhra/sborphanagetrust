import React from 'react';

type Props = {
  children: React.ReactNode;
};
export default function GradientContainer({ children }: Props) {
  return (
    <div className="rounded-2xl bg-gradient text-center text-green-g2">
      <div className="bg-[url('/assets/home/mask-ob.png')] bg-cover bg-no-repeat px-2 py-8 md:px-12 md:py-16">
        {children}
      </div>
    </div>
  );
}
