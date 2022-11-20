import React from 'react';

import { GradientButton } from '@/components/Buttons';

import styles from './Texts.module.css';

type CtfTextProps = {
  openModel: () => void;
};

const CtfText: React.FC<CtfTextProps> = ({ openModel }) => {
  return (
    <>
      <h1 className={styles.areaHeading}>DESPRE ARIA CAPTURE THE FLAG</h1>
      <p className={styles.areaParagraph}>
        &emsp; &emsp;Capture the Flag este o arie construită în jurul{' '}
        conceptului de cybersecurity, cu scopul de a încuraja participanții{' '}
        să-și extindă cunoștiințele despre securitate, dar și să-și dezvolte{' '}
        abilitățile de ethical hacking. Concurenții vor avea șansa să încerce să{' '}
        identifice punctele slabe ale aplicațiilor web sau ale sistemelor de{' '}
        operare, proba desfășurându-se în conformitate cu jocul cibernetic{' '}
        “Capture the Flag”.
      </p>
      {/* <Closed /> */}
      {/* <div className="flex items-center justify-center">
        <GradientButton onClick={openModel}>
          <div className="text-2xl font-bold text-white">Înscrie-te</div>
        </GradientButton>
      </div> */}
      {/* <div className="flex items-center justify-center pb-12">
        <a
          target={'_blank'}
          href={`https://fiicode-api.asii.ro/static/ctf`}
          rel="noreferrer"
        >
          <GradientButton>
            <div className="text-2xl font-bold text-white">Tema Probei</div>
          </GradientButton>
        </a>
      </div> */}
      <h1 className={styles.areaHeading}>PREMIILE EDIȚIEI</h1>
      <h2 className={styles.areaPrize}>
        Premiile ariei vor fi anuntate in saptamanile ce urmeaza.
      </h2>
      {/* <h2 className={styles.areaPrize}>Premiul I: 3750 RON</h2>
      <h2 className={styles.areaPrize}>Premiul II: 3000 RON</h2>
      <h2 className={styles.areaPrize}>Premiul III: 2250 RON</h2>
      <p className={styles.areaParagraph}>
        Pe lângă aceste premii, se adaugă și cadouri surpriză din partea
        sponsorilor.
      </p> */}
      <br />
      <br />
      <h1 className={styles.areaHeading}>
        DESFĂȘURAREA ARIEI CAPTURE THE FLAG
      </h1>
      <p className={styles.areaParagraph}>&emsp; &emsp; DE COMPLETAT</p>
      <div className="flex items-center justify-center">
        <a
          target={'_blank'}
          href="https://discord.com/invite/8XVSvTFubQ"
          rel="noreferrer"
        >
          <GradientButton onClick={openModel}>
            <div className="text-2xl font-bold text-white">Discord</div>
          </GradientButton>
        </a>
      </div>
    </>
  );
};

export default CtfText;
