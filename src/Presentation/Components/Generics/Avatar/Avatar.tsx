'use client';
import { FC } from 'react';
import { AvatarContainer, AvatarImage } from './Avatar.styled';
import avatarPic from '@/Presentation/assets/victor.png';

interface AvatarProps {}

const Avatar: FC<AvatarProps> = ({}) => {
   return (
      <AvatarContainer
         gradient={[
            { color: 'rgb(88, 212, 221)', percentage: 0 },
            { color: 'rgb(107, 71, 227)', percentage: 32.0735 },
            { color: 'rgb(9, 188, 138)', percentage: 84.5703 }
         ]}
      >
         <AvatarImage src={avatarPic} alt="avatar" />
      </AvatarContainer>
   );
};

export default Avatar;
