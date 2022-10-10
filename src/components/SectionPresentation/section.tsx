import cx from 'classnames';
import React from 'react';

import { Plus as PlusIcon } from '@/components/icons';
import type { SectionsType } from '@/constants/sections';

import styles from './SectionPresentation.module.css';

type SectionProps = {
  title: string;
  description: string;
  theme: SectionsType;
  icon: JSX.Element;
  isRight?: boolean;
  onClick: () => void;
};

const Section: React.FC<SectionProps> = ({
  title,
  description,
  theme,
  icon,
  isRight,
  onClick,
}) => (
  <div className={styles.sectionContainer}>
    <div
      className={cx(styles.sectionIconContainer, {
        [styles.sectionIconRight as string]: isRight,
        'left-5': !isRight,
      })}
    >
      {icon}
    </div>
    <div className={cx(styles.sectionTitle, styles[`sectionTitle-${theme}`])}>
      {title}
    </div>

    <div className={styles.sectionDescription}>{description}</div>

    <div
      className={cx(styles.plusContainer, {
        [styles.plusContainerRight as string]: isRight,
      })}
      onClick={onClick}
    >
      <PlusIcon className={cx(styles.plusIcon, styles[`plusIcon-${theme}`])} />
    </div>
  </div>
);

export default Section;
