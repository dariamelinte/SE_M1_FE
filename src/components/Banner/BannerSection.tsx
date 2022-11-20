import React from 'react';

import type { BannersType } from '@/constants';
import { Banners } from '@/constants';

import styles from './Banner.module.css';
import BannerSectionIcon from './BannerSectionIcon';

type BannerSectionProps = {
  theme: BannersType;
};

const getBanner = (theme: string) => {
  let banner;

  switch (theme) {
    case Banners.web:
      banner = 'Web / Mobile';
      break;
    case Banners.gamedev:
      banner = 'GameDev';
      break;
    case Banners.ctf:
      banner = 'Capture the Flag';
      break;
    case Banners.algorithmics:
      banner = 'Algoritmică';
      break;
    default:
      break;
  }

  return banner;
};

const BannerSection: React.FC<BannerSectionProps> = ({ theme }) => {
  return (
    <div className={styles.bannerSection}>
      <BannerSectionIcon theme={theme} />
      <div className={styles.bannerSectionText}>{getBanner(theme)}</div>
    </div>
  );
};

export default BannerSection;
