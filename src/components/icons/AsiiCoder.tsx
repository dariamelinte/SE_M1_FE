import type { SVGProps } from 'react';
import * as React from 'react';

const SvgAsiiCoder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={461}
    height={581}
    viewBox="0 0 461 581"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <g filter="url(#filter0_d_144_412)">
      <rect
        x={1}
        width={453}
        height={573}
        fill="url(#pattern1)"
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_144_412"
        x={0}
        y={0}
        width={461}
        height={581}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={3} dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_144_412"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_144_412"
          result="shape"
        />
      </filter>
      <pattern
        id="pattern1"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#image0_144_412"
          transform="translate(-0.000278094) scale(0.000308814)"
        />
      </pattern>
      <image
        id="image0_144_412"
        width={3240}
        height={4096}
      />
    </defs>
  </svg>
);
export default SvgAsiiCoder;