import Image from 'next/image';
import React from 'react';

import AsiiCoder from '@/assets/images/asii-coder.png';

import styles from './CoderCard.module.css';

export type CoderCardProps = {
  description: React.ReactNode;
};

const CoderCard: React.FC<CoderCardProps> = ({ description }) => {
  return (
    <div className={styles.CoderCard}>
      <div className={styles.description}>{description}</div>
      <div className={styles.coderImage}>
        <Image alt="coder-card" src={AsiiCoder} />
      </div>
    </div>
  );
};

export default CoderCard;
