import styled from '@emotion/styled';

interface IPopableBoxProps {
   isInView: boolean;
}

const PopableBox = styled.div<IPopableBoxProps>`
   display: flex;
   width: fit-content;
   opacity: ${({ isInView }) => (isInView ? 1 : 0)};
   transform: ${({ isInView }) => (isInView ? 'scale(1)' : 'scale(0)')};
   transition: opacity 0.5s, transform 0.5s;
`;

export { PopableBox };
