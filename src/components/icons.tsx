import type { SVGProps } from 'react';

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
    >
      <path d="M232.58,80.32a104.34,104.34,0,0,0-23-28.77,103.95,103.95,0,0,0-156,128.32,104.34,104.34,0,0,0,23,28.77,103.95,103.95,0,0,0,156-128.32ZM128,216a88,88,0,0,1-85.14-57.1,8,8,0,0,1,15.7-4.19,72,72,0,1,0-1.8-88.94,8,8,0,0,1-11.12-11.49A88,88,0,1,1,128,216Z" />
    </svg>
  );
}

export function Favicon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 256 256"
      fill="currentColor"
    >
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM116.34,162.89a8,8,0,0,1-15.7,4.19A88,88,0,0,1,40,128a87.47,87.47,0,0,1,24.86-61.13,8,8,0,0,1,11.12,11.49,71.45,71.45,0,0,0-18.1,49.64,72,72,0,0,0,58.46,70.69Z"></path>
    </svg>
  );
}
