'use client';

import { CSSProperties, FC, memo, PropsWithChildren, useEffect } from 'react';
import { useAnimate } from 'framer-motion';
import { isNullOrUndefined } from '@/Application/Functions/Utils';

export interface IAnimatedOnHoverElementProps {
   isTrigerred?: boolean;
}

interface TransformOnHoverElementProps extends IAnimatedOnHoverElementProps {
   baseProperties: CSSProperties;
   onHoverProperties: CSSProperties;
   customHoverTrigger?: boolean;
}

const TransformOnHoverElementComponent: FC<PropsWithChildren<TransformOnHoverElementProps>> = ({
   children,
   baseProperties,
   onHoverProperties,
   isTrigerred
}) => {
   const [scope, animate] = useAnimate();

   const animateOnHover = () => {
      animate(scope.current, onHoverProperties);
   };

   const animateOnLeave = () => {
      animate(scope.current, baseProperties);
   };

   if (!isNullOrUndefined(isTrigerred)) {
      useEffect(() => {
         if (isTrigerred) {
            animate(scope.current, onHoverProperties);
         } else {
            animate(scope.current, baseProperties);
         }
      }, [isTrigerred]);

      return <div ref={scope}>{children}</div>;
   }

   return (
      <div ref={scope} onMouseEnter={animateOnHover} onMouseLeave={animateOnLeave}>
         {children}
      </div>
   );
};

// memoize the component to avoid re-rendering
const TransformOnHoverElement = memo(TransformOnHoverElementComponent);
export default TransformOnHoverElement;
