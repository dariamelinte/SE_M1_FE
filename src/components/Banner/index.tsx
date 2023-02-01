import Image from 'next/image';
import React from 'react';

import banner from '@/assets/images/banner.png';
import type { BannersType } from '@/constants';

import styles from './Banner.module.css';
import BannerOverlay from './BannerOverlay';

type BannerProps = {
  theme: BannersType;
};

export const Banner: React.FC<BannerProps> = ({ theme }) => {
  return (
    <div className={styles.banner}>
      <Image className="mt-1 w-full" alt="FIICode-Banner" src={banner} />
      <BannerOverlay theme={theme} />
    </div>
  );
};
