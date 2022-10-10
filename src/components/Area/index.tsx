import React from 'react';

import { Schedule } from '@/components/Schedule';

import styles from './Area.module.css';

type AreaProps = {
  children: React.ReactNode;
  type: number;
};

export const Area: React.FC<AreaProps> = ({ children, type }) => {
  return (
    <div className={styles.areaContainer}>
      <div className={styles.areaDescriptionContainer}>
        <div className={styles.areaDescription}>{children}</div>
      </div>
      <div className={styles.areaSchedule}>
        <Schedule type={type} />
      </div>
    </div>
  );
};
