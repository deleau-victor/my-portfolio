import { IDynamicElement } from '@/Shared/Types/IDynamicElement';
import { IGradient } from '@/Shared/Types/IGradient';
import styled from '@emotion/styled';
import { createElement } from 'react';

const DynamicGradientText = styled(({ tag, children, ...props }: IDynamicElement<IGradient[]>) =>
   createElement(tag, props, children)
)`
   background-image: linear-gradient(
      2422deg,
      ${({ props }) => props.map((g) => `${g.color} ${g.percentage}%`).join(', ')}
   );
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   font-weight: bold;
   width: fit-content;
`;

export { DynamicGradientText };
