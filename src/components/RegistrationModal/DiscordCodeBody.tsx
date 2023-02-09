import { Dialog } from '@headlessui/react';
import cx from 'classnames';
import Image from 'next/image';
import React from 'react';

import AsiiCoder from '@/assets/images/asii-coder.png';
import { Button } from '@/components/Buttons';

import styles from './RegistrationModal.module.css';

type DiscordCodeBodyType = {
  discordCode: string;
  english?: boolean;
  onClickClose?: () => void;
};

export const DiscordCodeBody: React.FC<DiscordCodeBodyType> = ({
  english,
  discordCode,
  onClickClose,
}) => {
  return (
    <>
      {onClickClose ? (
        <Dialog.Title className={styles.title}>
          {english ? 'Finalized register' : 'Inscriere finalizata'} 🎉
        </Dialog.Title>
      ) : (
        <div className={styles.title}>
          {english ? 'Finalized register' : 'Inscriere finalizata'} 🎉
        </div>
      )}

      <div className={styles.sectionContainer}>
        <div className={cx(styles.sectionTitle, 'text-center mt-2 font-bold')}>
          {discordCode}
        </div>
        <div className={cx(styles.sectionTitle, 'text-center')}>
          {english
            ? 'Use the code above in the #roles chanel'
            : 'Folisiți codul de mai sus in canalul text #roles'}
          <br />
          {english ? 'of the discord server ' : 'al serverului de discord '}
          <Button underlined>
            {/* TODO: replace the href with the actual link */}
            <a
              href="https://discord.gg/qwzeTf7B"
              target="_blank"
              rel="noreferrer"
            >
              FIICode 2022
            </a>
          </Button>
          .
        </div>

        <div className="flex items-center justify-center pb-6">
          <div className="h-56 w-48">
            <Image src={AsiiCoder} />
          </div>
        </div>

        {!!onClickClose && (
          <div className={styles.buttonContainer}>
            <Button theme="web" onClick={onClickClose}>
              Close
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
