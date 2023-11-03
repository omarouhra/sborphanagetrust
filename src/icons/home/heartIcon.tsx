import type { SVGProps } from 'react';
import React from 'react';

export default function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="17"
      height="14"
      viewBox="0 0 17 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.5 4.80699V4.62575C0.5 2.44137 2.07875 0.578245 4.23125 0.219495C5.62813 -0.0176924 7.10625 0.446682 8.125 1.467L8.5 1.84137L8.84688 1.467C9.89375 0.446682 11.3438 -0.0176924 12.7688 0.219495C14.9219 0.578245 16.5 2.44137 16.5 4.62575V4.80699C16.5 6.10387 15.9625 7.3445 15.0125 8.22887L9.36563 13.5007C9.13125 13.7195 8.82187 13.8414 8.5 13.8414C8.17812 13.8414 7.86875 13.7195 7.63438 13.5007L1.98719 8.22887C1.03844 7.3445 0.5 6.10387 0.5 4.80699Z"
        fill="currentColor"
      />
    </svg>
  );
}
