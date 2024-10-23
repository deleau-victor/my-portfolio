'use client';
import { Gradient } from '@/Domain/Contracts/Gradient';
import { IDynamicElement } from '@/Domain/Contracts/IDynamicElement';
import { FC } from 'react';
import { DynamicGradientText } from './GradientText.styled';

interface GradientTextProps extends IDynamicElement<Gradient[]> {}

const GradientText: FC<GradientTextProps> = ({ tag, children, props }) => {
   return (
      <DynamicGradientText tag={tag} props={props}>
         {children}
      </DynamicGradientText>
   );
};

export default GradientText;
