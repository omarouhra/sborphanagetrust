import React from 'react';

type Props = {
  icon: React.ReactNode;
  title: string;
  text: string;
};
export default function StaticItem({ icon, title, text }: Props) {
  return (
    <div className="md:[270px] flex h-[250px] w-full  flex-col items-center justify-center py-6 text-white md:h-[300px] md:w-[300px]">
      <div className="mb-4 md:h-48  lg:h-32">{icon}</div>
      <p className="mb-2 text-3xl font-semibold ">{title}</p>
      <p className="text-center text-lg md:h-48 lg:h-24">{text}</p>
    </div>
  );
}
