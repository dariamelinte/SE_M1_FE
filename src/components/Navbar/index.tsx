import { Transition } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';

import { navbarItems } from './navbar';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  const [isNavOpened, setNavState] = React.useState(false);

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
              </ul>
            </div>
          </nav>
        </div>
      </Transition>
    </>
  );
};
