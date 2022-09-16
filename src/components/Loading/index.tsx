import cx from 'classnames';
import React from 'react';

import Delayed from './Delayed';
import styles from './Loading.module.css';

type LoadingProps = {
  containerClassName?: string;
  className?: string;
  size?: 'small' | 'default' | 'large';
};

export function Loading({
  size = 'default',
  className,
  containerClassName,
}: LoadingProps) {
  return (
    <Delayed>
      <div className={cx(styles.container, containerClassName)}>
        <div className={cx(styles.loading, styles[size], className)} />
      </div>
    </Delayed>
  );
}
