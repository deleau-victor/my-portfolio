import styled from '@emotion/styled';

const VideoHighlight = styled.video`
   width: 360px;
   min-width: 360px;
   height: 640px;
   object-fit: cover;
   border-radius: 24px;
   overflow: hidden;
`;

interface HighlightContainerProps {
   isEven: boolean;
}

const HighlightContainer = styled.div<HighlightContainerProps>`
   display: flex;
   width: 100%;
   flex-direction: ${({ isEven }) => (isEven ? 'row' : 'row-reverse')};
   justify-content: space-between;
   align-items: center;
   gap: 50px;
   margin: 50px 0;
`;

export { VideoHighlight, HighlightContainer };
