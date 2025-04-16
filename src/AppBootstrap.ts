import 'server-only';
import { InternationalizationConfig } from './Infrastructure/Internationalization/InternationalizationConfig';

type AppSettings = Awaited<ReturnType<typeof AppBootstrap.initialize>>;

export class AppBootstrap {
   private static _settings: AppSettings;
   private static _initialized = false;

   public static async initialize() {
      if (this._initialized) return;
      const settingsModule = await import('./appSettings.json');
      const settings = settingsModule.default;
      console.log('settings.Internationalization:', settings.Internationalization);
      this._settings = settings;

      // Instanciation
      InternationalizationConfig.getInstance(settings.Internationalization);

      this._initialized = true;

      return settings;
   }

   public static get settings() {
      if (!this._settings) {
         throw new Error('AppBootstrap must be initialized before accessing settings.');
      }
      return this._settings;
   }
}
