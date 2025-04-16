import { ISvgProps } from '@/Shared/Helpers/ISvgProps';

const ArrowIcon = (props: ISvgProps) => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 10" {...props}>
      <path
         fill="#2F363F"
         d="M43.643.293a.959.959 0 0 0 0 1.414L46.082 4H1.837C1.25 4 .773 4.448.773 5s.477 1 1.064 1h44.245l-2.439 2.293a.959.959 0 0 0 0 1.414 1.112 1.112 0 0 0 1.505 0l4.255-4a.957.957 0 0 0 0-1.414l-4.255-4a1.112 1.112 0 0 0-1.505 0Z"
      />
   </svg>
);
export default ArrowIcon;
