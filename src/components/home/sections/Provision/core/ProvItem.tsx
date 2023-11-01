import React from 'react';

type Props = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

export default function ProvItem({ icon, title, text }: Props) {
  return (
    <div className="flex h-[250px] w-full flex-col items-center justify-center rounded-3xl bg-white px-4 py-6 md:w-[270px]">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-g1 text-white">
        {icon}
      </div>
      <p className="mb-2 text-base font-bold text-green-g1 ">{title}</p>
      <p className="text-center text-sm text-dark-d1">{text}</p>
    </div>
  );
}
