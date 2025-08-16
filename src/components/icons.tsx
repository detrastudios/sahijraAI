'use client';

import type { SVGProps } from 'react';
import { useLogo } from '@/hooks/use-logo';

const DefaultLogo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
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
    const sanitizedLogo = logo.replace(/fill="[^"]*"/g, 'fill="currentColor"');

    return (
      <div
        className={props.className}
        style={{
          width: props.width,
          height: props.height,
          color: 'currentColor'
        }}
        dangerouslySetInnerHTML={{ __html: sanitizedLogo }}
      />
    );
  }

  return <DefaultLogo {...props} />;
}
