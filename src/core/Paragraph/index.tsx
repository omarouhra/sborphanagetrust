import cx from 'classnames';
import React from 'react';

type Props = {
  appearance: 'hero' | 'primary' | 'subTitle';
  className?: string;
  text: string;
};

const styles = {
  hero: 'text-xl',
  primary: 'text-lg',
  subTitle: 'text-base',
};

function Paragraph({ appearance, text, className }: Props) {
  return (
    <p className={cx('font-normal', styles[appearance], className)}>{text}</p>
  );
}

export default Paragraph;
