'use client';
import Image from 'next/image';
import { FC, useState } from 'react';

import appImage from '../../../../Assets/dday-live.png';
import {
   ArroxBox,
   BlurredLight,
   ProjectBox,
   ProjectDescription,
   ProjectImageBox,
   ProjectLinkBox,
   ProjectTag,
   ProjectTextBox,
   ProjectTitle,
   StyledArrow
} from './Project.styled';
import ScaleAndRotate from '@/Presentation/Components/Generics/TransformOnHoverElement/ScaleAndRotate';
import CircleIcon from '@/Presentation/Svgr/Circle.svgr';
import ArrowIcon from '@/Presentation/Svgr/Arrow.svgr';

interface ProjectProps {}

const Project: FC<ProjectProps> = ({}) => {
   const [isHovered, setIsHovered] = useState(false);

   return (
      <ProjectBox>
         <ProjectLinkBox
            href={''}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
         >
            <ProjectImageBox>
               <ScaleAndRotate isTrigerred={isHovered}>
                  <BlurredLight size={120} color="#6b47e3" />
                  <Image src={appImage} alt="D-Day Live" width={288} />
               </ScaleAndRotate>
            </ProjectImageBox>
            <ProjectTextBox>
               <ProjectTitle color="#6b47e3">D-Day Live</ProjectTitle>
               <ProjectDescription>
                  Vous connecter en temps réel aux événements et sites historiques du débarquement
                  en Normandie. Explorez, suivez, et vivez l'histoire.
               </ProjectDescription>
               <ProjectTag>Tourisme • B2C • Application Mobile iOS & Android</ProjectTag>
               <ArroxBox>
                  <CircleIcon width={26} height={26} />
                  <StyledArrow
                     baseProperties={{ transform: 'translateX(-30%)' }}
                     onHoverProperties={{ transform: 'translateX(-115%)' }}
                     isTrigerred={isHovered}
                  >
                     <ArrowIcon width={50} height={10} />
                  </StyledArrow>
               </ArroxBox>
            </ProjectTextBox>
         </ProjectLinkBox>
      </ProjectBox>
   );
};

export default Project;

// #6b47e3
// #09BC89
// #FF891E
// #FF79CE
