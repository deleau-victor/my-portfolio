'use client';
import { FC } from 'react';
import { Background, BackgroundImage } from './HomeBackground.styled';

import background from '../../../../Assets/homeBackground.svg';

const HomeBackground: FC = () => {
   return (
      <Background>
         <BackgroundImage src={background} alt="background" priority />
      </Background>
   );
};

export default HomeBackground;
