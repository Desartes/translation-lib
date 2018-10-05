# Simple but clever translation library
Simple to use Javascript library for translations (Inspirated by i18n)

## Installation

```
npm install translation-lib
```
or
```
yarn add translation-lib
```

## Usage
``` javascript
import { setTranslations, getTranslatedText, setAppLanguage } from 'translation-lib';

const translations = {
    en: {
        hello: 'Hello',
        hi_name: 'Hi {{name}}',
    },
    it: {
        hello: 'Ciao',
        hi_name: 'Ciao {{name}}',
    },
};
setTranslations(translations);

// Default translation is first translation you pasted to setTranslations function
console.log(getTranslatedText('hello')); // Hello
console.log(getTranslatedText('hi_name', { name: 'Peter' })); // Hello Peter

setAppLanguage('it').then(() => {
    // you can do some re-render if changing language in real-time
    console.log(getTranslatedText('hello')); // Ciao
    console.log(getTranslatedText('hi_name', { name: 'Peter' })); // Ciao Peter
}).catch(() => {
    // you choose key that is not available in your translations object
});
```
## Contribution
Feel free to submit a PR, but please, keep it simple :)
### Thank you
