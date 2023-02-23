import i18next from 'i18next';
import { LANGUAGE } from '../constants/language';

export const changeAppLanguage = (language) => {
  if (language === LANGUAGE.ENGLISH) {
    i18next.changeLanguage(LANGUAGE.ENGLISH);
  } else if (language === LANGUAGE.URDU) {
    i18next.changeLanguage(LANGUAGE.URDU);
  }
};
