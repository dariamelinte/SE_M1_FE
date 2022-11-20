import React from 'react';

import { AlgLogo, CtfLogo, GamedevLogo, WebLogo } from '@/components/icons';
import type { BannersType } from '@/constants';
import { Banners } from '@/constants';

import styles from './Banner.module.css';

type BannerSectionIconProps = {
  theme: BannersType;
};

const getBanner = (theme: string) => {
  let component;

  switch (theme) {
    case Banners.web:
      component = (
        <WebLogo
          style={{ filter: `brightness(400%)`, transform: `scale(1.2)` }}
          className="h-10 w-10 fill-white"
        />
      );
      break;
    case Banners.gamedev:
      component = (
        <GamedevLogo
          style={{ filter: `brightness(400%)`, transform: `scale(1.2)` }}
          className="h-10 w-10 fill-white"
        />
      );
      break;
    case Banners.ctf:
      component = (
        <CtfLogo
          style={{ filter: `brightness(400%)`, transform: `scale(1.2)` }}
          className="h-10 w-10 fill-white"
        />
      );
      break;
    case Banners.algorithmics:
      component = (
        <AlgLogo
          style={{ filter: `brightness(400%)`, transform: `scale(1.2)` }}
          className="h-10 w-10 fill-white"
        />
      );
      break;
    default:
      break;
  }

  return component;
};

const BannerSectionIcon: React.FC<BannerSectionIconProps> = ({ theme }) => {
  return (
    <div className={styles.bannerSectionIconContainer}>
      <div
        className={styles.bannerSectionIcon}
        style={{
          background: `radial-gradient(50% 50% at 50% 50%, #D1006C 0%, #5B0487 100%)`,
        }}
      >
        {getBanner(theme)}
      </div>
    </div>
  );
};

export default BannerSectionIcon;
