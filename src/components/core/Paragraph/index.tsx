import React from 'react';

import { cx } from '@/utils/cx';

type Props = {
  appearance?: 'hero' | 'primary' | 'subText' | 'lightText';
  className?: string;
  text: string;
};

const styles = {
  hero: 'text-base md:text-xl md:leading-normal',
  primary: 'text-base md:text-lg',
  subText: 'text-sm md:text-base md:leading-7',
  lightText: 'text-lg font-light md:leading-6',
};

function Paragraph({ appearance = 'primary', text, className }: Props) {
  return <p className={cx(styles[appearance], className)}>{text}</p>;
}

export default Paragraph;
