import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, absoluteUrl } from "../config/site";

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

/**
 * @param {{ title: string; description: string; ogImage?: string }} props
 * title: page title without brand suffix (e.g. "Services")
 */
export default function SeoHead({ title, description, ogImage }) {
  const location = useLocation();
  const pathname = location.pathname || "/";
  const canonical =
    SITE_URL + (pathname === "/" ? "" : pathname.replace(/\/$/, ""));

  const fullTitle = `${title} | ${SITE_NAME}`;
  const image = absoluteUrl(ogImage || DEFAULT_OG_IMAGE);

  useEffect(() => {
    document.title = fullTitle;

    upsertMetaByName("description", description);
    upsertMetaByName("robots", "index, follow");

    upsertMetaByProperty("og:type", "website");
    upsertMetaByProperty("og:site_name", SITE_NAME);
    upsertMetaByProperty("og:title", fullTitle);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:url", canonical);
    upsertMetaByProperty("og:image", image);
    upsertMetaByProperty("og:locale", "en_US");

    upsertMetaByName("twitter:card", "summary_large_image");
    upsertMetaByName("twitter:title", fullTitle);
    upsertMetaByName("twitter:description", description);
    upsertMetaByName("twitter:image", image);

    upsertCanonical(canonical);
  }, [fullTitle, description, canonical, image]);

  return null;
}
