import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import logo from '@/assets/images/logo-mare.png';
import { Button } from '@/components/Buttons';
import useUserStore from '@/stores/users';
import { INITIAL_USER } from '@/utils/initial-values';

import styles from './Header.module.css';

export const Header: React.FC = () => {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);
  // hello

  const onClickLogout = () => {
    setUser(INITIAL_USER);
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
