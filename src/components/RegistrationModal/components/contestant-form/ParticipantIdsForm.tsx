import { FieldArray, Form, Formik } from 'formik';
import React, { useMemo } from 'react';

import { Button } from '@/components/Buttons';
import { Plus as PlusIcon } from '@/components/icons';
import type { SectionsType } from '@/constants';
import { Sections } from '@/constants';
import useStore from '@/stores/participant';

import { ContestantField } from './ContestantField';
import type { ParticipantsFormType } from './Form.base';
import { validationSchema } from './Form.base';
import styles from './Form.module.css';

type ParticipantIdsFormProps = {
  selectedSection: SectionsType;
  onClickClose: () => void;
  onRegister: (
    values: ParticipantsFormType,
    selectedSection: SectionsType
  ) => void;
};

const ParticipantIdsForm: React.FC<ParticipantIdsFormProps> = ({
  selectedSection,
  onClickClose,
  onRegister,
}) => {
  const isTeamSection = useMemo(
    () =>
      selectedSection !== Sections.algorithmics &&
      selectedSection !== Sections.ctf,
    [selectedSection]
  );
  const profile = useStore((state) => state.profile);

  if (!profile?.identifier) {
    return <div>not ok</div>;
  }

  const INITIAL_TEAM: ParticipantsFormType = {
    leaderIndex: 0,
    participantIds: [profile?.identifier],
  };

  return (
    <Formik<ParticipantsFormType>
      initialValues={INITIAL_TEAM}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log({ values });
        onRegister(values, selectedSection);
        onClickClose();
      }}
    >
      {({ isValid, values, setFieldValue }) => {
        if (!isTeamSection && values.participantIds.length > 1) {
          setFieldValue('participantIds', [profile?.identifier]);
        }

        return (
          <Form>
            <FieldArray
              name="participantIds"
              render={({ remove, push }) => (
                <>
                  {values.participantIds.map((_, index) => (
                    <ContestantField
                      key={index}
                      index={index}
                      name={`participantIds[${index}]`}
                      isThemselves={
                        profile?.identifier === values.participantIds[index]
                      }
                      isUnique={values.participantIds.length === 1}
                      isTeamSection={isTeamSection}
                      onDelete={() => {
                        if (values.leaderIndex === index) {
                          setFieldValue('leaderIndex', 0);
                        }
                        remove(index);
                      }}
                    />
                  ))}

                  {values.participantIds.length < 3 && isTeamSection && (
                    <div className={styles.plusButton}>
                      <PlusIcon
                        className={styles.icon}
                        onClick={() => push('')}
                      />
                    </div>
                  )}
                </>
              )}
            />
            <div className={styles.buttonContainer}>
              <Button
                theme="default"
                onClick={onClickClose}
                className="mr-6 flex-1"
                type="button"
              >
                Cancel
              </Button>
              <Button
                className="flex-1"
                theme="algorithmics"
                disabled={!isValid}
                type="submit"
              >
                Inscrie-te
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export { ParticipantIdsForm };
