import { Form, Formik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';

import { Button } from '@/components/Buttons';
import ERROR_MESSAGES from '@/helpers/error-messages';
import useGetProfile from '@/hooks/useGetProfile';
import { updateProfile } from '@/services/api';
import useStore from '@/stores/participant';

import { Loading } from '../Loading';
import styles from './Profile.module.css';
import type { Profile } from './profile-form-base';
import { profileValidationSchema } from './profile-form-base';
import { ProfileFields } from './ProfileFields';

export type ProfileFormProps = {
  onClickClose: () => void;
};

const ProfileForm: React.FC<ProfileFormProps> = ({ onClickClose }) => {
  const profile = useStore((state) => state.profile);
  const accessToken = useStore((state) => state.access_token);
  const { loading, data } = useGetProfile();

  console.log({ data });

  if (loading) {
    return <Loading />;
  }

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
          // eslint-disable-next-line
          const { identifier, ...restOfValues } = values;
          const { data: updateProfileData } = await updateProfile(
            restOfValues,
            accessToken
          );

          console.log({ updateProfileData });
        } catch (error: any) {
          toast.error(error?.message || ERROR_MESSAGES.default);
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
