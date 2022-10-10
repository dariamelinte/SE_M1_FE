import type { SVGProps } from 'react';
import * as React from 'react';

const SvgBannerCoverBlur = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={1920}
    height={80}
    viewBox="0 0 1920 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M1920 1.21167H0V79.1887H1920V1.21167Z"
      fill="url(#paint0_linear_0_1)"
      stroke="url(#paint1_linear_0_1)"
      strokeWidth={0.56}
      strokeMiterlimit={10}
    />
    <path
      d="M0 72.3657L1920 71.391"
      stroke="white"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeDasharray="12 12"
    />
    <path
      d="M0 12.9082L1920 11.9335"
      stroke="white"
      strokeWidth={1.9}
      strokeMiterlimit={10}
      strokeDasharray="11.41 11.41"
    />
    <defs>
      <linearGradient
        id="paint0_linear_0_1"
        x1={0}
        y1={40.203}
        x2={1920}
        y2={40.203}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#28EDC8" />
        <stop offset={0.33} stopColor="#8A2191" />
        <stop offset={0.66} stopColor="#2401A1" />
        <stop offset={1} stopColor="#CE5F73" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_0_1"
        x1={-0.28}
        y1={40.203}
        x2={1920.28}
        y2={40.203}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B47BE1" />
        <stop offset={0.04} stopColor="#AB79E4" />
        <stop offset={0.1} stopColor="#9174ED" />
        <stop offset={0.13} stopColor="#8271F3" />
        <stop offset={0.27} stopColor="#82CBFF" />
        <stop offset={0.42} stopColor="#51B6FF" />
        <stop offset={0.62} stopColor="#782748" />
        <stop offset={0.82} stopColor="#1B1464" />
        <stop offset={0.9} stopColor="#BE6F00" />
        <stop offset={0.97} stopColor="#BE6F00" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgBannerCoverBlur;
