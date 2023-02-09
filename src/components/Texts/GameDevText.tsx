import React, { useEffect, useState } from 'react';
import { useAuth } from 'react-oidc-context';

import { GradientButton } from '@/components/Buttons';
import { LinksSection } from '@/components/LinksSection/LinksSection';
import useGetProfile from '@/hooks/useGetProfile';
import useStore from '@/stores/participant';

import styles from './Texts.module.css';

type GameDevTextProps = {
  openModel: () => void;
};

const GameDevText: React.FC<GameDevTextProps> = ({ openModel }) => {
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
      setErrorMessage('V-ati inscris deja la aceasta arie.');
    }
    setArea(profile?.sections?.game === null);
  }, [profile?.sections?.game]);

  const oldSubjects = {
    baseLink: 'https://fiicode-api.asii.ro/static/',
    years: [
      {
        year: '2022',
        links: [{ link: 'gamedev', text: 'Challenge' }],
      },
    ],
  };

  return (
    <>
      <h1 className={styles.areaHeading}>DESPRE ARIA GAMEDEV</h1>
      <p className={styles.areaParagraph}>
        &emsp; &emsp; Game Dev este aria care își încurajează participanții să
        fie cât mai creativi și să își expună ideile originale sub forma unui
        joc. Scopul acestei arii este de a încuraja participanții să livreze o
        formă de entertainment pe gustul lor.
      </p>
      {/* <Closed /> */}
      <div className="flex items-center justify-center">
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
      {/* <div className="flex items-center justify-center pb-12">
        <a
          target={'_blank'}
          href={`https://fiicode-api.asii.ro/static/gamedev`}
          rel="noreferrer"
        >
          <GradientButton>
            <div className="text-xl font-bold text-white">Tema Probei</div>
          </GradientButton>
        </a>
      </div> */}
      <h1 className={styles.areaHeading}>PREMIILE EDIȚIEI</h1>
      {/* <h2 className={styles.areaPrize}>
        Premiile ariei vor fi anuntate in saptamanile ce urmeaza.
      </h2> */}
      <h2 className={styles.areaPrize}>Premiul I: 3000 RON</h2>
      <h2 className={styles.areaPrize}>Premiul II: 2500 RON</h2>
      <h2 className={styles.areaPrize}>Premiul III: 2000 RON</h2>
      <p className={styles.areaParagraph}>
        Pe lângă aceste premii, se adaugă și cadouri surpriză din partea
        sponsorilor.
      </p>
      <br />
      <br />
      <h1 className={styles.areaHeading}>DESFĂȘURAREA ARIEI GAMEDEV </h1>
      <p className={styles.areaParagraph}>
        &emsp; &emsp; Competiția are loc pe echipe de maxim 3 persoane, care,
        odată cu începerea înscrierilor, vor avea acces la tema ediției.
        Echipele vor dezvolta un joc bazat pe tema primită. În urma înscrierii,
        echipele vor primi un mentor (în funcție de numărul de mentori
        disponibili) care îi va coordona pe tot parcursul proiectului. Mentorul
        le va sta la dispoziție și îi va ajuta cu informații relevante, care să
        contribuie la buna desfășurare a activității. Fiecare echipă are dreptul
        la 2 întâlniri săptamânale de maxim 30 de minute în care pot adresa
        diferite probleme sau întrebări pregătite de dinainte.
      </p>
      <p className={styles.areaParagraph}>
        &emsp; &emsp; La finalul etapei de calificare, proiectul trebuie
        prezentat juriului prin intermediul unui repository de Github și a unui
        videoclip de prezentare (minimum 3 minute). Juriul va analiza proiectele
        urcate pe GitHub împreună cu videoclipul, iar ulterior organizatorii vor
        contacta echipele ce se vor duela într-un hackathon de 12 ore cu o temă
        prestabilită.
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

export default GameDevText;
