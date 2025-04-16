import { InternationalizationContext } from '@/Infrastructure/Internationalization/InternationalizationContext';
import { NextRequest, NextResponse } from 'next/server';

export class InternationalizationRoutingService {
   private readonly _context: InternationalizationContext;

   constructor() {
      this._context = InternationalizationContext.getInstance();
   }

   public HandleRequest(request: NextRequest): NextResponse | undefined {
      const pathname = request.nextUrl.pathname;
      const cookieLocale = this.GetCookieLocale(request);
      const pathnameLocale = pathname.split('/')[1];

      const pathnameIsMissingLocale = this._context
         .getLocales()
         .every((locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);

      // Update cookie if locale differs
      if (cookieLocale !== pathnameLocale && !pathnameIsMissingLocale) {
         return NextResponse.next({
            headers: {
               'Set-Cookie': `NEXT_LOCALE=${pathnameLocale}; Path=/; HttpOnly; SameSite=Lax; Max-Age=31536000`
            }
         });
      }

      // Redirect to proper locale if missing
      if (pathnameIsMissingLocale) {
         const fallback =
            cookieLocale ||
            this._context.getCurrentLocale(request) ||
            this._context.getDefaultLocale();
         return NextResponse.redirect(new URL(`/${fallback}${pathname}`, request.url), {
            headers: {
               'Set-Cookie': `NEXT_LOCALE=${fallback}; Path=/; HttpOnly; SameSite=Lax; Max-Age=31536000`
            }
         });
      }

      return undefined;
   }

   private GetCookieLocale(request: NextRequest): string | undefined {
      const cookie = request.headers.get('cookie');
      return cookie
         ?.split(';')
         .find((c) => c.includes('NEXT_LOCALE'))
         ?.split('=')[1]
         ?.trim();
   }
}
