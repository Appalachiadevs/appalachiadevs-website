import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  absoluteUrl,
} from "../config/site";
import {
  OG_LOCALE,
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
} from "../constants/locales";

function upsertMetaByName(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertMetaByProperty(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function stripLocalePrefix(pathname) {
  const parts = (pathname || "/").split("/").filter(Boolean);
  if (parts.length && SUPPORTED_LOCALES.includes(parts[0])) {
    const rest = parts.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

function normalizeCanonicalPath(pathname) {
  if (!pathname || pathname === "/") return "";
  return pathname.endsWith("/") && pathname.length > 1
    ? pathname.replace(/\/$/, "")
    : pathname;
}

/**
 * @param {{ title: string; description: string; ogImage?: string; noIndex?: boolean }} props
 */
export default function SeoHead({ title, description, ogImage, noIndex = false }) {
  const location = useLocation();
  const { lang: langParam } = useParams();
  const lang = SUPPORTED_LOCALES.includes(langParam)
    ? langParam
    : DEFAULT_LOCALE;
  const pathname = location.pathname || "/";
  const canonical =
    SITE_URL + normalizeCanonicalPath(pathname);

  const fullTitle = `${title} | ${SITE_NAME}`;
  const image = absoluteUrl(ogImage || DEFAULT_OG_IMAGE);
  const ogLocale = OG_LOCALE[lang] || OG_LOCALE.en;
  const suffix = stripLocalePrefix(pathname);
  const pathTail = suffix === "/" ? "" : suffix;

  useEffect(() => {
    document.title = fullTitle;

    upsertMetaByName("description", description);
    upsertMetaByName("robots", noIndex ? "noindex, nofollow" : "index, follow");

    upsertMetaByProperty("og:type", "website");
    upsertMetaByProperty("og:site_name", SITE_NAME);
    upsertMetaByProperty("og:title", fullTitle);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:url", canonical);
    upsertMetaByProperty("og:image", image);
    upsertMetaByProperty("og:locale", ogLocale);

    upsertMetaByName("twitter:card", "summary_large_image");
    upsertMetaByName("twitter:title", fullTitle);
    upsertMetaByName("twitter:description", description);
    upsertMetaByName("twitter:image", image);

    upsertCanonical(canonical);

    document
      .querySelectorAll('link[rel="alternate"][data-i18n-hreflang]')
      .forEach((el) => el.remove());

    for (const l of SUPPORTED_LOCALES) {
      const href = `${SITE_URL}/${l}${pathTail}`;
      const link = document.createElement("link");
      link.setAttribute("rel", "alternate");
      link.setAttribute("hreflang", l === "zh" ? "zh-CN" : l);
      link.setAttribute("href", href);
      link.setAttribute("data-i18n-hreflang", "1");
      document.head.appendChild(link);
    }
    const xd = document.createElement("link");
    xd.setAttribute("rel", "alternate");
    xd.setAttribute("hreflang", "x-default");
    xd.setAttribute("href", `${SITE_URL}/${DEFAULT_LOCALE}${pathTail}`);
    xd.setAttribute("data-i18n-hreflang", "1");
    document.head.appendChild(xd);
  }, [fullTitle, description, canonical, image, ogLocale, pathTail, noIndex]);

  return null;
}
