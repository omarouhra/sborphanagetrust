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
        className={`absolute inset-0 z-50 flex w-full animate-fadeIn overflow-hidden bg-black/50`}
        // onClick={() => setShowModal(false)}
      >
        <div className={`fixed flex h-screen w-full  flex-col pb-8`}>
          <button className="mb-12 flex w-full justify-end px-5 py-8">
            <CloseIcon className="text-gray-950" />
          </button>
          <div className={`relative mx-auto w-full md:w-3/5`} ref={divRef}>
            {children}
          </div>
        </div>
      </div>
    );
  }
  return null;
}