import Link from 'next/link';
import React, { useState } from 'react';

import { cx } from '@/utils/cx';

import Dropdown from './Dropdown';

type Props = {
  isOpen: boolean;
  items: {
    link: string;
    title: string;
    submenu?: {
      link: string;
      title: string;
    }[];
  };
  pathname: string;
};
function MenuItems({ items, isOpen, pathname }: Props) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  return (
    <li
      className={cx(
        'text-sm text-dark-d1',
        isOpen
          ? pathname === items.link
            ? 'text-white border-white bg-green-g1 '
            : 'hover:text-white border-green-g1 text-green-g1'
          : pathname === items.link
          ? 'text-green-g1 underline underline-offset-4 border-green-g1'
          : 'hover:text-green-g1 transition-transform transform hover:scale-110 hover:underline hover:underline-offset-4',
        isOpen &&
          'w-full py-2 flex items-center justify-center rounded-md border md:hidden',
      )}
    >
      {items.submenu ? (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="group relative"
        >
          <button type="button" aria-haspopup="menu">
            {items.title}
          </button>
          {isDropdownVisible && (
            <Dropdown
              submenus={items.submenu}
              isOpen={isOpen}
              pathname={pathname}
            />
          )}
        </div>
      ) : (
        <Link href={items.link}>
          <a>{items.title}</a>
        </Link>
      )}
    </li>
  );
}

export default MenuItems;
