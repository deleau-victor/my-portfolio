import { Singleton } from '@/Shared/System/Singleton';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest } from 'next/server';
import { Dictionary, dictionarySchema } from '../i18n/Dictionary';
import { InternationalizationConfig } from './InternationalizationConfig';

export class InternationalizationContext extends Singleton<InternationalizationContext> {
   private readonly _config: InternationalizationConfig;
   private readonly _dictionaries = new Map<string, Promise<Dictionary>>();

   constructor() {
      super();
      this._config = InternationalizationConfig.getInstance();

      for (const locale of this._config.getLocales()) {
         this.loadDictionary(locale);
      }
   }

   private loadDictionary(locale: string): void {
      if (!this._dictionaries.has(locale)) {
         const dictPromise = import(`@/Infrastructure/i18n/${locale}.json`).then((dict) => {
            const result = dictionarySchema.safeParse(dict.default);
            if (!result.success) {
               console.error(result.error);
               throw new Error(`Invalid dictionary for locale "${locale}"`);
            }
            return result.data;
         });

         this._dictionaries.set(locale, dictPromise);
      }
   }

   public getCurrentLocale(request: NextRequest): string | undefined {
      // Negotiator expects plain object so we need to transform headers
      const negotiatorHeaders: Record<string, string> = {};
      request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

      const locales: string[] = this._config.getLocales() as string[];

      // Use negotiator and intl-localematcher to get best locale
      let languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);
      const locale = matchLocale(languages, locales, this._config.getDefaultLocale());

      return locale;
   }

   public isLocaleSupported(locale: string): boolean {
      return this._config.isLocaleSupported(locale);
   }

   public async getDictionary(locale?: string): Promise<Dictionary> {
      const resolvedLocale = locale ?? this._config.getDefaultLocale();

      if (!this.isLocaleSupported(resolvedLocale)) {
         throw new Error(`Locale ${resolvedLocale} is not supported`);
      }

      this.loadDictionary(resolvedLocale);
      return await this._dictionaries.get(resolvedLocale)!;
   }
}
