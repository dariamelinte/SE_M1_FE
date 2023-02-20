import React from 'react';

import styles from './GradientButton.module.css';

export type GradientButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export const GradientButton: React.FC<GradientButtonProps> = ({
  disabled,
  children,
  onClick,
}) => {
  return (
    <div
      className={styles.GradientButton}
      onClick={!disabled ? onClick : () => {}}
    >
      {children}
    </div>
  );
};
