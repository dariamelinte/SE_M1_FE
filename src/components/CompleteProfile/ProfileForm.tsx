import { Form, Formik } from 'formik';
import React from 'react';

import { Button } from '@/components/Buttons';
import useStore from '@/stores/participant';

import styles from './Profile.module.css';
import type { Profile } from './profile-form-base';
import { INITIAL_PROFILE, profileValidationSchema } from './profile-form-base';
import { ProfileFields } from './ProfileFields';

export type ProfileFormProps = {
  onClickClose: () => void;
};

const ProfileForm: React.FC<ProfileFormProps> = ({ onClickClose }) => {
  const profile = useStore((state) => state.profile);

  return (
    <Formik<Profile>
      initialValues={profile || INITIAL_PROFILE}
      validationSchema={profileValidationSchema}
      onSubmit={(values) => {
        console.log({ values });
        onClickClose();
      }}
    >
      {({ isValid, values, errors }) => {
        console.log({ values, errors });
        return (
          <Form className={styles.card}>
            <ProfileFields />
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
                Salveaza profilul
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ProfileForm;
