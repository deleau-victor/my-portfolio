import { FC, memo, PropsWithChildren } from 'react';
import TransformOnHoverElement, { IAnimatedOnHoverElementProps } from './TransformOnHoverElement';

interface IScaleAndRotateProps extends IAnimatedOnHoverElementProps {
   invert?: boolean;
}

const ScaleAndRotateElement: FC<PropsWithChildren<IScaleAndRotateProps>> = ({
   children,
   invert,
   isTrigerred
}) => {
   return (
      <TransformOnHoverElement
         baseProperties={{ transform: 'scale(1) rotate(0deg)' }}
         onHoverProperties={{
            transform: invert ? 'scale(1.1) rotate(2deg)' : 'scale(1.1) rotate(-2deg)'
         }}
         isTrigerred={isTrigerred}
      >
         {children}
      </TransformOnHoverElement>
   );
};

const ScaleAndRotate = memo(ScaleAndRotateElement);

export default ScaleAndRotate;
