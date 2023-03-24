import cx from 'classnames';
import React from 'react';

import styles from './Form.module.css';

type CheckboxProps = {
  name: string;
  title: string;
  checked: boolean;
  status?: 'success' | 'danger';
  error?: string;
  className?: string;
  onCheck: () => void;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  title,
  status,
  error,
  className,
  checked,
  onCheck,
}) => {
  return (
    <div className={className}>
      <label className={cx(styles.label, 'items-center')}>
        <input
          className={cx(styles.checkbox, {
            [styles[`input-${status}`] as string]: status,
          })}
          type="checkbox"
          name={name}
          checked={checked}
          onClick={onCheck}
        />

        {title}
      </label>

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
