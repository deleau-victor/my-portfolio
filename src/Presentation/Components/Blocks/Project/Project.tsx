'use client';
import type { Project } from '@/app/[lang]/[project]/page';
import { FC, Suspense } from 'react';
import ProjectHeader from './Header/ProjectHeader';
import {
   ListBox,
   ListItem,
   ProblemSection,
   PartTitle,
   ProjectBox,
   ProjectHozirontalBox,
   ProjectPresentationImage,
   ProjectSection,
   ProjectText,
   ProjectTextBox,
   ProjectTextTitle
} from './Project.styled';
import { Dictionary } from '@/Infrastructure/Config/Dictionnaries';
import { parseJsonToHtml } from '@/Application/Functions/Utils';
import Highlight from './Highlight/Highlight';

interface ProjectProps {
   project: Project;
   dict: Dictionary;
}

const Project: FC<ProjectProps> = ({ project, dict }) => {
   return (
      <ProjectBox>
         <ProjectHeader project={project} dict={dict} />
         <ProjectPresentationImage
            src={`/assets/${project.MediaPath}/presentation.png`}
            alt="D-Day Live"
            width={1740}
            height={980}
         />
         <ProjectSection>
            <ProjectTextBox>
               <ProjectTextTitle>{dict.Project.Overview}</ProjectTextTitle>
               <ProjectText
                  dangerouslySetInnerHTML={{
                     __html: parseJsonToHtml(project.Overview)
                  }}
               />
            </ProjectTextBox>
            <ProjectTextBox>
               <ProjectTextTitle>{dict.Project.Role}</ProjectTextTitle>
               <ProjectText
                  dangerouslySetInnerHTML={{
                     __html: parseJsonToHtml(project.RoleOverview)
                  }}
               />
               <ListBox>
                  {project.Collaborators.map((c, index) => (
                     <ListItem key={index}>
                        {c.Name} - <strong>{c.Role}</strong>
                     </ListItem>
                  ))}
               </ListBox>
            </ProjectTextBox>
            <ProjectHozirontalBox>
               <ProjectTextBox>
                  <ProjectTextTitle>{dict.Project.Technologies}</ProjectTextTitle>
                  <ListBox>
                     {project.Technologies.map((t, index) => (
                        <ListItem key={index}>
                           <ProjectText>{t}</ProjectText>
                        </ListItem>
                     ))}
                  </ListBox>
               </ProjectTextBox>
               <ProjectTextBox>
                  <ProjectTextTitle>{dict.Project.Interface}</ProjectTextTitle>
                  <ListBox>
                     {project.Interface.map((i, index) => (
                        <ListItem key={index}>
                           <ProjectText>{i}</ProjectText>
                        </ListItem>
                     ))}
                  </ListBox>
               </ProjectTextBox>
               <ProjectTextBox>
                  <ProjectTextTitle>{dict.Project.Timeline}</ProjectTextTitle>
                  <ListBox>
                     <ListItem>
                        <ProjectText>{project.Timeline}</ProjectText>
                     </ListItem>
                  </ListBox>
               </ProjectTextBox>
            </ProjectHozirontalBox>
         </ProjectSection>

         <ProblemSection>
            <PartTitle>{dict.Project.Challenge}</PartTitle>
            {project.SolvedProblems.map((p, index) => (
               <ProjectTextBox key={index}>
                  <ProjectTextTitle>{p.Title}</ProjectTextTitle>
                  <ProjectText>{p.Problem}</ProjectText>
                  <ProjectText>
                     <strong>✅ Solution : </strong>
                     {p.Solution}
                  </ProjectText>
               </ProjectTextBox>
            ))}
         </ProblemSection>

         <ProjectSection>
            <PartTitle>{dict.Project.Highlights}</PartTitle>
            {project.Highlights.map((highlight, index) => (
               <Suspense key={index} fallback={<div>Loading...</div>}>
                  <Highlight
                     highlight={highlight}
                     mediaPath={project.MediaPath}
                     isEven={index % 2 === 0}
                  />
               </Suspense>
            ))}
         </ProjectSection>
      </ProjectBox>
   );
};

export default Project;
