import type { InputHTMLAttributes } from 'react';
import React, { forwardRef } from 'react';

import { cx } from '@/utils/cx';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string;
  className?: string;
};
export const Input = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, className, ...props }, ref) => {
    return (
      <input
        placeholder={placeholder}
        ref={ref}
        className={cx(
          'w-full py-1.5 border-b border-grey-4 focus:outline-none placeholder:text-grey-4 text-sm font-medium',
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;
