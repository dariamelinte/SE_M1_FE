import React from 'react';

import BannerCoverBlurSVG from '@/assets/svg/banner-cover-blur.svg';
import type { BannersType } from '@/constants';
import { Banners } from '@/constants';

import styles from './Banner.module.css';
import BannerSection from './BannerSection';

type BannerOverlayProps = {
  theme: BannersType;
};

const BannerOverlay: React.FC<BannerOverlayProps> = ({ theme }) => {
  console.log({ BannerCoverBlurSVG });
  return (
    <div
      className={styles.bannerBlurContainer}
      // TODO: make the cover work
      style={{
        backgroundImage: `url(${BannerCoverBlurSVG})`,
        backgroundSize: 'cover',
      }}
    >
      {theme !== Banners.mainpage && <BannerSection theme={theme} />}
    </div>
  );
};

export default BannerOverlay;
