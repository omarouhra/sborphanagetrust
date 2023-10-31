import React from 'react';

type Props = {
  icon: React.ReactNode;
  title: string;
  text: string;
};
export default function StaticItem({ icon, title, text }: Props) {
  return (
    <div className="flex h-[250px] w-full flex-col items-center justify-center px-4 py-6 text-white md:w-[270px]">
      <div className="mb-4">{icon}</div>
      <p className="mb-2 text-base font-bold ">{title}</p>
      <p className="text-center text-sm">{text}</p>
    </div>
  );
}
