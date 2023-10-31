import Link from 'next/link';
import React from 'react';

import { cx } from '@/utils/cx';

type Props = {
  submenus: {
    link: string;
    title: string;
  }[];
  isOpen: boolean;
  pathname: string;
};
function Dropdown({ submenus, isOpen, pathname }: Props) {
  return (
    <ul className="absolute w-40 rounded-md border border-green-g2 bg-white px-5">
      {submenus.map(({ link, title }, index: number) => (
        <li
          key={index}
          className={cx(
            'text-sm text-dark-d1 py-2',
            isOpen
              ? pathname === link
                ? 'text-white border-white bg-green-g1 '
                : 'hover:text-white border-green-g1 text-green-g1'
              : pathname === link
              ? 'text-green-g1 underline underline-offset-4 border-green-g1'
              : 'hover:text-green-g1 transition-transform transform hover:underline hover:underline-offset-4',
            isOpen &&
              'w-full py-2 flex items-center justify-center rounded-md border md:hidden',
          )}
        >
          <Link href={link}>
            <a>{title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Dropdown;
