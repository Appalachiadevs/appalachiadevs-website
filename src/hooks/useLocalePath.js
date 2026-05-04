import { useParams } from "react-router-dom";
import { DEFAULT_LOCALE } from "../constants/locales";

/** Build locale-prefixed paths, e.g. `p('/about')` → `/en/about` when lang is `en`. */
export function useLocalePath() {
  const { lang = DEFAULT_LOCALE } = useParams();
  const prefix = `/${lang}`;
  return (path = "/") => {
    if (!path || path === "/") return prefix;
    const normalized = path.startsWith("/") ? path : `/${path}`;
    return `${prefix}${normalized}`;
  };
}
