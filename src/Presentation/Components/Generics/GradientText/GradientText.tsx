'use client';
import { Gradient } from '@/Shared/Graphics/Gradient';
import { IDynamicElement } from '@/Shared/Helpers/IDynamicElement';
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
