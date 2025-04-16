'use client';
import { IDynamicElement } from '@/Shared/Types/IDynamicElement';
import { IGradient } from '@/Shared/Types/IGradient';
import { FC } from 'react';
import { DynamicGradientText } from './GradientText.styled';

interface GradientTextProps extends IDynamicElement<IGradient[]> {}

const GradientText: FC<GradientTextProps> = ({ tag, children, props }) => {
   return (
      <DynamicGradientText tag={tag} props={props}>
         {children}
      </DynamicGradientText>
   );
};

export default GradientText;
