import type { TextareaHTMLAttributes } from 'react';
import React, { forwardRef } from 'react';

import { cx } from '@/utils/cx';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  placeholder: string;
  className?: string;
  error?: any;
};
export const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ placeholder, className, error, ...props }, ref) => {
    return (
      <div>
        <textarea
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

Textarea.displayName = 'Textarea';

export default Textarea;
