import React from 'react';

import { cx } from '@/utils/cx';

type Props = {
  appearance?: 'hero' | 'primary' | 'subTitle';
  className?: string;
  text: string;
};

const styles = {
  hero: 'text-3xl md:text-6xl  font-semibold',
  primary: 'text-4xl',
  subTitle: 'text-xl',
};

function Heading({ appearance = 'hero', text, className }: Props) {
  return (
    <h1 className={cx('sm:leading-tight', styles[appearance], className)}>
      {text}
    </h1>
  );
}

export default Heading;
