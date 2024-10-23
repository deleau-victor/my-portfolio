import 'server-only';
import { Locale } from './i18n-config';

const dictionaries = {
   'en-US': () => import('../../Presentation/i18n/en-US.json').then((module) => module.default),
   'fr-FR': () => import('../../Presentation/i18n/fr-FR.json').then((module) => module.default)
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
