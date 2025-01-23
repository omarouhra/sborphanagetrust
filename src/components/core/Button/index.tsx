import type { HTMLProps } from 'react';
import React from 'react';

import { cx } from '@/utils/cx';

type Props = HTMLProps<HTMLButtonElement> & {
  children?: React.ReactNode;
  appearance?: 'primary' | 'secondary' | 'toggleNavigation';
  className?: string;
  label?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

const styles = {
  primary: 'text-white bg-gradient ',
  secondary: 'bg-white text-green-1 hover:bg-green-1 hover:text-white',
  toggleNavigation:
    'ml-ten flex h-11 w-11 items-center justify-center rounded-full lg:hidden',
};

export default function Button({
  children,
  appearance = 'primary',
  className,
  label,
  icon,
  type,
  disabled,
  ...props
}: Props) {
  return (
    <button
      className={cx(
        'rounded-full text-base font-semibold px-8 py-3 inline-flex items-center justify-center flex-shrink-0 whitespace-nowrap',
        'transition-all ease-in-out duration-300',
        styles[appearance],
        className,
      )}
      disabled={disabled}
      type={type}
      {...props}
    >
      {label}
      {icon && <div className="ml-3 w-4">{icon}</div>}
      {children}
    </button>
  );
}
