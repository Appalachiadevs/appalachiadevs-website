import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

/** Tracks client-side route changes for this React Router SPA. */
export default function AnalyticsTracker() {
  const { pathname } = useLocation();

  return (
    <>
      <Analytics route={pathname} path={pathname} />
      <SpeedInsights />
    </>
  );
}
