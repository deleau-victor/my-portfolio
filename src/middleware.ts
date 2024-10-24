import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { i18n } from '@/Infrastructure/Config/i18n-config';

import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request: NextRequest): string | undefined {
   // Negotiator expects plain object so we need to transform headers
   const negotiatorHeaders: Record<string, string> = {};
   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

   // @ts-ignore locales are readonly
   const locales: string[] = i18n.locales;

   // Use negotiator and intl-localematcher to get best locale
   let languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);

   const locale = matchLocale(languages, locales, i18n.defaultLocale);

   return locale;
}

export function middleware(request: NextRequest) {
   const pathname = request.nextUrl.pathname;

   // Check if there is any supported locale in the pathname
   const pathnameIsMissingLocale = i18n.locales.every(
      (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
   );

   const negotiatorHeaders: Record<string, string> = {};
   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

   const requestedLocale =
      negotiatorHeaders['cookie'].includes('NEXT_LOCALE') &&
      (
         negotiatorHeaders['cookie'].split(';').find((c) => c.includes('NEXT_LOCALE')) as string
      ).split('=')[1];

   if (requestedLocale !== pathname.split('/')[1] && !pathnameIsMissingLocale) {
      return NextResponse.next({
         headers: {
            'Set-Cookie': `NEXT_LOCALE=${
               pathname.split('/')[1]
            }; Path=/; HttpOnly; SameSite=Lax; Max-Age=31536000`
         }
      });
   }

   // Redirect if there is no locale
   if (pathnameIsMissingLocale) {
      const locale = getLocale(request);

      if (!requestedLocale) {
         // Add cookie to the response to remember the detected locale
         return NextResponse.redirect(
            new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url),
            {
               headers: {
                  'Set-Cookie': `NEXT_LOCALE=${locale}; Path=/; HttpOnly; SameSite=Lax; Max-Age=31536000`
               }
            }
         );
      } else {
         return NextResponse.redirect(
            new URL(
               `/${requestedLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
               request.url
            )
         );
      }
   }
}

export const config = {
   matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets).*)']
};
