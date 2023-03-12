import cx from 'classnames';
import React from 'react';

import styles from './Button.module.css';

export type ButtonTheme = 'default';

export type ButtonSize = 'md' | 'sm' | 'text';

export const DEFAULT_THEME = 'default';
export const DEFAULT_SIZE = 'md';

export type ButtonProps = {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconEnd?: React.ReactNode;
  disabled?: boolean;
  underlined?: boolean;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      icon,
      iconEnd,
      size = DEFAULT_SIZE,
      theme = DEFAULT_THEME,
      disabled,
      underlined,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      className={cx(
        styles[size],
        {
          [styles.hasIcon as string]: icon || iconEnd,
          [styles.button as string]: !underlined,
          [styles[theme] as string]: !underlined,
          [styles['underlined-button'] as string]: underlined,
          [styles[`underlined-${theme}`] as string]: underlined,
        },
        className
      )}
      disabled={disabled}
      {...props}
    >
      {icon}
      {children}
      {iconEnd}
    </button>
  )
);
