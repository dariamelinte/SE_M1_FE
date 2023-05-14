import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import logo from '@/assets/images/logo-mare.png';
import { Button } from '@/components/Buttons';
import useCredentialStore from '@/stores/credential';
import { INITIAL_CREDENTIAL } from '@/utils/initial-values';

import styles from './Header.module.css';

export const Header: React.FC = () => {
  const router = useRouter();
  const setCredential = useCredentialStore((state) => state.setCredential);
  // hello

  const onClickLogout = () => {
    setCredential(INITIAL_CREDENTIAL);
    router.replace('/login');
  };

  return (
    <div aria-label="admin-header" role="container" className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src={logo} className={styles.logo} alt="logo" />
      </div>
      <Button onClick={onClickLogout}>Log Out</Button>
    </div>
  );
};
