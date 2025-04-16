import { Gradient } from '@/Shared/Graphics/Gradient';
import styled from '@emotion/styled';
import Image from 'next/image';

type AvatarContainerProps = {
   gradient: Gradient[];
};

const AvatarContainer = styled.div<AvatarContainerProps>`
   display: flex;
   align-items: center;
   justify-items: center;
   padding: 0.2rem;
   width: fit-content;
   margin: auto;
   border-radius: 50%;
   background-image: linear-gradient(
      2422deg,
      ${(props) => props.gradient.map((g) => `${g.color} ${g.percentage}%`).join(', ')}
   );
`;

const AvatarImage = styled(Image)`
   width: 4rem;
   height: 4rem;
   border-radius: 50%;
   width: 154px;
   height: 154px;
`;

export { AvatarContainer, AvatarImage };
