import React from 'react';

import BannerCoverDottedLineSVG from '@/assets/svg/banner-cover-dotted-line.svg';

import styles from './Banner.module.css';

const BannerDecoration: React.FC = () => {
  return (
    <div
      className={styles.bannerDecorationContainer}
      style={{ backgroundImage: `url(${BannerCoverDottedLineSVG})` }}
    />
  );
};

export default BannerDecoration;
