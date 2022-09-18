import React from 'react';

import { BannerCover } from '@/components/icons';
import type { BannersType } from '@/constants';

import styles from './Banner.module.css';
import BannerOverlay from './BannerOverlay';

type BannerProps = {
  theme: BannersType;
};

export const Banner: React.FC<BannerProps> = ({ theme }) => {
  return (
    <div className={styles.banner}>
      <BannerCover className="mt-1 w-full" />
      <BannerOverlay theme={theme} />
    </div>
  );
};
