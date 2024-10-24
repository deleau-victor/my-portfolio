'use client';
import { FC } from 'react';
import { ProjectHeaderBox, ProjectIntro, ProjectLink, ProjectTitle } from './ProjectHeader.styled';
import { Project } from '@/app/[lang]/[project]/page';
import { Dictionary } from '@/Infrastructure/Config/Dictionnaries';

interface ProjectHeaderProps {
   project: Project;
   dict: Dictionary;
}

const ProjectHeader: FC<ProjectHeaderProps> = ({ project, dict }) => {
   return (
      <ProjectHeaderBox>
         <ProjectTitle color="#6b47e3">{project.Name}</ProjectTitle>
         <ProjectIntro>{project.Intro}</ProjectIntro>
         <ProjectLink href={project.ProjectLink} target="_blank">
            {dict.Project.Discover}
         </ProjectLink>
      </ProjectHeaderBox>
   );
};

export default ProjectHeader;
