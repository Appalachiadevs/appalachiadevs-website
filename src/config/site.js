/** Canonical site origin (no trailing slash). Override with VITE_SITE_URL in .env for previews. */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || "https://www.appalachiadevs.com"
).replace(/\/$/, "");

export const SITE_NAME = "AppalachiaDevs";

/** Default Open Graph / Twitter image when a page does not override */
export const DEFAULT_OG_IMAGE = `${SITE_URL}/portfolio/portfolio-rag.png`;

export function absoluteUrl(pathOrUrl) {
  if (!pathOrUrl) return DEFAULT_OG_IMAGE;
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://"))
    return pathOrUrl;
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${path}`;
}
