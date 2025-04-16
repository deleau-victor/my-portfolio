import { Singleton } from '@/Shared/System/Singleton';

export interface IInternationalizationConfig {
   DefaultLocale: string;
   SupportedLocales: readonly string[];
}

export class InternationalizationConfig extends Singleton<InternationalizationConfig> {
   private defaultLocale!: string;
   private locales!: readonly string[];

   constructor(config: IInternationalizationConfig) {
      super();
      if (!config.DefaultLocale || !config.SupportedLocales?.length) {
         throw new Error('Invalid or missing internationalization configuration');
      }

      this.defaultLocale = config.DefaultLocale;
      this.locales = config.SupportedLocales;
   }

   getDefaultLocale(): string {
      return this.defaultLocale;
   }

   getLocales(): readonly string[] {
      return this.locales;
   }

   isLocaleSupported(locale: string): boolean {
      return this.locales.includes(locale);
   }
}
