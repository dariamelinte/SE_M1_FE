import { Transition } from '@headlessui/react';
import cx from 'classnames';
import Link from 'next/link';
import React from 'react';
import { hasAuthParams, useAuth } from 'react-oidc-context';

import useGetProfile from '@/hooks/useGetProfile';
import useStore from '@/stores/participant';

import { navbarItems } from './navbar';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  const auth = useAuth();
  const [isNavOpened, setNavState] = React.useState(false);

  const authUser = useStore((state) => state.profile);
  const justLoggedOut = useStore((state) => state.justLoggedOut);
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  const loadUser = useStore((state) => state.loadUser);
  const setUserProfile = useStore((state) => state.setUserProfile);
  const { loading: profileIsLoading, data: profileData } = useGetProfile();

  const authenticateUser = useStore((state) => state.authenticateUser);
  const logoutUser = useStore((state) => state.logoutUser);

  React.useEffect(() => {
    if (
      !hasAuthParams() &&
      !auth.isAuthenticated &&
      !auth.activeNavigator &&
      !auth.isLoading &&
      !justLoggedOut
    ) {
      auth.signinRedirect().then(() => {
        loadUser(auth.user || null);
      });
    }
  }, [
    auth.isAuthenticated,
    auth.activeNavigator,
    auth.isLoading,
    auth.signinRedirect,
  ]);

  React.useEffect(() => {
    if (auth.isAuthenticated) {
      // console.log('[HERE]', auth.user?.access_token);
      if (profileIsLoading === false && auth.user) {
        auth.user.profile = { ...auth.user.profile, ...profileData };
        setUserProfile({ ...auth.user.profile, ...profileData });
        loadUser(auth.user);
      } else if (auth.user) {
        loadUser(auth.user);
      }
    } else {
      logoutUser(null);
    }
  }, [auth.isAuthenticated, auth.user, profileIsLoading]);

  const onBackDropPress = () => {
    setNavState(false);
  };
  const onBurgerPress = () => {
    setNavState(true);
  };

  return (
    <>
      <nav className={styles.navContainer}>
        <div className="sm:hidden">
          <button
            onClick={onBurgerPress}
            className="flex items-center text-white"
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className={styles.navList}>
          {navbarItems.map(({ url, text }, idx) => (
            <li key={idx}>
              <Link href={url}>
                <p className={styles.navLink}>{text}</p>
              </Link>
            </li>
          ))}
          {isAuthenticated === false ? (
            <li>
              <p
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  authenticateUser(auth);
                }}
              >
                Login
              </p>
            </li>
          ) : (
            <>
              <li>
                <Link href="/profil">
                  <p className={cx(styles.navLink, 'w-max')}>
                    Buna {authUser?.firstName}
                  </p>
                </Link>
              </li>
              <li>
                <p
                  className={styles.navLink}
                  onClick={(e) => {
                    e.preventDefault();
                    logoutUser(auth);
                  }}
                >
                  Logout
                </p>
              </li>
            </>
          )}
        </ul>
      </nav>
      <Transition
        show={isNavOpened}
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute z-50 sm:hidden">
          <div
            onClick={onBackDropPress}
            className="fixed inset-0 bg-gray-800 opacity-25"
          ></div>
          <nav className="fixed inset-y-0 left-0 flex w-5/6 max-w-sm flex-col overflow-y-auto border-r bg-white p-6">
            <div className="mb-8 flex">
              <button onClick={onBackDropPress} className="ml-auto">
                <svg
                  className="h-6 w-6 cursor-pointer text-gray-400 hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                {navbarItems.map(({ url, text }, idx) => (
                  <li className="mb-1" key={idx}>
                    <Link href={url}>
                      <p className={styles.navBurgerLink}>{text}</p>
                    </Link>
                  </li>
                ))}
                {isAuthenticated === false ? (
                  <li className="mb-1">
                    <p
                      className={styles.navBurgerLink}
                      onClick={(e) => {
                        e.preventDefault();
                        authenticateUser(auth);
                      }}
                    >
                      Login
                    </p>
                  </li>
                ) : (
                  <>
                    <li className="mb-1">
                      <Link href="/profil">
                        <p className={cx(styles.navBurgerLink, 'w-max')}>
                          Buna {authUser?.firstName}
                        </p>
                      </Link>
                    </li>
                    <li className="mb-1">
                      <p
                        className={styles.navBurgerLink}
                        onClick={(e) => {
                          e.preventDefault();
                          logoutUser(auth);
                        }}
                      >
                        Logout
                      </p>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </Transition>
    </>
  );
};
