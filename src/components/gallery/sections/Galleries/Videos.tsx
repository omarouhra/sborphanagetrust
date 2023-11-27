import React from 'react';

export default function Videos() {
  return (
    <div className="flex h-[590px] w-full items-center justify-center rounded-2xl bg-white">
      <iframe
        width="100%"
        height="100%"
        className="rounded-2xl"
        src="https://player.vimeo.com/92c820de-dcd2-4e55-b653-12b17180a699"
      ></iframe>
    </div>
  );
}
