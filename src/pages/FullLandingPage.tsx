import { useEffect } from "react";
import { siteConfig } from "../siteConfig";
import { ContactForm } from "../components/ContactForm";
import { SiteFooter } from "../components/SiteFooter";
import { scrollToHash } from "../lib/scrollToHash";

type FullLandingPageProps = {
  /** Full-page anchor like `service-ai`, `services`, `privacy`, `terms`. */
  initialAnchor?: string;
};

export function FullLandingPage({ initialAnchor }: FullLandingPageProps) {
  const year = new Date().getFullYear();

  useEffect(() => {
    if (!initialAnchor) return;
    scrollToHash(`#${initialAnchor}`);
  }, [initialAnchor]);

  return (
    <>
      <a
        className="skipLink"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          scrollToHash("#main");
        }}
      >
        Skip to content
      </a>

      <header className="topbar">
        <div className="container topbarInner">
          <a className="brand" href="#/" aria-label={siteConfig.brand.name}>
            <img className="brandLogo" src={siteConfig.logo.src} alt={siteConfig.logo.alt} />
            <span className="brandName">
              <strong>{siteConfig.brand.name}</strong>
              <span>
                {siteConfig.company.location} • {siteConfig.company.legal}
              </span>
            </span>
          </a>

          <nav className="nav" aria-label="Primary">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (!item.href.startsWith("#")) return;
                  e.preventDefault();
                  scrollToHash(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="ctaRow">
            <a className="button" href={`mailto:${siteConfig.links.email}`}>
              Email
            </a>
            <a className="button buttonPrimary" href={siteConfig.links.scheduling} target="_blank" rel="noreferrer">
              Book a call
            </a>
          </div>
        </div>
      </header>

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
                <a className="button buttonPrimary" href="#contact" onClick={(e) => (e.preventDefault(), scrollToHash("#contact"))}>
                  Contact us
                </a>
                <a className="button" href="#services" onClick={(e) => (e.preventDefault(), scrollToHash("#services"))}>
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
                <div className="kicker">AI Agents & Automation</div>
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
                <div className="kicker">Automation & AI Advisory</div>
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

        <section className="section" id="approach">
          <div className="container">
            <div className="sectionHeader">
              <h2>How we help</h2>
              <p>Simple process, minimal overhead—designed to keep your team moving.</p>
            </div>

            <div className="grid2">
              <div className="panel">
                <h3>1) Align on outcomes</h3>
                <p>
                  We define success metrics, risks, and constraints. You get a crisp plan with scope, timeline, and a
                  delivery approach that fits your team.
                </p>
              </div>
              <div className="panel">
                <h3>2) Build with quality gates</h3>
                <p>
                  We ship in small increments with testing, observability, and security best practices. No “big bang”
                  releases.
                </p>
              </div>
              <div className="panel">
                <h3>3) Integrate and hand off</h3>
                <p>
                  Clear documentation, knowledge transfer, and maintainable code. If you want, we stay engaged for
                  ongoing improvements.
                </p>
              </div>
              <div className="panel">
                <h3>4) Support hiring (optional)</h3>
                <p>
                  Need great developers? We can help source and vet talent, and align hiring with your architecture and
                  roadmap.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="proof">
          <div className="container">
            <div className="sectionHeader">
              <h2>Demos & delivery proof</h2>
              <p>
                Concrete delivery approach and demoable outputs—so you know what the first build phase will look like
                before the first call.
              </p>
            </div>

            <div className="grid2">
              <div className="panel">
                <h3>How we work with you</h3>
                <p>
                  <strong>Typical engagements:</strong> discovery and architecture (2–4 weeks), build phases (4–12+
                  weeks), or ongoing advisory retainers. Many projects start with a short technical assessment.
                </p>
                <p>
                  <strong>Production-minded process:</strong> we design for reliability, security, observability, and
                  maintainability from day one.
                </p>
                <p>
                  <strong>Stacks & platforms:</strong> AWS and Azure, Kubernetes where it fits, IoT via MQTT and major
                  device clouds, data pipelines and observability (metrics, logs, tracing), and modern backends (e.g. Node,
                  Python, .NET) with strong API design.
                </p>
              </div>

              <div className="panel">
                <h3>Example delivery snapshot (demo)</h3>
                <p>
                  Example: an AI automation workflow that uses RAG to pull the right context from your knowledge base,
                  then uses MCP/tool calling to trigger approved actions (for example: drafting responses, summarizing
                  database results, or routing requests to the right team).
                  <br />
                  <br />
                  We validate quality with evaluation tests, add guardrails for safe behavior, and monitor outputs and
                  costs so the system stays predictable after launch.
                </p>
              </div>
            </div>

            <div className="panel industriesPanel">
              <h3>Industries we often serve</h3>
              <p className="industriesLead">
                Not exhaustive—if your problem is data, devices, or AI in production, say hello.
              </p>
              <ul className="industryList" aria-label="Industries served">
                <li>Industrial & operational technology</li>
                <li>Logistics and asset tracking</li>
                <li>B2B SaaS and internal tools</li>
                <li>Health-adjacent workflows (non-diagnostic software)</li>
              </ul>
            </div>
          </div>
        </section>

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

        <section className="section" id="contact">
          <div className="container">
            <div className="sectionHeader">
              <h2>Contact</h2>
              <p>Tell us what you’re building. We’ll respond with next steps and a clear plan.</p>
            </div>

            <div className="grid2">
              <div className="panel">
                <h3>Email</h3>
                <p>
                  <a className="button buttonPrimary" href={`mailto:${siteConfig.links.email}`}>
                    {siteConfig.links.email}
                  </a>
                </p>
              </div>
              <div className="panel">
                <h3>Schedule</h3>
                <p>
                  <a className="button" href={siteConfig.links.scheduling} target="_blank" rel="noreferrer">
                    Book a 20–30 min intro call
                  </a>
                </p>
              </div>
            </div>

            <div className="panel contactFormPanel">
              <h3>Quick message</h3>
              <p className="contactFormIntro">
                Prefer a form? Fill this in and we’ll open a draft email for you—nothing is stored on this website.
              </p>
              <ContactForm privacyHref="#privacy" />
            </div>
          </div>
        </section>

        <section className="section legalSection" aria-labelledby="legal-heading">
          <div className="container legalAccordionWrap">
            <div className="sectionHeader">
              <h2 id="legal-heading">Legal</h2>
              <p>Privacy policy and terms of use for this site. Open each section to read the full text.</p>
            </div>

            <details id="privacy" className="legalAccordion" name="legal">
              <summary>
                <span className="legalAccordionSummaryText">
                  <span className="legalAccordionTitle">Privacy Policy</span>
                  <span className="legalAccordionMeta">Last updated March {year}</span>
                </span>
              </summary>
              <div className="legalAccordionBody">
                <p className="legalMeta">
                  {siteConfig.company.legal}, {siteConfig.company.location}.
                </p>
                <p>
                  This site is operated by {siteConfig.company.legal} (“we,” “us”). We respect your privacy. This
                  policy describes what we collect on <strong>{siteConfig.publicHostname}</strong> (and this marketing
                  site) and how we use it.
                </p>
                <h3>What we collect</h3>
                <ul>
                  <li>
                    <strong>Email links and the contact form:</strong> If you email us or use the “Quick message” form,
                    your information is sent with your own email client. We do not operate a separate server-side
                    inbox on this static site—the data you choose to send goes directly to us via email.
                  </li>
                  <li>
                    <strong>Analytics:</strong> We do not load third-party advertising or analytics trackers on this site
                    at this time. If that changes, we will update this policy and the cookie notice below.
                  </li>
                  <li>
                    <strong>Cookies:</strong> We may use strictly necessary technical storage (for example, preferences) if
                    added in the future. We do not use cookies for cross-site tracking today.
                  </li>
                </ul>
                <h3>How we use information</h3>
                <p>
                  We use contact details you provide only to respond to inquiries, schedule meetings, and follow up on
                  potential engagements. We do not sell your personal information.
                </p>
                <h3>Retention</h3>
                <p>
                  Business correspondence is kept only as long as needed for client relationships, legal obligations, or
                  ordinary business records—consistent with our internal practices.
                </p>
                <h3>Your rights</h3>
                <p>
                  Depending on where you live, you may have rights to access, correct, or delete personal data we hold.
                  Contact us at{" "}
                  <a href={`mailto:${siteConfig.links.email}`}>{siteConfig.links.email}</a> for privacy-related requests.
                </p>
                <h3>Changes</h3>
                <p>
                  We may update this policy from time to time. The “Last updated” line in the summary will change when we
                  do.
                </p>
              </div>
            </details>

            <details id="terms" className="legalAccordion" name="legal">
              <summary>
                <span className="legalAccordionSummaryText">
                  <span className="legalAccordionTitle">Terms of use</span>
                  <span className="legalAccordionMeta">Last updated March {year}</span>
                </span>
              </summary>
              <div className="legalAccordionBody">
                <p className="legalMeta">
                  {siteConfig.company.legal}, {siteConfig.company.location}.
                </p>
                <p>
                  By using this website, you agree to these terms. If you do not agree, please do not use the site.
                </p>
                <h3>Informational use</h3>
                <p>
                  Content here describes our services in general terms. It is not a binding offer, guarantee of results, or
                  legal advice. A separate written agreement governs any paid work.
                </p>
                <h3>Intellectual property</h3>
                <p>
                  Text, graphics, and branding on this site are owned by {siteConfig.company.legal} or used with
                  permission. You may not copy or reuse them for commercial purposes without our written consent.
                </p>
                <h3>Limitation of liability</h3>
                <p>
                  To the fullest extent permitted by law, we are not liable for any indirect or consequential damages arising
                  from your use of this site or reliance on its content. The site is provided “as is.”
                </p>
                <h3>Contact</h3>
                <p>
                  Questions about these terms:{" "}
                  <a href={`mailto:${siteConfig.links.email}`}>{siteConfig.links.email}</a>.
                </p>
              </div>
            </details>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

