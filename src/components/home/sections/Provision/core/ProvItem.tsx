import React from 'react';

type Props = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

export default function ProvItem({ icon, title, text }: Props) {
  return (
    <div className="flex h-[270px] w-full flex-col items-center justify-center rounded-3xl bg-white px-2  py-6 md:w-[300px]">
      <div className="mb-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-g1 text-white">
          {icon}
        </div>
      </div>
      <p className="mb-2 text-2xl font-bold text-green-g1 ">{title}</p>
      <p className="h-16 text-center text-base  text-dark-d1">{text}</p>
    </div>
  );
}
