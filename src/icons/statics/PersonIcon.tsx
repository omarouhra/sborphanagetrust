import type { SVGProps } from 'react';
import React from 'react';

export default function PersonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="78"
      height="77"
      viewBox="0 0 78 77"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_112_1191)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.5 76.0855V63.7848C7.07959 60.8585 27.2257 55.2877 28.1719 47.2356C28.3849 45.4184 24.0988 38.4879 23.115 35.1667C21.0095 31.8143 20.2576 26.4879 22.5573 22.9475C23.4722 21.5376 23.0837 16.4055 23.0837 14.4692C23.0837 -4.81212 56.8714 -4.81839 56.8714 14.4692C56.8714 16.9068 56.3075 21.3872 57.6359 23.3047C59.8542 26.513 58.7074 32.1965 56.8401 35.1667C55.6432 38.657 51.0876 45.2617 51.4762 47.2356C52.9237 54.5922 71.6097 59.5363 77.4937 62.1493V76.0793L0.5 76.0855Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_112_1191">
          <rect
            width="77"
            height="76.0851"
            fill="currentColor"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
