'use client';

import { Dictionary } from '@/Infrastructure/Config/Dictionnaries';
import Avatar from '@/Presentation/Components/Generics/Avatar/Avatar';
import GradientText from '@/Presentation/Components/Generics/GradientText/GradientText';
import PopableElement from '@/Presentation/Components/Generics/PopableElement/PopableElement';
import { FC } from 'react';
import { CatchPhrase, HeaderBox, TextZone } from './HomeHeader.styled';
import CtoZone from '../CtoZone/CtoZone';

interface HomeHeaderProps {
   dict: Dictionary;
}

const HomeHeader: FC<HomeHeaderProps> = ({ dict }) => {
   return (
      <HeaderBox>
         <PopableElement>
            <Avatar />
         </PopableElement>
         <TextZone>
            <PopableElement>
               <GradientText
                  tag="h2"
                  props={[
                     { color: 'rgb(88, 212, 221)', percentage: 0 },
                     { color: 'rgb(107, 71, 227)', percentage: 32.0735 },
                     { color: 'rgb(9, 188, 138)', percentage: 84.5703 }
                  ]}
               >
                  {dict.Home.MainTitle}
               </GradientText>
            </PopableElement>
            <PopableElement>
               <CatchPhrase>{dict.Home.CatchPhrase}</CatchPhrase>
            </PopableElement>
         </TextZone>
         <CtoZone dict={dict} />
      </HeaderBox>
   );
};

export default HomeHeader;
