import styled from '@emotion/styled';
import Image from 'next/image';

const Background = styled.div`
   position: absolute;
   inset: 42rem 0 0 0;
   z-index: -1;
`;

const BackgroundImage = styled(Image)`
   position: absolute;
   inset: 0;
   height: 100%;
   width: 100%;
   object-position: center top;
   object-fit: cover;
`;

export { Background, BackgroundImage };
