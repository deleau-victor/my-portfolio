import styled from '@emotion/styled';
import { IColoredElementProps } from '../../Home/Projects/Project.styled';
import Link from 'next/link';

const ProjectHeaderBox = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   max-width: 1000px;
   padding: 140px 50px 32px;
   gap: 1rem;
`;

const ProjectTitle = styled.h1<IColoredElementProps>`
   font-size: 1.25rem;
   font-weight: 600;
   margin: 0;
   line-height: 1.2;
   color: ${({ color }) => color};
`;

const ProjectIntro = styled.h2`
   font-size: 3.25rem;
   font-weight: 600;
   margin: 0;
   line-height: 1.2;
`;

const ProjectLink = styled(Link)`
   font-size: 1.2rem;
   font-weight: 400;
   line-height: 1.6;
   margin: 0;
   text-decoration: underline;
`;

export { ProjectTitle, ProjectIntro, ProjectHeaderBox, ProjectLink };
