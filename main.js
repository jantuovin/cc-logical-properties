import init from './css-custom-properties-i18n/css-i18n.js';
import translations from './translations.js';

const changeLanguage = init(translations);

window.handleLangChangeBtnClick = (lang = 'en') => {
  const root = document.documentElement;
  const computedStyles = window.getComputedStyle(root);
  root.style.setProperty('--direction', computedStyles.getPropertyValue(`--direction-${lang}`));
  root.style.setProperty('--writing-mode', computedStyles.getPropertyValue(`--writing-mode-${lang}`));

  root.lang = lang;
  changeLanguage(lang);
}
