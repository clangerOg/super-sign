import 'server-only';
import type { Locale } from '../../i18n-config';

import de from '../dictionaries/de';
import en from '../dictionaries/en';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en,
  de,
};

export const getDictionary = async (locale: Locale) => dictionaries[locale];
