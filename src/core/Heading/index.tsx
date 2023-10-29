import cx from 'classnames';
import React from 'react';

type Props = {
  appearance: 'hero' | 'primary' | 'subTitle';
  className?: string;
  text: string;
};

const styles = {
  hero: 'text-4xl',
  primary: 'text-3xl',
  subTitle: 'text-xl',
};

function Heading({ appearance, text, className }: Props) {
  return (
    <h1 className={cx('font-bold', styles[appearance], className)}>{text}</h1>
  );
}

export default Heading;
