import { Project } from '@/app/[lang]/[project]/page';
import { FC } from 'react';
import { HighlightContainer, VideoHighlight } from './Highlight.styled';
import { ProjectText, ProjectTextBox, ProjectTextTitle } from '../Project.styled';

interface HighlightProps {
   mediaPath: string;
   highlight: Project['Highlights'][number];
   isEven: boolean;
}

const Highlight: FC<HighlightProps> = ({ highlight, mediaPath, isEven }) => {
   return (
      <HighlightContainer isEven={isEven}>
         <VideoHighlight width="546" height="974" controls={false} preload={'auto'} autoPlay loop>
            <source src={`/assets/${mediaPath}/${highlight.Name}.webm`} type="video/webm" />
            Your browser does not support the video tag.
         </VideoHighlight>
         <ProjectTextBox>
            <ProjectTextTitle>{highlight.MediaTitle}</ProjectTextTitle>
            <ProjectText>{highlight.Caption}</ProjectText>
         </ProjectTextBox>
      </HighlightContainer>
   );
};

export default Highlight;
