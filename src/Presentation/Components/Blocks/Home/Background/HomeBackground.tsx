'use client';
import { FC } from 'react';
import { Background } from './HomeBackground.styled';
import Image from 'next/image';

import background from '../../../../Assets/homeBackground.svg';

const HomeBackground: FC = () => {
   return (
      <Background>
         <Image
            src={background}
            alt="background"
            layout="fill"
            objectFit="cover"
            objectPosition="center top"
         />
      </Background>
   );
};

export default HomeBackground;
