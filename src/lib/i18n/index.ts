import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

const defaultLocale = 'no';
const supportedLocales = ['no', 'en'];

// Register the initial locale
register('no', () => import('../../locales/no.json'));
register('en', () => import('../../locales/en.json'));

const browserLocale =
	browser && supportedLocales.includes(navigator.language) ? navigator.language : defaultLocale;

// Initialize the i18n library in your app
init({
	fallbackLocale: defaultLocale,
	initialLocale: browserLocale
});
