import React from 'react';

import { cx } from '@/utils/cx';

type Props = {
  appearance?: 'hero' | 'primary' | 'subTitle';
  className?: string;
  text: string;
};

const styles = {
  hero: 'text-base md:text-xl font-normal',
  primary: 'text-base',
  subTitle: 'text-sm',
};

function Paragraph({ appearance = 'primary', text, className }: Props) {
  return <p className={cx(styles[appearance], className)}>{text}</p>;
}

export default Paragraph;
