export function scrollToHash(href: string) {
  if (!href.startsWith("#")) return;
  const id = href.slice(1);
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "start" });

  // Used by the legal accordion: when the element exists, ensure it opens.
  if (el instanceof HTMLDetailsElement) {
    el.open = true;
  }
}

