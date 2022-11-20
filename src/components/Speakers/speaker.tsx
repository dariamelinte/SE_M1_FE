import Image from 'next/image';
import React from 'react';

import styles from './SpeakersPresentation.module.css';

type SpeakerProps = {
  speakerName: string;
  iconTitle: string;
  description: string;
  websiteLink?: string;
  icon: string;
};

const Speaker: React.FC<SpeakerProps> = ({
  speakerName,
  description,
  websiteLink,
  icon,
}) => {
  return (
    <div className={styles.speakerCard} style={{ minWidth: '14rem' }}>
      <div className={styles.logoTextContainer}>
        <Image
          style={{
            maxHeight: '120px',
            width: '100%',
            alignSelf: 'center',
            objectFit: 'contain',
          }}
          className="mt-4 max-w-full self-center md:max-w-xs"
          src={icon}
          alt=""
        />
      </div>
      <div className={styles.speakerInfo}>
        <div className={styles.speakerName}>{speakerName}</div>
        <div className={styles.description}>{description}</div>
        {!!websiteLink && (
          <a
            target="_blank"
            rel="noreferrer"
            href={`//${websiteLink}`}
            className={styles.website}
          >
            {/* <Linkedin /> */}
            <div className={styles.websiteLink}>Website</div>
          </a>
        )}
      </div>
    </div>
  );
};

export default Speaker;
