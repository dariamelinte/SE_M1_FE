import React from 'react';
import { useAuth } from 'react-oidc-context';

import { GradientButton } from '@/components/Buttons';
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
            <div className="text-center text-2xl font-bold text-white">
              Va rugam sa va autentificati pentru a va putea inscrie
            </div>
          </GradientButton>
        )}
        {isAuthenticated && !profile?.sections?.algo && (
          <GradientButton onClick={openModel}>
            <div className="text-2xl font-bold text-white">Înscrie-te</div>
          </GradientButton>
        )}
        {profile?.sections?.algo && (
          <GradientButton>
            <div className="text-center text-2xl font-bold text-white">
              V-ati inscris deja la aceasta proba
            </div>
          </GradientButton>
        )}
      </div>
      <h1 className={styles.areaHeading}>PREMIILE EDIȚIEI</h1>
      <h2 className={styles.areaPrize}>
        Premiile ariei vor fi anuntate in saptamanile ce urmeaza.
      </h2>
      {/* <h2 className={styles.areaPrize}>Premiul I: 2500 RON</h2>
      <h2 className={styles.areaPrize}>Premiul II: 2000 RON</h2>
      <h2 className={styles.areaPrize}>Premiul III: 1500 RON</h2>
      <h2 className={styles.areaPrize}>4 Mențiuni: 500 RON</h2>
      <p className={styles.areaParagraph}>
        Pe lângă aceste premii, se adaugă și cadouri surpriză din partea
        sponsorilor.
      </p> */}
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

export default AlgoText;
