import { Dialog } from '@headlessui/react';
import cx from 'classnames';
import React, { useState } from 'react';

import type { SectionsType } from '@/constants/sections';
import { Sections } from '@/constants/sections';

import type { AlgFormValues, BaseFormValues } from './components';
import { AlgForm, BaseForm, SectionField } from './components';
import styles from './RegistrationModal.module.css';

type RegisterBodyType = {
  initialSection: SectionsType;
  english?: boolean;
  onClickClose?: () => void;
  onRegister: (
    values: AlgFormValues | BaseFormValues,
    selectedSection: SectionsType
  ) => void;
};

export const RegisterBody: React.FC<RegisterBodyType> = ({
  onClickClose,
  onRegister,
  english,
  initialSection,
}) => {
  const [selectedSection, setSelectedSection] =
    useState<SectionsType>(initialSection);

  const onSetSection = (section: SectionsType) => {
    setSelectedSection(section);
  };

  return (
    <>
      {onClickClose ? (
        <Dialog.Title className={styles.title}>
          {english ? 'Register form' : 'Formular de inscriere'}
        </Dialog.Title>
      ) : (
        <div className={styles.title}>
          {english ? 'Register form' : 'Formular de inscriere'}
        </div>
      )}
      <div className="center">
        <div className={styles.sectionContainer}>
          <div className={styles.sectionTitle}>
            {english
              ? 'The area for which the registration is made'
              : 'Aria pentru care se face inscrierea'}
            :
          </div>

          <div className={styles.sections}>
            {!english && (
              <>
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
                  title="Capture the Flag"
                />
                <SectionField
                  section={Sections.gamedev}
                  onSetSection={onSetSection}
                  selectedSection={selectedSection}
                  title="GameDev"
                />
              </>
            )}
            <SectionField
              section={Sections.algorithmics}
              onSetSection={onSetSection}
              selectedSection={selectedSection}
              title={english ? 'Algorithmics' : 'Algoritmică'}
              className={cx({ 'w-full': english })}
            />
          </div>
          <div>
            {selectedSection === Sections.algorithmics ? (
              <AlgForm
                selectedSection={selectedSection}
                onClickClose={onClickClose}
                onRegister={onRegister}
                english={english}
              />
            ) : (
              <BaseForm
                selectedSection={selectedSection}
                onClickClose={onClickClose}
                onRegister={onRegister}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
