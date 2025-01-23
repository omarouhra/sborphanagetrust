import Link from 'next/link';
import React from 'react';

import { cx } from '@/utils/cx';

type Props = {
  items: {
    link: string;
    title: string;
  };
  pathname: string;
  className?: string;
};
function MenuItems({ items, pathname, className }: Props) {
  return (
    <li
      className={cx(
        'text-sm text-dark-1 lg:text-base group font-semibold px-5 flex flex-nowrap py-2 rounded-3xl transition-all duration-200 ',
        pathname === items.link
          ? 'bg-green-600/10 bg-opacity-30'
          : 'hover:bg-green-600/10 hover:bg-opacity-30',
        className,
      )}
    >
      <Link href={items.link}>
        <a
          aria-label={items.title}
          className={cx(
            'w-full text-center text-transparent  bg-clip-text',
            pathname === items.link
              ? 'bg-gradient'
              : 'group-hover:bg-gradient bg-dark-1',
          )}
        >
          {items.title}
        </a>
      </Link>
    </li>
  );
}

export default MenuItems;
