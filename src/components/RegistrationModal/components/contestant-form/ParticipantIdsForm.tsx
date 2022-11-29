import { FieldArray, Form, Formik } from 'formik';
import React, { useMemo } from 'react';
import { toast } from 'react-toastify';

import { Button } from '@/components/Buttons';
import { Plus as PlusIcon } from '@/components/icons';
import { Loading } from '@/components/Loading';
import type { SectionsType } from '@/constants';
import { Sections, SectionsIds } from '@/constants';
import ERROR_MESSAGES from '@/helpers/error-messages';
import useGetProfile from '@/hooks/useGetProfile';
import { register } from '@/services/api/register';
import useStore from '@/stores/participant';

import { ContestantField } from './ContestantField';
import type { ParticipantsFormType } from './Form.base';
import { validationSchema } from './Form.base';
import styles from './Form.module.css';

type ParticipantIdsFormProps = {
  selectedSection: SectionsType;
  onClickClose: () => void;
};

const ParticipantIdsForm: React.FC<ParticipantIdsFormProps> = ({
  selectedSection,
  onClickClose,
}) => {
  const isTeamSection = useMemo(
    () =>
      selectedSection !== Sections.algorithmics &&
      selectedSection !== Sections.ctf,
    [selectedSection]
  );
  const accessToken = useStore((state) => state.access_token);
  const profile = useStore((state) => state.profile);
  const { loading } = useGetProfile([accessToken]);

  if (loading || !profile?.identifier) {
    return <Loading />;
  }

  const INITIAL_TEAM: ParticipantsFormType = {
    leaderIndex: 0,
    participantIds: [profile?.identifier],
  };

  return (
    <Formik<ParticipantsFormType>
      initialValues={INITIAL_TEAM}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        try {
          await register(
            {
              id: SectionsIds[selectedSection] + 1,
              leaderId: values.participantIds[
                values.leaderIndex || 0
              ] as string,
              members: values.participantIds,
            },
            accessToken
          );
        } catch (error: any) {
          toast.error(error?.response?.data?.message || ERROR_MESSAGES.default);
        } finally {
          onClickClose();
        }
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
