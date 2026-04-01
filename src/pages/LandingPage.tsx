import { useEffect } from "react";
import { ContactForm } from "../components/ContactForm";
import { SiteFooter } from "../components/SiteFooter";
import { TopBar } from "../components/TopBar";
import { siteConfig } from "../siteConfig";
import { scrollToHash } from "../lib/scrollToHash";

type LandingPageProps = {
  /** Landing-only anchor like `ai`, `iot`, `advisory`, `contact`. */
  initialAnchor?: string;
};

const portfolioItems = [
  {
    title: "Email automation agent",
    description: "Draft responses, summarize threads, and route actions with guardrails.",
    badge: "Agent workflow",
    mockTitle: "Agent · Email",
    mockLines: ["Intent: summarize + draft reply", "Sources: CRM + docs", "Guardrails: safe actions only", "Output: ready-to-send draft"],
  },
  {
    title: "Knowledge Q&A agent",
    description: "Answer questions grounded in your documents using retrieval + evaluation.",
    badge: "RAG with tools",
    mockTitle: "Agent · Knowledge",
    mockLines: ["Query: onboarding process", "Retrieval: vector search + rerank", "Evaluation: answer quality checks", "Output: citations + next steps"],
  },
  {
    title: "Device telemetry copilot",
    description: "Turn device events into insights, alerts, and actionable summaries.",
    badge: "IoT + AI",
    mockTitle: "Agent · Devices",
    mockLines: ["Events: status + thresholds", "Pipeline: normalize + enrich", "Actions: notify teams + log", "Output: daily summary + alerts"],
  },
] as const;

export function LandingPage({ initialAnchor }: LandingPageProps) {
  useEffect(() => {
    if (!initialAnchor) return;
    scrollToHash(`#${initialAnchor}`);
  }, [initialAnchor]);

  return (
    <>
      <a className="skipLink" href="#contact" onClick={(e) => (e.preventDefault(), scrollToHash("#contact"))}>
        Skip to content
      </a>

      <TopBar />

      <main id="main" className="landingMain">
        <section className="landingSection landingHero" id="ai" aria-labelledby="landing-ai-title">
          <div className="container landingSectionInner">
            <div className="landingHeroCopy">
              <h1 className="landingTitle" id="landing-ai-title">
                AI Agent/Automation
              </h1>
              <p className="landingSubhead">
                RAG, tool-calling, and evaluation guardrails—so automation stays reliable after launch.
              </p>

              <div className="landingActions" aria-label="Primary actions">
                <a className="button" href="/services">
                  Learn more
                </a>
                <a className="button buttonPrimary" href={siteConfig.links.scheduling} target="_blank" rel="noreferrer">
                  Contact us
                </a>
              </div>
            </div>

            <div className="landingPortfolio">
              <div className="landingPortfolioHeader">
                <div className="landingPortfolioHint">Swipe to preview workflows.</div>
              </div>
              <div className="portfolioCarousel" aria-label="AI Agent portfolio carousel">
                {portfolioItems.map((item) => (
                  <div className="portfolioItem" key={item.title}>
                    <div className="portfolioCard">
                      <div className="portfolioBadgeRow">
                        <span className="portfolioBadge">{item.badge}</span>
                      </div>
                      <h3 className="portfolioCardTitle">{item.title}</h3>
                      <p className="portfolioCardText">{item.description}</p>

                      <div className="portfolioMock" aria-hidden="true">
                        <div className="portfolioMockHeader">{item.mockTitle}</div>
                        <div className="portfolioMockBody">
                          {item.mockLines.map((line) => (
                            <div key={line} className="portfolioMockLine">
                              <span className="portfolioMockBullet" />
                              <span>{line}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="landingSection" id="iot" aria-labelledby="landing-iot-title">
          <div className="container landingSectionInner">
            <div className="landingServiceGrid">
              <div className="landingServiceCopy">
                <h2 className="landingSectionTitle" id="landing-iot-title">
                  IoT Delivery
                </h2>
                <p className="landingSubhead">
                  Maintainable ingestion pipelines, processing, dashboards, and alerts—built to stay usable over time.
                </p>
                <div className="landingActions">
                  <a className="button" href="/services">
                    Learn more
                  </a>
                  <a
                    className="button buttonPrimary"
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToHash("#contact");
                    }}
                  >
                    Contact us
                  </a>
                </div>
              </div>
              <div className="landingServiceVisual" aria-hidden="true">
                <div className="visualCard">
                  <div className="visualTitle">Data pipeline</div>
                  <div className="visualSteps">
                    <div className="visualStep">
                      <span className="visualStepDot" />
                      Ingest
                    </div>
                    <div className="visualStep">
                      <span className="visualStepDot" />
                      Process
                    </div>
                    <div className="visualStep">
                      <span className="visualStepDot" />
                      Monitor
                    </div>
                  </div>
                  <div className="visualGraph" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="landingSection" id="advisory" aria-labelledby="landing-advisory-title">
          <div className="container landingSectionInner">
            <div className="landingServiceGrid">
              <div className="landingServiceCopy">
                <h2 className="landingSectionTitle" id="landing-advisory-title">
                  Automation & AI Advisory
                </h2>
                <p className="landingSubhead">
                  From quick audits to prototypes and delivery support—choose the fastest path to measurable results.
                </p>
                <div className="landingActions">
                  <a className="button" href="/services">
                    Learn more
                  </a>
                  <a
                    className="button buttonPrimary"
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToHash("#contact");
                    }}
                  >
                    Contact us
                  </a>
                </div>
              </div>
              <div className="landingServiceVisual" aria-hidden="true">
                <div className="visualCard">
                  <div className="visualTitle">Delivery plan</div>
                  <ul className="visualChecklist">
                    <li>
                      <span className="visualCheck" />
                      Scope + timeline
                    </li>
                    <li>
                      <span className="visualCheck" />
                      Guardrails + evaluation
                    </li>
                    <li>
                      <span className="visualCheck" />
                      Handoff + ownership
                    </li>
                  </ul>
                  <div className="visualGlow" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="landingSection landingContact" id="contact" aria-labelledby="landing-contact-title">
          <div className="container landingSectionInner">
            <div className="landingContactHeader">
              <div className="landingKicker">Contact us</div>
              <h2 className="landingSectionTitle" id="landing-contact-title">
                Contact us
              </h2>
              <p className="landingSubhead">
                Send a message and we’ll respond with next steps. Nothing is stored on this site.
              </p>
            </div>

            <div className="landingContactFormWrap">
              <div className="panel">
                <h3>Quick message</h3>
                <ContactForm privacyHref="/about#privacy" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

