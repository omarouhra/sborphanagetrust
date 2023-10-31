import type { SVGProps } from 'react';
import React from 'react';

function EmailIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.3333 2.33344H4.66665C2.66665 2.33344 1.33331 3.33344 1.33331 5.66677V10.3334C1.33331 12.6668 2.66665 13.6668 4.66665 13.6668H11.3333C13.3333 13.6668 14.6666 12.6668 14.6666 10.3334V5.66677C14.6666 3.33344 13.3333 2.33344 11.3333 2.33344ZM11.6466 6.39344L9.55998 8.0601C9.11998 8.41344 8.55998 8.58677 7.99998 8.58677C7.43998 8.58677 6.87331 8.41344 6.43998 8.0601L4.35331 6.39344C4.13998 6.2201 4.10665 5.9001 4.27331 5.68677C4.44665 5.47343 4.75998 5.43343 4.97331 5.60677L7.05998 7.27344C7.56665 7.6801 8.42665 7.6801 8.93331 7.27344L11.02 5.60677C11.2333 5.43343 11.5533 5.46677 11.72 5.68677C11.8933 5.9001 11.86 6.2201 11.6466 6.39344Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default EmailIcon;