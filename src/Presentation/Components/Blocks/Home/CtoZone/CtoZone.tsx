'use client';

import { Dictionary } from '@/Infrastructure/Config/Dictionnaries';
import { FC } from 'react';
import { CtoZoneBox } from './CtoZone.styled';
import CtoLink from './CtoLink';
import SheetIcon from '@/Presentation/Svgr/Sheet.svgr';
import GithubIcon from '@/Presentation/Svgr/Github.svgr';
import LinkedinIcon from '@/Presentation/Svgr/Linkedin.svgr';
import PhoneIcon from '@/Presentation/Svgr/Phone.svgr';

interface CtoZoneProps {
   dict: Dictionary;
}

const CtoZone: FC<CtoZoneProps> = ({ dict }) => {
   return (
      <CtoZoneBox>
         <CtoLink link={'/assets/resume.pdf'} Icon={SheetIcon}>
            {dict.Home.CTO.Resume}
         </CtoLink>
         <CtoLink reverse link={'https://www.linkedin.com/in/victor-deleau/'} Icon={LinkedinIcon}>
            {dict.Home.CTO.Linkedin}
         </CtoLink>
         <CtoLink link={'https://github.com/deleau-victor'} Icon={GithubIcon}>
            {dict.Home.CTO.Github}
         </CtoLink>
         <CtoLink reverse link={''} Icon={PhoneIcon}>
            {dict.Home.CTO.Contact}
         </CtoLink>
      </CtoZoneBox>
   );
};

export default CtoZone;
