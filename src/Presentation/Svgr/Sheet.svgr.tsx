import { ISvgProps } from '@/Domain/Contracts/ISvgProps';
import * as React from 'react';

const SheetIcon = (props: ISvgProps) => (
   <svg xmlns="http://www.w3.org/2000/svg" id="Calque_1" viewBox="0 0 64 64" {...props}>
      <defs>
         <style>
            {
               '.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px}'
            }
         </style>
      </defs>
      <path
         d="M39.13 62.14h7.74M50.5 1.87h2.98M23.97 32h22.9M23.97 39.58h22.9M23.97 47.07h22.9M44.97 1.87H8.85c-.76 0-1.52.15-2.19.5a6.15 6.15 0 0 0-1.84 1.47c-.73.88-1.1 2-1.1 3.14v51.78c-.07 1.89 1.45 3.47 3.29 3.5 1.78.02 3.31-1.42 3.38-3.25V14.05c0-1.01.29-2.01.88-2.84.09-.13.2-.27.32-.41.02-.03.05-.06.07-.09a4.983 4.983 0 0 1 3.82-1.77h39.97c.87 0 1.74.2 2.48.65.34.21.7.48 1.04.83l.04.04c.86.89 1.28 2.11 1.28 3.35v49.07"
         className="cls-1"
      />
   </svg>
);
export default SheetIcon;
