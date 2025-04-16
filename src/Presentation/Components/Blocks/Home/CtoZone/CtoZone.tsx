'use client';

import { Dictionary } from '@/Infrastructure/i18n/Dictionary';
import GithubIcon from '@/Presentation/Svgr/Github.svgr';
import LinkedinIcon from '@/Presentation/Svgr/Linkedin.svgr';
import PhoneIcon from '@/Presentation/Svgr/Phone.svgr';
import SheetIcon from '@/Presentation/Svgr/Sheet.svgr';
import { FC } from 'react';
import CtoLink from './CtoLink';
import { CtoZoneBox } from './CtoZone.styled';

interface CtoZoneProps {
   dict: Dictionary;
}

const CtoZone: FC<CtoZoneProps> = ({ dict }) => {
   return (
      <CtoZoneBox>
         <CtoLink invert={true} link={'/assets/resume.pdf'} Icon={SheetIcon}>
            {dict.Home.CTO.Resume}
         </CtoLink>
         <CtoLink invert link={'https://www.linkedin.com/in/victor-deleau/'} Icon={LinkedinIcon}>
            {dict.Home.CTO.Linkedin}
         </CtoLink>
         <CtoLink invert={true} link={'https://github.com/deleau-victor'} Icon={GithubIcon}>
            {dict.Home.CTO.Github}
         </CtoLink>
         <CtoLink invert link={''} Icon={PhoneIcon}>
            {dict.Home.CTO.Contact}
         </CtoLink>
      </CtoZoneBox>
   );
};

export default CtoZone;
