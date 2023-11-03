import Link from 'next/link';
import React, { useState } from 'react';

import { cx } from '@/utils/cx';

import Dropdown from './Dropdown';

type Props = {
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
function MenuItems({ items, pathname }: Props) {
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
        'text-sm text-dark-d1 lg:text-base group font-semibold px-5 flex flex-nowrap py-2 rounded-3xl transition-all duration-200 ',
        pathname === items.link
          ? 'bg-green-600/10 bg-opacity-30'
          : 'hover:bg-green-600/10 hover:bg-opacity-30',
      )}
    >
      {items.submenu ? (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="group relative"
        >
          <button
            type="button"
            aria-haspopup="menu"
            className={cx(
              'w-max text-transparent bg-clip-text',
              pathname === items.link
                ? 'bg-gradient'
                : 'group-hover:bg-gradient bg-dark-d1',
            )}
          >
            {items.title}
          </button>
          {isDropdownVisible && (
            <Dropdown submenus={items.submenu} pathname={pathname} />
          )}
        </div>
      ) : (
        <Link href={items.link}>
          <a
            className={cx(
              'w-max text-transparent bg-clip-text',
              pathname === items.link
                ? 'bg-gradient'
                : 'group-hover:bg-gradient bg-dark-d1',
            )}
          >
            {items.title}
          </a>
        </Link>
      )}
    </li>
  );
}

export default MenuItems;
