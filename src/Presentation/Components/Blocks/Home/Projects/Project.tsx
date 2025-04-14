'use client';
import Image from 'next/image';
import { FC, useState } from 'react';

import { Dictionary } from '@/Infrastructure/Config/Dictionnaries';
import ScaleAndRotate from '@/Presentation/Components/Generics/TransformOnHoverElement/ScaleAndRotate';
import ArrowIcon from '@/Presentation/Svgr/Arrow.svgr';
import CircleIcon from '@/Presentation/Svgr/Circle.svgr';
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

type MockupType = 'Mobile' | 'Desktop';

interface ProjectProps {
   project: Dictionary['Projects'][0];
   reverse?: boolean;
}

const Project: FC<ProjectProps> = ({ project, reverse }) => {
   const [isHovered, setIsHovered] = useState(false);

   const getMockupSize = (type: MockupType): { width: number; height: number } => {
      switch (type) {
         case 'Mobile':
            return { width: 288, height: 469 };
         case 'Desktop':
            return { width: 496, height: 423 };
         default:
            return { width: 0, height: 0 };
      }
   };

   const getTransform = (type: MockupType): { translateX: number; translateY: number } => {
      switch (type) {
         case 'Mobile':
            return { translateX: 65, translateY: 200 };
         case 'Desktop':
            return { translateX: reverse ? 175 : 120, translateY: 80 };
         default:
            return { translateX: 0, translateY: 0 };
      }
   };

   const randomColorGenerator = (type: MockupType): string => {
      const colors = {
         Mobile: ['#6b47e3', '#09BC89', '#FF891E', '#FF79CE'],
         Desktop: ['#6b47e3', '#09BC89', '#FF891E', '#FF79CE']
      };
      const randomIndex = Math.floor(Math.random() * colors[type].length);
      return colors[type][randomIndex];
   };

   return (
      <ProjectBox>
         <ProjectLinkBox
            href={project.Name}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            reverse={reverse}
         >
            <ProjectImageBox>
               <ScaleAndRotate isTrigerred={isHovered}>
                  <BlurredLight
                     size={120}
                     color={project.Color}
                     transform={getTransform(project.Type)}
                  />
                  <Image
                     src={`/assets/${project.MediaPath}/home-mockup.png`}
                     alt="D-Day Live"
                     width={getMockupSize(project.Type).width}
                     height={getMockupSize(project.Type).height}
                  />
               </ScaleAndRotate>
            </ProjectImageBox>
            <ProjectTextBox>
               <ProjectTitle color="#6b47e3">{project.Name}</ProjectTitle>
               <ProjectDescription>{project.Intro}</ProjectDescription>
               <ProjectTag>{project.Tags}</ProjectTag>
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
