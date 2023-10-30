import type { SVGProps } from 'react';
import React from 'react';

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.3333 2.66656H4.66668C2.66668 2.66656 1.33334 3.9999 1.33334 5.9999V9.9999C1.33334 11.9999 2.66668 13.3332 4.66668 13.3332H11.3333C13.3333 13.3332 14.6667 11.9999 14.6667 9.9999V5.9999C14.6667 3.9999 13.3333 2.66656 11.3333 2.66656ZM9.26002 8.68656L7.61333 9.67324C6.94667 10.0732 6.39999 9.76657 6.39999 8.98657V7.00657C6.39999 6.22657 6.94667 5.91991 7.61333 6.31991L9.26002 7.30656C9.89335 7.69323 9.89335 8.30656 9.26002 8.68656Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default YoutubeIcon;
