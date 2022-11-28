import Link from 'next/link';
import React from 'react';
import { useAuth } from 'react-oidc-context';

import { GradientButton } from '@/components/Buttons';
import useGetProfile from '@/hooks/useGetProfile';
import useStore from '@/stores/participant';

import styles from './Texts.module.css';

type CtfTextProps = {
  openModel: () => void;
};

const CtfText: React.FC<CtfTextProps> = ({ openModel }) => {
  const auth = useAuth();
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  useGetProfile();
  const profile = useStore((state) => state.profile);
  const authenticateUser = useStore((state) => state.authenticateUser);

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
        {isAuthenticated && !profile?.identifier && (
          <GradientButton>
            <Link href="/profil">
              <div className="text-center text-xl font-bold text-white">
                Va rugam sa va completati profilul pentru a va putea inscrie
              </div>
            </Link>
          </GradientButton>
        )}
        {isAuthenticated && !profile?.sections?.ctf && (
          <GradientButton onClick={openModel}>
            <div className="text-xl font-bold text-white">Înscrie-te</div>
          </GradientButton>
        )}
        {profile?.sections?.ctf && (
          <GradientButton>
            <div className="text-center text-xl font-bold text-white">
              V-ati inscris deja la aceasta arie
            </div>
          </GradientButton>
        )}
      </div>
      {/* <div className="flex items-center justify-center pb-12">
        <a
          target={'_blank'}
          href={`https://fiicode-api.asii.ro/static/ctf`}
          rel="noreferrer"
        >
          <GradientButton>
            <div className="text-xl font-bold text-white">Tema Probei</div>
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
      <p className={styles.areaParagraph}>
        &emsp; &emsp;Capture The Flag este un concurs cu o varietate de probe de{' '}
        securitate cibernetică. Acestea au o dificultate care variază de la ușor{' '}
        la greu, diferența fiind valorificată prin numărul de puncte pe care{' '}
        participanții îl primesc pentru rezolvarea acestora.
      </p>
      <p className={styles.areaParagraph}>
        &emsp; &emsp;Un challenge va fi considerat rezolvat odată cu găsirea{' '}
        unui flag ce are un format specific și introducerea acestuia în locul{' '}
        destinat de pe platformă. Prima persoană sau echipă care reușește să{' '}
        găsească flagul primește cele mai multe puncte (First blood), urmând ca{' '}
        punctajul să scadă treptat, pe măsură ce mai mulți participanți rezolvă{' '}
        provocarea. Durata concursului poate varia de la 24 până la 72 de ore.
      </p>
      <p className={styles.areaParagraph}>
        &emsp; &emsp;Concursul va cuprinde diferite categorii:
      </p>
      <ul className={styles.areaParagraph}>
        <li className="list-inside list-disc">
          Reverse engineering (participanții vor primi un fișier deja compilat{' '}
          pentru a-l exploata)
        </li>
        <li className="list-inside list-disc">
          Binary Exploitation/PWN (participanții vor primi un fișier binar{' '}
          alături de codul său sursă și vor trebui să-i găsească{' '}
          vulnerabilitatea pentru a obține control asupra sistemului pe care{' '}
          rulează)
        </li>
        <li className="list-inside list-disc">
          Forensics (participanții vor primi o analiză asupra traficului și vor{' '}
          trebui să găsească activitatea malițioasă care s-a produs)
        </li>
        <li className="list-inside list-disc">
          Steganography (participanții vor primi un fișier media (imagine,{' '}
          audio, video) și vor trebui să descopere mesajul secret ascuns în acel{' '}
          fișier)
        </li>
        <li className="list-inside list-disc">
          MISC (challenge-urile vor aparține de diverse categorii, cea{' '}
          principală fiind programarea)
        </li>
        <li className="list-inside list-disc">
          Cryptography (challenge-urile vor avea ca scop spargerea schemelor{' '}
          criptografice care nu sunt implementate adecvat)
        </li>
        <li className="list-inside list-disc">
          Web (participanții vor trebui să identifice și să exploateze{' '}
          vulnerabilitățile aplicațiilor web)
        </li>
      </ul>
      <div className="flex items-center justify-center">
        <a
          target={'_blank'}
          href="https://discord.com/invite/8XVSvTFubQ"
          rel="noreferrer"
        >
          <GradientButton onClick={openModel}>
            <div className="text-xl font-bold text-white">Discord</div>
          </GradientButton>
        </a>
      </div>
    </>
  );
};

export default CtfText;
