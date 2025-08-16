import type { SVGProps } from 'react';

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 185 258"
      fill="currentColor"
    >
      <path d="M92.5 0L0 51.5V154.5L92.5 206L185 154.5V51.5L92.5 0ZM46.5 142.5V103H68.5V122.5H116.5V65.5H68.5V85H46.5V45.5H138.5V103H116.5V85H94.5V142.5H46.5Z M138.5 115.5V154.5L92.5 180.5L46.5 154.5V115.5H94.5V135H116.5V115.5H138.5Z M92.5 258L0 206.5V167H46.5V180.5L92.5 206.5L138.5 180.5V167H185V206.5L92.5 258Z"/>
    </svg>
  );
}
