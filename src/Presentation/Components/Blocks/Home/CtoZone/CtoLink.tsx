'use client';
import ScaleAndRotate from '@/Presentation/Components/Generics/TransformOnHoverElement/ScaleAndRotate';
import { ISvgProps } from '@/Shared/Helpers/ISvgProps';
import { FC, PropsWithChildren } from 'react';
import { CtoLinkElement } from './CtoLink.styled';

interface CtoLinkProps {
   link: string;
   Icon: FC<ISvgProps>;
   reverse?: boolean;
}

const CtoLink: FC<PropsWithChildren<CtoLinkProps>> = ({ children, link, Icon, reverse }) => {
   return (
      <CtoLinkElement href={link} target="_blank">
         <ScaleAndRotate reverse={reverse}>
            <Icon width={32} height={32} />
            {children}
         </ScaleAndRotate>
      </CtoLinkElement>
   );
};

export default CtoLink;
