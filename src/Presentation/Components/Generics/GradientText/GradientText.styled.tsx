import { Gradient } from '@/Shared/Graphics/Gradient';
import { IDynamicElement } from '@/Shared/Helpers/IDynamicElement';
import styled from '@emotion/styled';
import { createElement } from 'react';

const DynamicGradientText = styled(({ tag, children, ...props }: IDynamicElement<Gradient[]>) =>
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
