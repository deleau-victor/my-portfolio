import styled from '@emotion/styled';
import Link from 'next/link';

const NavbarContainer = styled.div`
   margin: auto;
   margin-top: 2rem;
   display: flex;
   width: fit-content;
   justify-content: space-between;
   align-items: center;
   padding: 0.75rem 3rem;
   border: 1.5px solid rgb(47, 54, 63);
   border-radius: 10rem;
   gap: 6rem;
`;

const NavbarBrand = styled.p`
   font-size: 1.2rem;
   font-weight: bold;
`;

const NavbarLinksContainer = styled.div`
   display: flex;
   gap: 1.5rem;
`;

const NavbarLink = styled(Link)`
   margin: 0 0.5rem;
   cursor: pointer;
   font-weight: bold;
`;

export { NavbarContainer, NavbarBrand, NavbarLinksContainer, NavbarLink };
