import type { SVGProps } from 'react';

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
    >
      <path d="M215.12,136.42a88.08,88.08,0,0,1-144.54,63.66L29.42,225.23a8,8,0,0,1-10.84-10.84l25.15-41.16A88,88,0,1,1,215.12,136.42ZM128,200a72,72,0,0,0,32.36-136.56,8,8,0,0,1,0-11A72,72,0,1,0,62.35,165.64a8,8,0,0,1,4.47,4.47A71.74,71.74,0,0,0,128,200Z" />
    </svg>
  );
}
