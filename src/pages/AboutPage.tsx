import { LegalSection } from "../components/LegalSection";
import { SiteFooter } from "../components/SiteFooter";
import { TopBar } from "../components/TopBar";
import { siteConfig } from "../siteConfig";

export function AboutPage() {
  return (
    <>
      <a className="skipLink" href="#main">
        Skip to content
      </a>
      <TopBar />

      <main id="main">
        <section className="section" id="about">
          <div className="container">
            <div className="sectionHeader">
              <h2>About</h2>
              <div className="sectionHeaderStack">
                <p>
                  Appalachia Devs is a Miami-based IT company focused on practical AI, reliable IoT, and strong
                  engineering delivery.
                </p>
                <p className="aboutClarify">
                  The name reflects Appalachian roots; we’re headquartered in {siteConfig.company.location} and work with
                  clients across the U.S. Distance doesn’t change how we ship—clear specs, steady communication, and
                  code you can own.
                </p>
              </div>
            </div>

            <div className="grid2">
              <div className="panel">
                <h3>What we optimize for</h3>
                <p>
                  Predictable delivery, maintainable systems, and measurable results. We prioritize clarity, pragmatic
                  engineering, and long-term supportability.
                </p>
              </div>
              <div className="panel">
                <h3>Who we work with</h3>
                <p>
                  Startups and growing teams that need senior execution—whether that’s shipping AI features, building IoT
                  platforms, or improving architecture and development practices.
                </p>
              </div>
            </div>
          </div>
        </section>
        <LegalSection fullWidth />
      </main>

      <SiteFooter />
    </>
  );
}

