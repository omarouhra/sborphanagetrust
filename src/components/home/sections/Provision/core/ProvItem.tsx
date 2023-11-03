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
        <div className="bg-green-1 flex h-20 w-20 items-center justify-center rounded-full text-white">
          {icon}
        </div>
      </div>
      <p className="text-green-1 mb-2 text-2xl font-bold ">{title}</p>
      <p className="text-center text-base text-dark-1 md:h-32  lg:h-16">
        {text}
      </p>
    </div>
  );
}
