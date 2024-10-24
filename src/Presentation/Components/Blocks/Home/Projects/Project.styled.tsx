import TransformOnHoverElement from '@/Presentation/Components/Generics/TransformOnHoverElement/TransformOnHoverElement';
import styled from '@emotion/styled';
import Link from 'next/link';

export interface IColoredElementProps {
   color: string;
}

interface IBlurredLightProps extends IColoredElementProps {
   size: number;
}

const ProjectBox = styled.div`
   width: fit-content;
   height: 100%;
   display: flex;
   justify-content: center;
   margin: auto;
   padding-bottom: 20rem;
`;

const ProjectLinkBox = styled(Link)`
   position: relative;
   width: fit-content;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: flex-start;
   cursor: pointer;
`;

const ProjectTextBox = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 1rem;
   width: calc(100vw / 5 * 1.2);
   padding-top: 2rem;
   padding-left: 6rem;
`;

const ProjectImageBox = styled.div`
   position: relative;
   width: fit-content;
   height: fit-content;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const ProjectTitle = styled.h3<IColoredElementProps>`
   font-size: 1.125rem;
   font-weight: 600;
   margin: 0;
   color: ${({ color }) => color};
`;

const ProjectDescription = styled.p`
   font-size: 1.75rem;
   font-weight: 800;
   line-height: 1.2;
   margin: 0;
`;

const ProjectTag = styled.p`
   font-size: 1.2rem;
   font-weight: 300;
   line-height: 1.6;
   margin: 0;
`;

const ArroxBox = styled.div`
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   width: fit-content;
`;

const StyledArrow = styled(TransformOnHoverElement)`
   position: absolute;
   width: 50px;
   height: 10px;
`;

const BlurredLight = styled.div<IBlurredLightProps>`
   position: absolute;
   width: ${({ size }) => size}px;
   height: ${({ size }) => size}px;
   border-radius: 50%;
   background-color: ${({ color }) => color};
   box-shadow: 0px 0px ${({ size }) => size}px ${({ size }) => size}px ${({ color }) => color};
   transform: translateY(200%) translateX(65%);
   z-index: -1;
`;

export {
   ProjectBox,
   ProjectTextBox,
   ProjectImageBox,
   ProjectTitle,
   ProjectDescription,
   ProjectTag,
   BlurredLight,
   ArroxBox,
   StyledArrow,
   ProjectLinkBox
};
