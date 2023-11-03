import React from 'react';

import { cx } from '@/utils/cx';

type Props = {
  children?: React.ReactNode;
  appearance?: 'primary' | 'secondary';
  className?: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
};

const styles = {
  primary: 'text-white bg-gradient ',
  secondary: 'bg-white text-green-g1 hover:bg-green-g1 hover:text-white',
};

export default function Button({
  children,
  appearance = 'primary',
  className,
  label,
  icon,
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
      {...props}
    >
      {label}
      {icon && <div className="ml-3 w-4">{icon}</div>}
      {children}
    </button>
  );
}
