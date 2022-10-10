import React from 'react';

import styles from './GradientButton.module.css';

export type GradientButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

export const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <div className={styles.GradientButton} onClick={onClick}>
      {children}
    </div>
  );
};
