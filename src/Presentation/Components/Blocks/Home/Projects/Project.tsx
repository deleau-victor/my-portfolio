'use client';
import Image from 'next/image';
import { FC, useState } from 'react';

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
import { Dictionary } from '@/Infrastructure/Config/Dictionnaries';

interface ProjectProps {
   project: Dictionary['Projects'][0];
}

const Project: FC<ProjectProps> = ({ project }) => {
   const [isHovered, setIsHovered] = useState(false);

   return (
      <ProjectBox>
         <ProjectLinkBox
            href={project.Name}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
         >
            <ProjectImageBox>
               <ScaleAndRotate isTrigerred={isHovered}>
                  <BlurredLight size={120} color="#6b47e3" />
                  <Image
                     src={`/assets/${project.MediaPath}/home-mockup.png`}
                     alt="D-Day Live"
                     width={288}
                     height={469}
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
