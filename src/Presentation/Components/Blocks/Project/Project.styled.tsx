import styled from '@emotion/styled';
import Image from 'next/image';

const ProjectBox = styled.div`
   width: fit-content;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin: auto;
   padding: 0 100px 100px;
`;

const ProjectPresentationImage = styled(Image)`
   padding: 50px;
   max-width: 1000px;
   object-fit: cover;
   border-radius: 80px;
   overflow: hidden;
`;

const ProjectSection = styled.div`
   display: flex;
   flex-direction: column;
   place-content: flex-start;
   align-items: flex-start;
   padding: 50px;
   gap: 3.75rem;
   width: 1000px;
   margin: auto;
`;

const ProjectTextBox = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1.25rem;
   max-width: 900px;
`;

const ProjectTextTitle = styled.h3`
   font-size: 1.55rem;
   font-weight: 600;
   margin: 0;
   line-height: 1.4;
`;

const ProjectText = styled.p`
   font-size: 1.1rem;
   font-weight: 400;
   line-height: 1.6;
   margin: 0;
`;

const ListBox = styled.ul`
   list-style: none;
   padding: 0;
   margin: 0;
`;

const ListItem = styled.li`
   font-size: 1.1rem;
   font-weight: 400;
   line-height: 1.6;
   display: table-row;
   ::before {
      display: table-cell;
      width: 2.25ch;
      box-sizing: border-box;
      padding-inline-end: 0.75ch;
      content: '•';
   }
   & > strong {
      font-weight: 500;
   }
`;

const ProjectHozirontalBox = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: flex-start;
   gap: 1.25rem;
   width: 100%;
`;

const ProblemSection = styled.div`
   display: flex;
   flex-direction: column;
   padding: 50px;
   gap: 3.75rem;
   max-width: 1000px;
   background-color: rgba(178, 191, 187, 0.08);
   border-radius: 32px;
`;

const PartTitle = styled.h2`
   font-size: 2rem;
   font-weight: 600;
   margin: 0;
   line-height: 1.2;
`;

export {
   ProjectBox,
   ProjectPresentationImage,
   ProjectSection,
   ProjectText,
   ProjectTextTitle,
   ProjectTextBox,
   ListBox,
   ListItem,
   ProjectHozirontalBox,
   ProblemSection,
   PartTitle
};
