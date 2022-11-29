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
            {initialSection === Sections.algorithmics && (
              <SectionField
                section={Sections.algorithmics}
                onSetSection={onSetSection}
                selectedSection={selectedSection}
                title="Algoritmică"
              />
            )}
            {initialSection === Sections.web && (
              <SectionField
                section={Sections.web}
                selectedSection={selectedSection}
                onSetSection={onSetSection}
                title="Web"
              />
            )}
            {initialSection === Sections.gamedev && (
              <SectionField
                section={Sections.gamedev}
                onSetSection={onSetSection}
                selectedSection={selectedSection}
                title="GameDev"
              />
            )}

            {initialSection === Sections.ctf && (
              <SectionField
                section={Sections.ctf}
                onSetSection={onSetSection}
                selectedSection={selectedSection}
                title="CTF"
              />
            )}
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
