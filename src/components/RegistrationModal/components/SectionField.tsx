import cx from 'classnames';
import React from 'react';

import { Button } from '@/components/Buttons';
import type { SectionsType } from '@/constants/sections';

import styles from '../RegistrationModal.module.css';

type SectionFieldProps = {
  section: SectionsType;
  selectedSection: string;
  title: string;
  className?: string;
  onSetSection: (section: SectionsType) => void;
};

export const SectionField: React.FC<SectionFieldProps> = ({
  title,
  section,
  selectedSection,
  className,
  onSetSection,
}) => (
  <Button
    theme={selectedSection === section ? section : 'default'}
    className={cx(styles.sectionButton, className)}
    onClick={() => onSetSection(section)}
  >
    {title}
  </Button>
);
