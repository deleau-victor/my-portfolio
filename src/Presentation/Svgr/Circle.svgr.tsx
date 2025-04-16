import { ISvgProps } from '@/Shared/Types/ISvgProps';

const CircleIcon = (props: ISvgProps) => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" {...props}>
      <path
         fill="transparent"
         stroke="#2F363F"
         strokeWidth={2}
         d="M13 1c6.627 0 12 5.373 12 12s-5.373 12-12 12S1 19.627 1 13 6.373 1 13 1Z"
      />
   </svg>
);
export default CircleIcon;
