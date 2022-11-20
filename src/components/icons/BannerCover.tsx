import type { SVGProps } from 'react';
import * as React from 'react';

const SvgBannerCover = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={1920}
    viewBox="0 0 1920 371"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <g id="Banner" filter="url(#filter0_d_123_2)">
      <rect
        width={1920}
        height={363}
        fill="url(#pattern5)"
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_123_2"
        x={-4}
        y={0}
        width={1928}
        height={371}
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
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_123_2"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_123_2"
          result="shape"
        />
      </filter>
      <pattern
        id="pattern5"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#image0_123_2"
          transform="translate(0 -0.110193) scale(0.000260417 0.00137741)"
        />
      </pattern>
      <image
        id="image0_123_2"
        data-name="Asset 1logo alb(edit).png"
        width={3840}
        height={886}
      />
    </defs>
  </svg>
);
export default SvgBannerCover;