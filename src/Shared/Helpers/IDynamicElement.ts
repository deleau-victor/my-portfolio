import React from 'react';

export interface IDynamicElement<T> {
   tag: string;
   children: React.ReactNode;
   props: T;
}
