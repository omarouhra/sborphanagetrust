import type { InputHTMLAttributes } from 'react';
import React, { forwardRef } from 'react';

import { cx } from '@/utils/cx';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string;
  className?: string;
  error?: any;
};
export const Input = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, className, error, ...props }, ref) => {
    console.log(error);
    return (
      <div>
        <input
          placeholder={placeholder}
          ref={ref}
          className={cx(
            'w-full py-1.5 border-b focus:outline-none placeholder:text-grey-4 text-sm font-medium',
            error ? 'border-red-500' : 'border-grey-4',
            className,
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
