import { Dialog } from '@headlessui/react';
import React, { useState } from 'react';

import type { SectionsType } from '@/constants/sections';
import { Sections } from '@/constants/sections';

import { ParticipantIdsForm, SectionField } from './components';
import styles from './RegistrationModal.module.css';

type RegisterBodyType = {
  initialSection: SectionsType;
  onClickClose: () => void;
};

export const RegisterBody: React.FC<RegisterBodyType> = ({
  onClickClose,
  initialSection,
}) => {
  const [selectedSection, setSelectedSection] =
    useState<SectionsType>(initialSection);

  const onSetSection = (section: SectionsType) => {
    setSelectedSection(section);
  };

  return (
    <>
      <Dialog.Title className={styles.title}>
        Formular de inscriere
      </Dialog.Title>
      <div className="center">
        <div className={styles.sectionContainer}>
          <div className={styles.sectionTitle}>
            Aria pentru care se face inscrierea:
          </div>

          <div className={styles.sections}>
            <SectionField
              section={Sections.algorithmics}
              onSetSection={onSetSection}
              selectedSection={selectedSection}
              title="Algoritmică"
            />
            <SectionField
              section={Sections.web}
              selectedSection={selectedSection}
              onSetSection={onSetSection}
              title="Web"
            />
            <SectionField
              section={Sections.ctf}
              onSetSection={onSetSection}
              selectedSection={selectedSection}
              title="CTF"
            />
            <SectionField
              section={Sections.gamedev}
              onSetSection={onSetSection}
              selectedSection={selectedSection}
              title="GameDev"
            />
          </div>
          <ParticipantIdsForm
            selectedSection={selectedSection}
            onClickClose={onClickClose}
          />
        </div>
      </div>
    </>
  );
};
