import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

// Register the initial locale
register('no', () => import('.(locales/no.json'));
register('en', () => import('./locales/en.json'));

// Initialize the i18n library in your app
init({
	fallbackLocale: 'no',
	initialLocale: getLocaleFromNavigator()
});
