import { useEffect } from "react";
import { Outlet, Navigate, useParams, useLocation } from "react-router-dom";
import i18n from "../i18n";
import {
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  HTML_LANG,
} from "../constants/locales";

export default function LocaleLayout() {
  const { lang } = useParams();
  const location = useLocation();
  const valid = SUPPORTED_LOCALES.includes(lang);

  useEffect(() => {
    if (!valid) return;
    i18n.changeLanguage(lang);
    document.documentElement.lang = HTML_LANG[lang] || "en";
  }, [lang, valid]);

  if (!valid) {
    const parts = location.pathname.split("/").filter(Boolean);
    const tail = parts.slice(1).join("/");
    return <Navigate to={tail ? `/${DEFAULT_LOCALE}/${tail}` : `/${DEFAULT_LOCALE}`} replace />;
  }

  return <Outlet />;
}
