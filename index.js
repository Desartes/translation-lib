// @flow
const NO_TRANSLATION_FILES = 'no_translation_files';

let appLanguage = 'en';
let appTranslations = {};

export const setTranslations = (translations: {[locale: string]: Object}) => {
	appTranslations = translations;
};

export const getTranslatedText = (key: string) => {
	const actualTranslations = appTranslations[appLanguage];
	if (!actualTranslations) return NO_TRANSLATION_FILES;
	return actualTranslations[key] || `${appLanguage}_${key}`;
};

export const setAppLanguage = (language: string): Promise<any> => {
	if (language.toString() in appTranslations) {
		appLanguage = language;
		return Promise.resolve();
	}
	return Promise.reject();
};
