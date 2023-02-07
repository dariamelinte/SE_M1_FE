import { Form, Formik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';

import { Button } from '@/components/Buttons';
import ERROR_MESSAGES from '@/helpers/error-messages';
import { updateProfile } from '@/services/api';
import useStore from '@/stores/participant';

import styles from './Profile.module.css';
import type { Profile } from './profile-form-base';
import { profileValidationSchema } from './profile-form-base';
import { ProfileFields } from './ProfileFields';

export type ProfileFormProps = {
  onClickClose: () => void;
  data: Profile;
};

const ProfileForm: React.FC<ProfileFormProps> = ({ onClickClose, data }) => {
  const profile = useStore((state) => state.profile);
  const accessToken = useStore((state) => state.access_token);
  const setUserProfile = useStore((state) => state.setUserProfile);
  const authUser = useStore((state) => state.profile);

  return (
    <Formik<Profile>
      initialValues={{
        ...data,
        identifier: profile?.identifier || data.identifier,
        firstName: profile?.firstName || data.firstName,
        lastName: profile?.lastName || data.lastName,
        email: profile?.email || data.email,
      }}
      validationSchema={profileValidationSchema}
      onSubmit={async (values) => {
        try {
          await updateProfile(
            {
              lastName: values.lastName,
              firstName: values.firstName,
              phone: values.phone,
              shirtSize: values.shirtSize,
              state: values.state,
              city: values.city,
              professor: values.professor,
              csacademy: values.csacademy,
              institute: values.institute,
            },
            accessToken
          );
          if (authUser !== null)
            setUserProfile({
              ...authUser,
              lastName: values.lastName,
              firstName: values.firstName,
              phone: values.phone,
              shirtSize: values.shirtSize,
              state: values.state,
              city: values.city,
              professor: values.professor,
              csacademy: values.csacademy,
              institute: values.institute,
            });
        } catch (error: any) {
          toast.error(error?.response?.data?.message || ERROR_MESSAGES.default);
        } finally {
          onClickClose();
        }
      }}
    >
      {({ isValid }) => (
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
      )}
    </Formik>
  );
};

export default ProfileForm;
