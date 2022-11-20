import type { SVGProps } from 'react';
import * as React from 'react';

const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={49}
    height={49}
    viewBox="0 0 49 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24.2999 6.24634C14.2519 6.24634 6.07495 14.4233 6.07495 24.4713C6.07495 34.5194 14.2519 42.6963 24.2999 42.6963C34.348 42.6963 42.5249 34.5194 42.5249 24.4713C42.5249 14.4233 34.348 6.24634 24.2999 6.24634ZM24.2999 9.28384C32.7062 9.28384 39.4874 16.0651 39.4874 24.4713C39.4911 28.1072 38.1874 31.6231 35.8141 34.3775C33.4408 37.132 30.1563 38.9412 26.5599 39.4751V28.9H30.8852L31.5641 24.5063H26.5599V22.1066C26.5599 20.2841 27.1598 18.6636 28.8653 18.6636H31.6067V14.8303C31.1252 14.765 30.1061 14.6238 28.1804 14.6238C24.1587 14.6238 21.8016 16.747 21.8016 21.5857V24.5063H17.6676V28.9H21.8016V39.4371C18.2549 38.8534 15.0314 37.0276 12.7069 34.286C10.3823 31.5445 9.10833 28.0657 9.11245 24.4713C9.11245 16.0651 15.8937 9.28384 24.2999 9.28384Z"
      fill="white"
    />
  </svg>
);
export default SvgFacebook;