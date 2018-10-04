// @flow
const NO_TRANSLATION_FILES = 'no_translation_files';

let appLanguage = 'en';
let appTranslations = {};

export const setTranslations = (translations: {[locale: string]: Object}) => {
	appTranslations = translations;
};

export const getTranslatedText = (translationKey: string, options: Object) => {
	const actualTranslations = appTranslations[appLanguage];
	if (!actualTranslations) return NO_TRANSLATION_FILES;
	if (!actualTranslations[translationKey]) return `${appLanguage}_${translationKey}`;
	if (options) {
		let translation = actualTranslations[translationKey];
		Object.keys(options).map((key) => {
			translation = translation.replace(`{{${key}}}`, options[key]);
		});
		return translation;
	} else {
		return actualTranslations[translationKey];
	}
};

export const setAppLanguage = (language: string): Promise<any> => {
	if (language.toString() in appTranslations) {
		appLanguage = language;
		return Promise.resolve();
	}
	return Promise.reject();
};
