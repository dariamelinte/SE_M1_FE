import React from 'react';

import styles from './Texts.module.css';

const CoderText: React.FC = () => {
  return (
    <>
      <div className={styles.textParagraph}>
        &emsp; &emsp; <span className={styles.fiicode}>FIICode</span> este un
        proiect organizat de ASII și de Facultatea de Informatică din Iași, ce
        are la bază dezvoltarea abilităților pe partea de programare la nivel
        competitiv.
      </div>
      <div className={styles.textParagraph}>
        &emsp; &emsp; Ajuns la ediția a VII-a, FIICode oferă și anul acesta un
        „challenge” pasionaților de informatică, aducând în prim plan cele trei
        categorii veterane, Algoritmică, Game Dev și Web&Mobile, și o arie în
        premieră, Marketing.
      </div>
      <div className={styles.textParagraph}>
        &emsp; &emsp; Concursul va pune din nou la încercare creativitatea
        participanților. Dacă îți plac jocurile sau pur și simplu vrei să îți
        testezi abilitățile de programare, aici e locul perfect pentru tine.
        Ambiția și spiritul competitiv vor fi calitătile esențiale de care veți
        avea nevoie pentru a vă număra printre învingători.
      </div>
    </>
  );
};

export default CoderText;
