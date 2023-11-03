import Link from 'next/link';
import React from 'react';

import { cx } from '@/utils/cx';

type Props = {
  submenus: {
    link: string;
    title: string;
  }[];
  pathname: string;
};
function Dropdown({ submenus, pathname }: Props) {
  return (
    <ul className="border-green-2 absolute w-40 rounded-md border bg-white px-5">
      {submenus.map(({ link, title }, index: number) => (
        <li key={index} className={cx('text-sm text-dark-1 py-2')}>
          <Link href={link}>
            <a
              className={cx(
                'w-max text-transparent bg-clip-text',
                pathname === link
                  ? 'bg-gradient'
                  : 'hover:bg-gradient bg-dark-1',
              )}
            >
              {title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Dropdown;
