import React from 'react';

import {
  communitySpeakers,
  ctfSpeakers,
  diamondSpeakers,
  goldSpeakers,
  mediaSpeakers,
  // platinumSpeakers,
} from '@/constants/speakers';

import Speaker from './speaker';
import styles from './SpeakersPresentation.module.css';

const SpeakersPresentation: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center pb-4">
      <div className={styles.speakerPresentation}>
        <div className={styles.speakerTitle}>Sponsor CTF</div>
        <div className={styles.speakerRow}>
          {ctfSpeakers.map(({ id, ...speaker }) => (
            <Speaker key={id} {...speaker} />
          ))}
        </div>
        <div className={styles.speakerTitle}>Sponsori Diamond</div>
        <div className={styles.speakerRow}>
          {diamondSpeakers.map(({ id, ...speaker }) => (
            <Speaker key={id} {...speaker} />
          ))}
        </div>
        {/* <div className={styles.speakerTitle}>Sponsori Platinum</div>
        <div className={styles.speakerRow}>
          {platinumSpeakers.map(({ id, ...speaker }) => (
            <Speaker key={id} {...speaker} />
          ))}
        </div> */}

        <div className={styles.speakerTitle}>Sponsori Gold</div>
        <div className={styles.speakerRow}>
          {goldSpeakers.map(({ id, ...speaker }) => (
            <Speaker key={id} {...speaker} />
          ))}
        </div>
        <div className={styles.speakerTitle}>Sponsori Community</div>
        <div className={styles.speakerRow}>
          {communitySpeakers.map(({ id, ...speaker }) => (
            <Speaker key={id} {...speaker} />
          ))}
        </div>
        <div className={styles.speakerTitle}>Sponsori Media</div>
        <div className={styles.speakerRow}>
          {mediaSpeakers.map(({ id, ...speaker }) => (
            <Speaker key={id} {...speaker} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakersPresentation;
