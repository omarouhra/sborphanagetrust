import type { SVGProps } from 'react';
import React from 'react';

export default function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.75 5.25L5.25 18.75"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M18.75 18.75L5.25 5.25"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}
