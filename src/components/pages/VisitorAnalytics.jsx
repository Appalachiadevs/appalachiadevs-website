import { useEffect } from "react";
import { Link } from "react-router-dom";
import SeoHead from "../SeoHead";
import { DEFAULT_LOCALE } from "../../constants/locales";

const DASHBOARD_URL =
  import.meta.env.VITE_VERCEL_ANALYTICS_DASHBOARD ||
  "https://vercel.com/dashboard";

export default function VisitorAnalytics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHead
        title="Visitor analytics"
        description="Open Vercel Web Analytics for AppalachiaDevs visitor insights."
        noIndex
      />
      <div className="min-h-screen bg-slate-50 font-poppins px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Web Analytics
          </p>
          <h1 className="mt-3 text-2xl font-bold text-slate-900">
            Visitor insights
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            This site uses{" "}
            <a
              href="https://vercel.com/docs/analytics"
              className="text-blue-600 underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel Web Analytics
            </a>
            . Page views and visitor stats appear in your Vercel project
            dashboard—not on this page.
          </p>
          <ol className="mt-6 list-decimal space-y-2 pl-5 text-sm text-slate-600">
            <li>Enable Analytics on the project in Vercel (Analytics → Enable).</li>
            <li>Deploy after adding the <code className="text-xs">@vercel/analytics</code> package.</li>
            <li>Open the dashboard below to view visitors and top pages.</li>
          </ol>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Open Vercel Analytics
            </a>
            <Link
              to={`/${DEFAULT_LOCALE}`}
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50"
            >
              Back to site
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-400">
            Tip: after deploy, confirm tracking in DevTools → Network (a request to
            your analytics <code className="text-[11px]">/view</code> endpoint).
          </p>
        </div>
      </div>
    </>
  );
}
