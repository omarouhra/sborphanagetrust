import type { SVGProps } from 'react';
import React from 'react';

export default function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.6667 7.75V10.1667H13.8333C14 10.1667 14.0833 10.3333 14.0833 10.5L13.75 12.0833C13.75 12.1667 13.5833 12.25 13.5 12.25H11.6667V18.3333H9.16667V12.3333H7.75C7.58333 12.3333 7.5 12.25 7.5 12.0833V10.5C7.5 10.3333 7.58333 10.25 7.75 10.25H9.16667V7.5C9.16667 6.08333 10.25 5 11.6667 5H13.9167C14.0833 5 14.1667 5.08333 14.1667 5.25V7.25C14.1667 7.41667 14.0833 7.5 13.9167 7.5H11.9167C11.75 7.5 11.6667 7.58333 11.6667 7.75Z"
        stroke="white"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M12.4998 18.3332H7.49984C3.33317 18.3332 1.6665 16.6665 1.6665 12.4998V7.49984C1.6665 3.33317 3.33317 1.6665 7.49984 1.6665H12.4998C16.6665 1.6665 18.3332 3.33317 18.3332 7.49984V12.4998C18.3332 16.6665 16.6665 18.3332 12.4998 18.3332Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
