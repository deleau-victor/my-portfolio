import styled from '@emotion/styled';
import Link from 'next/link';

const CtoLinkElement = styled(Link)`
   :hover {
      cursor: pointer;
   }
   & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      padding: 1rem 2rem;
      font-size: 1.25rem;
      font-weight: 400;
   }
`;

export { CtoLinkElement };
