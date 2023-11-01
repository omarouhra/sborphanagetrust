import React from 'react';

import { cx } from '@/utils/cx';

type Props = {
  appearance?: 'hero' | 'primary' | 'subTitle';
  className?: string;
  text: string;
};

const styles = {
  hero: 'text-base md:text-xl md:leading-normal',
  primary: 'text-lg',
  subTitle: 'text-base md:leading-7',
};

function Paragraph({ appearance = 'primary', text, className }: Props) {
  return <p className={cx(styles[appearance], className)}>{text}</p>;
}

export default Paragraph;
