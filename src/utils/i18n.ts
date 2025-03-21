import en from '../translations/en.json';
import es from '../translations/es.json';

const translations: Record<string, Record<string, any>> = { en, es };

export function getTranslation(lang: string, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];

  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) {
      return `translation-not-found[${key}]`;
    }
  }

  if (typeof value !== 'string') {
    return `translation-not-found[${key}]`;
  }

  return value;
}
