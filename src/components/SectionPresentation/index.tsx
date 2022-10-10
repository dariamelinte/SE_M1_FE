import router from 'next/router';
import React from 'react';

import {
  AlgLogo,
  Areas,
  GamedevLogo,
  MarketingLogo,
  WebLogo,
} from '@/components/icons';
import { Sections } from '@/constants/sections';

import Section from './section';
import styles from './SectionPresentation.module.css';

type SectionPresentationProps = {};

const SectionPresentation: React.FC<SectionPresentationProps> = () => (
  <div className="relative flex justify-center">
    <div className={styles.areasContainer}>
      <Areas className={styles.areas} />
    </div>
    <div className={styles.sectionPresentation}>
      <div className={styles.sectionRow}>
        <Section
          title="Marketing"
          description="DEVxMKT Challenge reprezintă proba unde spiritul de echipă, creativitatea și gândirea logică sunt provocate atât în ceea ce privește sfera aptitudinilor IT, cât și a cunoștințelor Business. Concurenților li se oferă astfel oportunitatea de a practica și a înțelege construcția unei campanii robuste de Marketing Automation."
          theme={Sections.marketing}
          onClick={() => router.push(`/marketing`)}
          icon={<MarketingLogo className={styles.sectionIcon} />}
        />
        <Section
          isRight
          title="Web&Mobile"
          description="Web&Mobile este aria ce promovează lucrul în echipă și creativitatea provocând participanții să își pună în practică cunoștințele de Web Design. Astfel, li se va oferi șansa participanților de a crea o aplicație web sau una mobilă pe baza unei teme aleasă de comisie, atât în etapa de calificare, cât și în hackathonul etapei finale."
          theme={Sections.web}
          onClick={() => router.push(`/web`)}
          icon={<WebLogo className={styles.sectionIcon} />}
        />
      </div>
      <div className={styles.sectionRow}>
        <Section
          title="GameDev"
          description="Game Dev este aria care își încurajează participanții să fie cât mai creativi și să își expună ideile originale sub forma unui joc. Scopul acestei arii este de a încuraja participanții să livreze o formă de entertainment pe gustul lor. Tema de anul acesta, space adventure, vă va face să vizualizați o experiență de neuitat prin cod."
          theme={Sections.gamedev}
          onClick={() => router.push('/gamedev')}
          icon={<GamedevLogo className={styles.sectionIcon} />}
        />
        <Section
          isRight
          title="Algoritmică"
          description="Aria de Algoritmică este un concurs ce vizează cunoștințele de informatică ale elevilor de liceu, testând capacitatea lor de a rezolva probleme. Dacă îți este ușor să găsești soluții sau abordări pentru diferite probleme sau dacă ai o minte curioasă și perseverentă atunci această arie este cea mai potrivită pentru tine."
          theme={Sections.algorithmics}
          onClick={() => router.push(`/algoritmica`)}
          icon={<AlgLogo className={styles.sectionIcon} />}
        />
      </div>
    </div>
  </div>
);

export default SectionPresentation;
