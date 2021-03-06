// @flow
const NO_TRANSLATION_FILES = 'no_translation_files';
const NOT_YET_SET = 'You forgot to set App language';

let appLanguage = '';
let appTranslations = {};

export const setTranslations = (translations: {[locale: string]: Object}) => {
	appTranslations = translations;
	appLanguage = Object.keys(translations)[0];
};

export const getTranslatedText = (translationKey: string, options?: Object) => {
	const actualTranslations = appTranslations[appLanguage];
	if (!actualTranslations) return NO_TRANSLATION_FILES;
	if (!actualTranslations[translationKey]) return `${appLanguage}_${translationKey}`;
	if (options) {
		let translation = actualTranslations[translationKey];
		Object.keys(options).map((key) => {
			// $FlowFixMe
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

export const getAppLanguage = () => (appLanguage || NOT_YET_SET);
