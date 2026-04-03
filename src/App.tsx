import { useEffect, useState } from "react";
import { LandingPage } from "./pages/LandingPage";
import { AboutPage } from "./pages/AboutPage";
import { HelpPage } from "./pages/HelpPage";
import { ProofPage } from "./pages/ProofPage";
import { ServicesPage } from "./pages/ServicesPage";
import { SkyPage } from "./pages/SkyPage";
import { scrollToHash } from "./lib/scrollToHash";

type Page = "landing" | "services" | "help" | "proof" | "about" | "sky";

function normalizePathname(pathname: string) {
  // Remove trailing slashes so `/services/` and `/services` behave the same.
  return pathname.replace(/\/+$/, "");
}

function readPageFromPathname(): Page {
  const path = normalizePathname(window.location.pathname);
  if (path === "/services") return "services";
  if (path === "/help") return "help";
  if (path === "/proof") return "proof";
  if (path === "/about") return "about";
  if (path === "/sky") return "sky";
  return "landing";
}

export function App() {
  const [page, setPage] = useState<Page>(() => readPageFromPathname());

  useEffect(() => {
    const onPopState = () => setPage(readPageFromPathname());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    // Support links like `/about#privacy` by opening/scrolling to anchors on the active page.
    if (window.location.hash) scrollToHash(window.location.hash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (page === "services") return <ServicesPage />;
  if (page === "help") return <HelpPage />;
  if (page === "proof") return <ProofPage />;
  if (page === "about") return <AboutPage />;
  if (page === "sky") return <SkyPage />;
  return <LandingPage />;
}
