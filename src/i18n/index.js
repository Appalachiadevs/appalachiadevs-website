import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { mergeDeep } from "../utils/mergeDeep";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "../constants/locales";

import en_seo from "../locales/en/seo.json";
import en_nav from "../locales/en/nav.json";
import en_footer from "../locales/en/footer.json";
import en_home from "../locales/en/home.json";
import en_features from "../locales/en/features.json";
import en_portfolio from "../locales/en/portfolio.json";
import en_about from "../locales/en/about.json";
import en_services from "../locales/en/services.json";
import en_contact from "../locales/en/contact.json";
import en_blogs from "../locales/en/blogs.json";

import fr_seo from "../locales/fr/seo.json";
import fr_nav from "../locales/fr/nav.json";
import fr_footer from "../locales/fr/footer.json";
import fr_home from "../locales/fr/home.json";
import fr_features from "../locales/fr/features.json";
import fr_portfolio from "../locales/fr/portfolio.json";
import fr_about from "../locales/fr/about.json";
import fr_services from "../locales/fr/services.json";
import fr_contact from "../locales/fr/contact.json";
import fr_blogs from "../locales/fr/blogs.json";

import es_seo from "../locales/es/seo.json";
import es_nav from "../locales/es/nav.json";
import es_footer from "../locales/es/footer.json";
import es_home from "../locales/es/home.json";
import es_features from "../locales/es/features.json";
import es_portfolio from "../locales/es/portfolio.json";
import es_about from "../locales/es/about.json";
import es_services from "../locales/es/services.json";
import es_contact from "../locales/es/contact.json";
import es_blogs from "../locales/es/blogs.json";

import pt_seo from "../locales/pt/seo.json";
import pt_nav from "../locales/pt/nav.json";
import pt_footer from "../locales/pt/footer.json";
import pt_home from "../locales/pt/home.json";
import pt_features from "../locales/pt/features.json";
import pt_portfolio from "../locales/pt/portfolio.json";
import pt_about from "../locales/pt/about.json";
import pt_services from "../locales/pt/services.json";
import pt_contact from "../locales/pt/contact.json";
import pt_blogs from "../locales/pt/blogs.json";

import zh_seo from "../locales/zh/seo.json";
import zh_nav from "../locales/zh/nav.json";
import zh_footer from "../locales/zh/footer.json";
import zh_home from "../locales/zh/home.json";
import zh_features from "../locales/zh/features.json";
import zh_portfolio from "../locales/zh/portfolio.json";
import zh_about from "../locales/zh/about.json";
import zh_services from "../locales/zh/services.json";
import zh_contact from "../locales/zh/contact.json";
import zh_blogs from "../locales/zh/blogs.json";

function bundle(...fragments) {
  return fragments.reduce((acc, f) => mergeDeep(acc, f), {});
}

const en = bundle(
  en_seo,
  en_nav,
  en_footer,
  en_home,
  en_features,
  en_portfolio,
  en_about,
  en_services,
  en_contact,
  en_blogs
);

const fr = bundle(
  fr_seo,
  fr_nav,
  fr_footer,
  fr_home,
  fr_features,
  fr_portfolio,
  fr_about,
  fr_services,
  fr_contact,
  fr_blogs
);

const es = bundle(
  es_seo,
  es_nav,
  es_footer,
  es_home,
  es_features,
  es_portfolio,
  es_about,
  es_services,
  es_contact,
  es_blogs
);

const pt = bundle(
  pt_seo,
  pt_nav,
  pt_footer,
  pt_home,
  pt_features,
  pt_portfolio,
  pt_about,
  pt_services,
  pt_contact,
  pt_blogs
);

const zh = bundle(
  zh_seo,
  zh_nav,
  zh_footer,
  zh_home,
  zh_features,
  zh_portfolio,
  zh_about,
  zh_services,
  zh_contact,
  zh_blogs
);

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    es: { translation: es },
    pt: { translation: pt },
    zh: { translation: zh },
  },
  lng: DEFAULT_LOCALE,
  fallbackLng: DEFAULT_LOCALE,
  supportedLngs: SUPPORTED_LOCALES,
  nonExplicitSupportedLngs: true,
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
