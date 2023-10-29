import cx from 'classnames';
import React from 'react';

type Props = {
  children?: React.ReactNode;
  appearance?: 'primary' | 'secondary';
  className?: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
};

const styles = {
  primary: 'text-base font-bold text-white bg-green-g1',
  secondary: '',
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
        'rounded-full px-8 py-3 inline-flex items-center justify-center flex-shrink-0 whitespace-nowrap',
        styles[appearance],
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {label}
      {icon && <div className="ml-2 w-4">{icon}</div>}
      {children}
    </button>
  );
}
