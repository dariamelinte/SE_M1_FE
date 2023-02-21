import cx from 'classnames';
import React from 'react';

import styles from './GradientButton.module.css';

export type GradientButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  secondary?: boolean;
};

export const GradientButton: React.FC<GradientButtonProps> = ({
  disabled,
  children,
  onClick,
  secondary,
}) => {
  return (
    <div
      className={cx(styles.GradientButton, {
        [styles.secondary as string]: secondary,
      })}
      onClick={!disabled ? onClick : () => {}}
    >
      {children}
    </div>
  );
};
