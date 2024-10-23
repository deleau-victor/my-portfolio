'use client';

import { FC, useEffect, useState } from 'react';
import { NavbarBrand, NavbarContainer, NavbarLink, NavbarLinksContainer } from './Navbar.styled';

const Navbar: FC = ({}) => {
   return (
      <NavbarContainer>
         <NavbarBrand>Victor Deleau</NavbarBrand>
         <NavbarLinksContainer>
            <NavbarLink href={''}>About</NavbarLink>
            <NavbarLink href={''}>Home</NavbarLink>
            <NavbarLink href={''}>Projects</NavbarLink>
            <NavbarLink href={''}>Contact</NavbarLink>
         </NavbarLinksContainer>
      </NavbarContainer>
   );
};

export default Navbar;
