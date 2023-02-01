import cx from 'classnames';
import React from 'react';

import { Loading } from '@/components/Loading';
import useGetProfile from '@/hooks/useGetProfile';
import useStore from '@/stores/participant';

import styles from './Profile.module.css';

export type ProfileCardProps = {};

const autocompleter = (value?: string | null) =>
  value || 'Field-ul nu este completat';

const ProfileCard: React.FC<ProfileCardProps> = () => {
  const { loading } = useGetProfile();
  const profile = useStore((state) => state.profile);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.card}>
      <div className={cx(styles.separator, 'rounded bg-red-200 px-8')}>
        <p className="text-xl font-semibold text-red-500">
          {profile?.identifier}
        </p>
        <p className={styles.text}>
          (*) ID folosit pentru inscrieri la diferite arii
        </p>
      </div>
      <div className={styles.separator}>
        <p className={styles.textBold}>Email</p>
        <p className={styles.text}>{autocompleter(profile?.email)}</p>
      </div>
      <div className={styles.separator}>
        <p className={styles.textBold}>Nume de familie</p>
        <p className={styles.text}>{autocompleter(profile?.lastName)}</p>
      </div>
      <div className={styles.separator}>
        <p className={styles.textBold}>Prenume</p>
        <p className={styles.text}>{autocompleter(profile?.firstName)}</p>
      </div>
      <div className={styles.separator}>
        <p className={styles.textBold}>Numar de telefon</p>
        <p className={styles.text}>{autocompleter(profile?.phone)}</p>
      </div>
      <div className={styles.separator}>
        <p className={styles.textBold}>Marime Tricou</p>
        <p className={styles.text}>{autocompleter(profile?.shirtSize)}</p>
      </div>
      <div className={styles.separator}>
        <p className={styles.textBold}>
          Username csacademy (* se completeaza de cei care vor sa se inscrie la
          proba de algoritmica)
        </p>
        <p className={styles.text}>{autocompleter(profile?.csacademy)}</p>
      </div>
      <div className={styles.separator}>
        <p className={styles.textBold}>Profesor coordonator</p>
        <p className={styles.text}>{autocompleter(profile?.professor)}</p>
      </div>
      <div className={styles.separator}>
        <p className={styles.textBold}>Liceu / Facultate</p>
        <p className={styles.text}>{autocompleter(profile?.institute)}</p>
      </div>
      <div className={styles.separator}>
        <p className={styles.textBold}>Judet</p>
        <p className={styles.text}>{autocompleter(profile?.state)}</p>
      </div>
      <div className={styles.separator}>
        <p className={styles.textBold}>Oras</p>
        <p className={styles.text}>{autocompleter(profile?.city)}</p>
      </div>
    </div>
  );
};

export default ProfileCard;