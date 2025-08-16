'use client';

import type { SVGProps } from 'react';
import { useLogo } from '@/hooks/use-logo';

const DefaultLogo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
    >
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a64,64,0,0,1-64,64,32,32,0,0,0,0-64,95.31,95.31,0,0,0,33.32-6.68A63.9,63.9,0,0,1,192,128Z" />
    </svg>
  );
};

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  const { logo, isMounted } = useLogo();

  if (!isMounted) {
    return <DefaultLogo {...props} />;
  }
  
  if (logo) {
    // This is a simple way to render the SVG string.
    // It's not perfectly safe if the SVG contains scripts, but for user-provided logos it's a common approach.
    // We also pass through props like className.
    return (
      <div
        className={props.className}
        style={{
          width: props.width,
          height: props.height,
          color: 'currentColor'
        }}
        dangerouslySetInnerHTML={{ __html: logo }}
      />
    );
  }

  return <DefaultLogo {...props} />;
}
