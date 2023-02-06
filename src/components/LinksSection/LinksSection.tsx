import React from 'react';

import styles from '@/components/Texts/Texts.module.css';

type LinkData = {
  link: string;
  text: string;
};

type YearData = {
  year: string;
  links: LinkData[];
};

type OldSubjects = {
  baseLink: string;
  years: YearData[];
};

type LinksSectionType = {
  oldSubjects: OldSubjects;
};

export const LinksSection: React.FC<LinksSectionType> = ({ oldSubjects }) => {
  // if there are no old subjects to display, don't display the section
  if (oldSubjects.years.length === 0) return <></>;

  return (
    <>
      <h1 className={styles.areaHeading}>SUBIECTE DIN ANII ANTERIORI</h1>
      <div className="flex flex-col items-start justify-evenly sm:flex-row">
        {oldSubjects.years.map((yearData: YearData) => (
          <div
            key={yearData.year}
            className="flex flex-col justify-center justify-items-center text-center"
          >
            <h1 className={styles.areaHeading}>{yearData.year}</h1>
            {yearData.links.map((linkData: LinkData) => (
              <a
                key={linkData.link}
                target={'_blank'}
                href={`${oldSubjects.baseLink}/${linkData.link}`}
                rel="noreferrer"
                className={styles.areaPrize}
              >
                {linkData.text}
              </a>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
