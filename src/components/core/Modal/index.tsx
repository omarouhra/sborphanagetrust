import type { ReactNode } from 'react';
import React, { useEffect, useRef } from 'react';

import CloseIcon from '@/icons/home/CloseIcon';

type Props = {
  isVisible: boolean;
  closeModal: () => void;
  children: ReactNode;
};
export default function Modal({ isVisible, children, closeModal }: Props) {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (divRef?.current && !divRef?.current?.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [closeModal]);

  if (isVisible) {
    return (
      <div
        className={`absolute inset-0 z-50 flex w-full animate-fadeIn overflow-hidden bg-black/70 `}
      >
        <div
          className={`fixed flex h-screen w-full flex-col items-center  justify-center pb-8 backdrop-blur`}
        >
          <div className={`relative mx-auto w-full md:w-3/5 `} ref={divRef}>
            <button
              onClick={() => closeModal()}
              className="mb-2 flex w-full justify-end "
            >
              <CloseIcon className="text-white duration-150 hover:scale-[1.099]" />
            </button>
            {children}
          </div>
        </div>
      </div>
    );
  }
  return null;
}
