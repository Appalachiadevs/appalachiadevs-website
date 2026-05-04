import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { FiExternalLink, FiCheck } from "react-icons/fi";
import SeoHead from "../SeoHead";

const Portfolio = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectsRaw = t("portfolio.projects", { returnObjects: true });
  const projects = useMemo(
    () => (Array.isArray(projectsRaw) ? projectsRaw : []),
    [projectsRaw]
  );

  return (
    <>
      <SeoHead
        title={t("seo.portfolio.title")}
        description={t("seo.portfolio.description")}
        ogImage="/portfolio/portfolio-iot.png"
      />
      <Navbar />
      <div className="min-h-screen bg-slate-50 font-poppins">
        <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white via-blue-50/40 to-slate-50 pt-24 sm:pt-28 pb-12 sm:pb-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            aria-hidden
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(37,99,235,0.12), transparent 45%), radial-gradient(circle at 80% 0%, rgba(14,165,233,0.1), transparent 40%)",
            }}
          />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-4 inline-flex items-center rounded-full border border-blue-200/80 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 shadow-sm"
            >
              {t("portfolio.badge")}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-slate-900 tracking-tight"
            >
              {t("portfolio.titleLine1")}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                {t("portfolio.titleAccent")}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed"
            >
              {t("portfolio.intro")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                {t("portfolio.stat1")}
              </div>
              <div className="hidden sm:block h-4 w-px bg-slate-200" aria-hidden />
              <div>{t("portfolio.stat2")}</div>
              <div className="hidden sm:block h-4 w-px bg-slate-200" aria-hidden />
              <div>{t("portfolio.stat3")}</div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-18">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {t("portfolio.sectionTitle")}
              </h2>
              <p className="mt-2 max-w-xl text-sm sm:text-base text-slate-600">
                {t("portfolio.sectionLead")}
              </p>
            </div>
          </div>

          <div className="grid gap-10 lg:gap-12">
            {projects.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="group overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_20px_50px_-24px_rgba(15,23,42,0.25)]"
              >
                <div className="grid gap-0 lg:grid-cols-12 lg:items-stretch">
                  <div className="relative lg:col-span-5 min-h-[220px] sm:min-h-[280px] lg:min-h-[320px]">
                    <img
                      src={project.image}
                      alt=""
                      loading={index === 0 ? "eager" : "lazy"}
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/25 to-transparent lg:bg-gradient-to-r"
                      aria-hidden
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:top-0 lg:flex lg:flex-col lg:justify-end">
                      <p className="text-xs font-semibold uppercase tracking-widest text-sky-200/95">
                        {project.category}
                      </p>
                      <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white drop-shadow-sm">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-7 lg:p-10">
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      {project.tagline}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {(project.highlights || []).map((line, hi) => (
                        <li
                          key={`${project.slug}-h-${hi}`}
                          className="flex gap-3 text-sm sm:text-base text-slate-600 leading-snug"
                        >
                          <FiCheck
                            className="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
                            aria-hidden
                          />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {(project.tags || []).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-slate-100 pt-6">
                      <p className="text-xs text-slate-400 break-all sm:max-w-[55%]">
                        {project.url}
                      </p>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-600/25 transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        {t("portfolio.ctaButton")}
                        <FiExternalLink className="h-4 w-4 shrink-0" aria-hidden />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white py-12 sm:py-14">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              {t("portfolio.closingTitle")}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              {t("portfolio.closingLead")}
            </p>
            <button
              type="button"
              onClick={() =>
                (window.location.href = "https://cal.com/appalachiadev/15min")
              }
              className="mt-6 inline-flex rounded-lg border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800"
            >
              {t("portfolio.closingButton")}
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
