'use client';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { FC, PropsWithChildren } from 'react';

const cache = createCache({ key: 'next' });

const EmotionServerProvider: FC<PropsWithChildren> = ({ children }) => {
   return <CacheProvider value={cache}>{children}</CacheProvider>;
};

export default EmotionServerProvider;
