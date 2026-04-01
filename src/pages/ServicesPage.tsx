import { SiteFooter } from "../components/SiteFooter";
import { TopBar } from "../components/TopBar";
import { siteConfig } from "../siteConfig";

export function ServicesPage() {
  return (
    <>
      <a className="skipLink" href="#main">
        Skip to content
      </a>
      <TopBar />

      <main id="main">
        <section className="hero">
          <div className="container heroGrid">
            <div className="heroCopy">
              <p className="kicker">Build reliably. Integrate intelligently.</p>
              <h1 className="heroTitle">
                Professional <em>AI integration</em> and <em>IoT delivery </em>, backed by <em>Developer consulting</em>.
              </h1>
              <p className="heroLead">
                Appalachia Devs helps teams ship production-ready AI features, connected device workflows, and clean
                software systems—without adding complexity. Based in {siteConfig.company.location}.
              </p>

              <div className="heroPills" aria-label="Highlights">
                <span className="pill">AI integration: LLMs, RAG, agents</span>
                <span className="pill">IoT: device data, cloud pipelines</span>
                <span className="pill">Consulting: architecture, delivery, hiring</span>
              </div>

              <div className="heroPills" style={{ marginTop: 14 }}>
                <a className="button buttonPrimary" href="#contact">
                  Contact us
                </a>
                <a className="button" href="#services">
                  View services
                </a>
              </div>
            </div>

            <aside className="card heroCard" aria-label="What you get">
              <h3>What you get</h3>
              <ul>
                <li>
                  <span className="dot" aria-hidden="true" />
                  Clear scope and milestones, with weekly progress updates.
                </li>
                <li>
                  <span className="dot" aria-hidden="true" />
                  Production-minded engineering: reliability, security, observability.
                </li>
                <li>
                  <span className="dot" aria-hidden="true" />
                  Practical outcomes: working integrations, measurable performance, maintainable code.
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="sectionHeader">
              <h2>Services</h2>
              <p>
                Pick a focused engagement or combine services for an end-to-end delivery. Simple, professional, and
                built to last.
              </p>
            </div>

            <div className="grid3">
              <div className="serviceCard" id="service-ai">
                <div className="kicker">AI Agents &amp; Automation</div>
                <h3>RAG + MCP AI agents that deliver outcomes</h3>
                <p>
                  We build and deliver AI agent/automation solutions for business workflows—like automatic response
                  drafting for email/calls, statistics and summaries from your databases, and knowledge search over your
                  documents.
                  <br />
                  <br />
                  From RAG (retrieval from your data) to MCP/tool calling (safe actions through approved integrations),
                  we deploy systems with evaluation, guardrails, observability, and cost controls—so results are
                  predictable and useful in production.
                </p>
              </div>

              <div className="serviceCard" id="service-iot">
                <div className="kicker">IoT Delivery</div>
                <h3>Device telemetry you can trust</h3>
                <p>
                  We connect device data to the cloud with maintainable, observable systems: ingestion pipelines,
                  processing, real-time dashboards, alerts, and integrations.
                  <br />
                  <br />
                  You get reliability and operational visibility—so issues are detected early and your data stays usable
                  over time.
                </p>
              </div>

              <div className="serviceCard" id="service-advisory">
                <div className="kicker">Automation &amp; AI Advisory</div>
                <h3>Not sure what to build? We’ll map the fastest path</h3>
                <p>
                  If you don’t know what to do (or how to do it), contact us.
                  <br />
                  <br />
                  Through a call/meeting, we assess your current systems, identify the highest-impact automation/AI use
                  cases, and recommend a practical plan to speed up delivery—whether you want a short audit, a prototype,
                  or ongoing implementation support.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

