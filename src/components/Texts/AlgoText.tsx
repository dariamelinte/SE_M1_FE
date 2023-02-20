import React, { useEffect, useState } from 'react';
import { useAuth } from 'react-oidc-context';

import { GradientButton } from '@/components/Buttons';
import { LinksSection } from '@/components/LinksSection/LinksSection';
import useGetProfile from '@/hooks/useGetProfile';
import useStore from '@/stores/participant';

import styles from './Texts.module.css';

type AlgoTextProps = {
  openModel: () => void;
};

const AlgoText: React.FC<AlgoTextProps> = ({ openModel }) => {
  const auth = useAuth();
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  useGetProfile();
  const profile = useStore((state) => state.profile);
  const authenticateUser = useStore((state) => state.authenticateUser);

  const [hasArea, setArea] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  useEffect(() => {
    if (!profile?.sections) {
      setErrorMessage('Setati-va profilul pentru a va inscrie.');
    } else {
      setErrorMessage('V-ati inscris la aceasta arie.');
    }
    setArea(profile?.sections?.algo === null);
  }, [profile?.sections?.algo]);

  const oldSubjects = {
    baseLink: 'https://csacademy.com/contest',
    years: [
      {
        year: '2019',
        links: [
          { link: 'fii-code-2019-round-1', text: 'Runda 1' },
          { link: 'fii-code-2019-round-2', text: 'Runda 2' },
          { link: 'fii-code-2019-round-3', text: 'Runda 3' },
          { link: 'fii-code-2019-final-round-mirror', text: 'Runda finală' },
        ],
      },
      {
        year: '2020',
        links: [
          { link: 'fii-code-2020-round-1', text: 'Runda 1' },
          { link: 'fii-code-2020-round-2', text: 'Runda 2' },
          { link: 'fii-code-2020-round-3', text: 'Runda 3' },
          { link: 'fii-code-2020-final-round-mirror', text: 'Runda finală' },
        ],
      },
      {
        year: '2021',
        links: [
          { link: 'fii-code-2021-round-1', text: 'Runda 1' },
          { link: 'fii-code-2021-round-2', text: 'Runda 2' },
          { link: 'fii-code-2021-round-3', text: 'Runda 3' },
          { link: 'fii-code-2021-final-round', text: 'Runda finală' },
        ],
      },
      {
        year: '2022',
        links: [
          { link: 'fiicode-2022-round-1', text: 'Runda 1' },
          { link: 'fiicode-2022-round-2', text: 'Runda 2' },
        ],
      },
    ],
  };

  return (
    <>
      <h1 className={styles.areaHeading}>DESPRE ARIA ALGORITMICĂ</h1>
      <p className={styles.areaParagraph}>
        &emsp; &emsp; Aria de Algoritmică este un concurs ce vizează
        cunoștințele de informatică ale studenților sau elevilor de liceu
        testând capacitatea lor de a rezolva probleme. Dacă îți este ușor să
        găsești soluții sau abordări pentru diferite probleme sau dacă ai o
        minte curioasă și perseverentă atunci această arie este cea mai
        potrivită pentru tine.
      </p>
      <div className="flex items-center justify-center pb-12">
        {!isAuthenticated && (
          <GradientButton
            onClick={() => {
              authenticateUser(auth);
            }}
          >
            <div className="text-center text-xl font-bold text-white">
              Va rugam sa va autentificati pentru a va putea inscrie
            </div>
          </GradientButton>
        )}
        {isAuthenticated && hasArea && (
          <GradientButton onClick={openModel}>
            <div className="text-xl font-bold text-white">Înscrie-te</div>
          </GradientButton>
        )}
        {isAuthenticated && !hasArea && (
          <GradientButton>
            <div className="text-center text-2xl font-bold text-white">
              {errorMessage}
            </div>
          </GradientButton>
        )}
      </div>
      {/* <h2 className={styles.areaPrize}>
        Premiile ariei vor fi anuntate in saptamanile ce urmeaza.
      </h2> */}
      <h1 className={styles.areaHeading}>PREMIILE EDIȚIEI</h1>
      <div className="flex flex-col justify-evenly sm:flex-row">
        <div className="flex flex-col justify-center justify-items-center text-center">
          <h1 className={styles.areaHeading}>SECȚIUNEA ELEVI</h1>
          <h2 className={styles.areaPrize}>Premiul I: 1000 RON</h2>
          <h2 className={styles.areaPrize}>Premiul II: 750 RON</h2>
          <h2 className={styles.areaPrize}>Premiul III: 500 RON</h2>
          <h2 className={styles.areaPrize}>3 Mențiuni: 200 RON</h2>
        </div>

        <div className="flex flex-col justify-center justify-items-center text-center">
          <h1 className={styles.areaHeading}>SECȚIUNEA STUDENȚI</h1>
          <h2 className={styles.areaPrize}>Premiul I: 1000 RON</h2>
          <h2 className={styles.areaPrize}>Premiul II: 750 RON</h2>
          <h2 className={styles.areaPrize}>Premiul III: 500 RON</h2>
          <h2 className={styles.areaPrize}>3 Mențiuni: 200 RON</h2>
        </div>
      </div>
      <br />
      <p className={styles.areaParagraph}>
        Pe lângă aceste premii, se adaugă și cadouri surpriză din partea
        sponsorilor.
      </p>
      <br />
      <p className={styles.areaParagraph}>
        (*) Premiile sunt valide pentru elevii și pentru studenții cu vârsta de{' '}
        până la 26 de ani.
      </p>
      <br />
      <br />
      <h1 className={styles.areaHeading}>DESFĂȘURAREA ARIEI DE ALGORITMICĂ </h1>
      <p className={styles.areaParagraph}>
        &emsp; &emsp; Proba de Algoritmică va fi divizată anul acesta în două{' '}
        secțiuni, una pentru elevi și una pentru studenți. Aceasta constă în 2
        probe online, susținute pe{' '}
        <a className="text-red-400	" href="https://csacademy.com">
          csacademy.com
        </a>
        . Cele 2 probe vor avea loc pe 21 si 22 aprilie, iar clasamentul va fi
        stabilit în funcție de cumulul de puncte din cele 2 probe. Dacă veți
        participa pe{' '}
        <a href="https://csacademy.com" className="text-red-400	">
          csacademy.com
        </a>{' '}
        fară a vă înscrie pe site-ul concursului, soluțiile trimise nu vor fi
        luate în considerare. Durata fiecărei probe este de 2 ore și va conține
        6 probleme de dificultăți diferite.
      </p>
      <div className="flex items-center justify-center">
        <a
          target={'_blank'}
          href="https://discord.gg/qwzeTf7B"
          rel="noreferrer"
        >
          <GradientButton onClick={openModel}>
            <div className="text-xl font-bold text-white">Discord</div>
          </GradientButton>
        </a>
      </div>
      <LinksSection oldSubjects={oldSubjects} />
    </>
  );
};

export default AlgoText;
