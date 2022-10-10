import React from 'react';

import { GradientButton } from '@/components/Buttons';
import { Closed } from '@/components/Closed';

import styles from './Texts.module.css';

type MarketingTextProps = {
  openModel: () => void;
};

const MarketingText: React.FC<MarketingTextProps> = ({ openModel }) => {
  return (
    <>
      <h1 className={styles.areaHeading}>DESPRE ARIA MARKETING</h1>
      <p className={styles.areaParagraph}>
        &emsp; &emsp; DEVxMKT Challenge reprezintă proba unde spiritul de
        echipă, creativitatea și gândirea logică sunt provocate atât în ceea ce
        privește sfera aptitudinilor IT, cât și a cunoștințelor Business.
        Concurenților li se oferă astfel oportunitatea de a practica și a
        înțelege construcția unei campanii robuste de Marketing Automation.
      </p>
      <Closed />
      <div className="flex items-center justify-center">
        <GradientButton onClick={openModel}>
          <div className="text-2xl font-bold text-white">Înscrie-te</div>
        </GradientButton>
      </div>
      <div className="flex items-center justify-center pb-12">
        <a
          target={'_blank'}
          href={`https://fiicode-api.asii.ro/static/marketing`}
          rel="noreferrer"
        >
          <GradientButton>
            <div className="text-2xl font-bold text-white">Tema Probei</div>
          </GradientButton>
        </a>
      </div>
      <h1 className={styles.areaHeading}>PREMIILE EDIȚIEI</h1>
      <h2 className={styles.areaPrize}>Premiul I: 3750 RON</h2>
      <h2 className={styles.areaPrize}>Premiul II: 3000 RON</h2>
      <h2 className={styles.areaPrize}>Premiul III: 2250 RON</h2>
      <p className={styles.areaParagraph}>
        Pe lângă aceste premii, se adaugă și cadouri surpriză din partea
        sponsorilor.
      </p>
      <br />
      <br />
      <h1 className={styles.areaHeading}>DESFĂȘURAREA ARIEI MARKETING</h1>
      <p className={styles.areaParagraph}>
        &emsp; &emsp; Competiția are loc pe echipe de maxim 3 persoane, care,
        odată cu începerea înscrierilor, vor avea acces la tema ediției.
        Echipele vor lucra la imaginea unui nou business ce activează în zona de
        marketing automation și dorește să înceapă parteneriate cu noi clienți.
        Pentru a începe, noul brand are nevoie de o campanie de marketing bine
        structurată. În urma înscrierii, echipele vor primi un mentor (în
        funcție de numărul de mentori disponibili) care îi va coordona pe tot
        parcursul proiectului. Mentorul le va sta la dispoziție și îi va ajuta
        cu informații relevante, care să contribuie la buna desfășurare a
        activității. Fiecare echipă are dreptul la 2 întâlniri săptamânale de
        maxim 30 de minute în care pot adresa diferite probleme sau întrebări
        pregătite de dinainte.
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

export default MarketingText;
