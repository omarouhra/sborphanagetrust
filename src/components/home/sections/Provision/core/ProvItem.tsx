import React from 'react';

type Props = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

export default function ProvItem({ icon, title, text }: Props) {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-3xl bg-white px-2 py-6 md:h-[300px]  md:w-[300px] lg:h-[270px]">
      <div className="mb-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-1 text-white">
          {icon}
        </div>
      </div>
      <p className="mb-2 text-2xl font-bold text-green-1 ">{title}</p>
      <p className="text-center text-base text-dark-1 md:h-32  lg:h-16">
        {text}
      </p>
    </div>
  );
}
