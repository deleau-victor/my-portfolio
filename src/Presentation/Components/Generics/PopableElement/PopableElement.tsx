'use client';

import { FC, PropsWithChildren, useRef } from 'react';
import { useInView } from 'framer-motion';
import { PopableBox } from './PopableElement.styled';

const PopableElement: FC<PropsWithChildren> = ({ children }) => {
   const ref = useRef(null);
   const isInView = useInView(ref);

   return (
      <PopableBox isInView={isInView} ref={ref}>
         {children}
      </PopableBox>
   );
};

export default PopableElement;
