import type { NextRequest } from 'next/server';
import { AppBootstrap } from './AppBootstrap';
import { InternationalizationRoutingService } from './Application/Services/InternationalizationRoutingService';

export async function middleware(request: NextRequest) {
   await AppBootstrap.initialize();

   const _routingService = new InternationalizationRoutingService();
   return _routingService.HandleRequest(request);
}

export const config = {
   matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets).*)']
};
