import React from 'react';

import {
  Facebook,
  Instagram,
  LogoAsii,
  LogoFii,
  LogoFiicode,
} from '@/components/icons';

import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className="flex h-full flex-col justify-between py-14 px-10 text-xl text-footer-link sm:px-20 md:px-40">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex justify-center md:justify-start">
            <a href={'#'}>
              <LogoFiicode className="self-center hover:opacity-60" />
            </a>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="text-center text-2xl font-semibold">
              {' '}
              Follow us{' '}
            </div>
            <div className="flex justify-center">
              <a
                href={'https://www.instagram.com/fiicode/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="mr-1.5 flex h-13 w-13 items-center justify-center rounded-xl bg-footer-icon-background hover:opacity-60">
                  <Instagram />
                </div>
              </a>
              <a
                href={'https://www.facebook.com/FIICode/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="ml-1.5 flex h-13 w-13 items-center justify-center rounded-xl bg-footer-icon-background hover:opacity-60">
                  <Facebook />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div>
            <div className="mb-7 font-semibold">Legaturi</div>
            <div className="flex flex-col gap-2 font-extralight">
              <a href={'/web'} className="no-underline hover:underline">
                Web
              </a>
              <a href={'/algoritmica'} className="no-underline hover:underline">
                Algoritmică
              </a>
              <a href={'/ctf'} className="no-underline hover:underline">
                Capture the Flag
              </a>
              <a href={'/gamedev'} className="no-underline hover:underline">
                GameDev
              </a>
            </div>
          </div>
          {/* <div className="flex flex-col md:ml-20 mt-5 mb-5">
                        <div className='mb-5'>
                            <div className="font-semibold">Parteneri Diamond</div>
                        </div>
                        <div className='mb-5'>
                            <div className="font-semibold">Parteneri Gold</div>
                        </div>
                        <div className='mb-5'>
                            <div className="font-semibold">Parteneri Media</div>
                        </div>
                    </div> */}
        </div>
        <div className="mt-4 flex flex-row justify-between">
          <a
            href={'https://www.asii.ro/'}
            className="self-end"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <img src={AsiiLogo} alt={"Asii"} width={104} height={59} className="hover:opacity-60"/> */}
            <LogoAsii className="hover:opacity-60" />
          </a>
          <div className=" pointer-events-none left-0 hidden w-full justify-center self-end sm:flex ">
            <div className="text-xs font-extralight text-footer-copyright">
              Copyright © FIICode 2022
            </div>
          </div>
          <a
            href={'https://www.info.uaic.ro/'}
            className="self-end"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <img src={FiiLogo} alt={"Fii"} width={50} height={50} className="hover:opacity-60"/> */}
            <LogoFii className="hover:opacity-60" />
          </a>
        </div>
        <div className="flex flex-row justify-between">
          <div className="pointer-events-none left-0 mt-10 flex w-full justify-center self-end sm:hidden ">
            <div className="text-xs font-extralight text-footer-copyright">
              Copyright © FIICode 2022
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
