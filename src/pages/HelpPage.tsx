import { SiteFooter } from "../components/SiteFooter";
import { TopBar } from "../components/TopBar";

export function HelpPage() {
  return (
    <>
      <a className="skipLink" href="#main">
        Skip to content
      </a>
      <TopBar />

      <main id="main">
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

        <section className="section" id="deliverables">
          <div className="container">
            <div className="sectionHeader">
              <h2>What you get</h2>
              <p>Concrete deliverables you can review, demo, and own.</p>
            </div>

            <div className="grid2">
              <div className="panel">
                <h3>Specs that stay readable</h3>
                <p>
                  A clear scope doc and milestone plan—so everyone agrees on what “done” means before the build starts.
                </p>
              </div>
              <div className="panel">
                <h3>Production-ready implementation</h3>
                <p>
                  Clean code, predictable deployments, and operational visibility (logs/metrics) where it matters.
                </p>
              </div>
              <div className="panel">
                <h3>Evaluation + guardrails (AI work)</h3>
                <p>
                  Practical tests and safety boundaries so the system behaves consistently and stays trustworthy after launch.
                </p>
              </div>
              <div className="panel">
                <h3>Handoff you can run with</h3>
                <p>
                  Documentation and walkthroughs so your team can maintain and extend the system without vendor lock-in.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="engagements">
          <div className="container">
            <div className="sectionHeader">
              <h2>Engagement options</h2>
              <p>Choose a format that matches your timeline and uncertainty level.</p>
            </div>

            <div className="grid3">
              <div className="serviceCard">
                <div className="kicker">Discovery</div>
                <h3>Clarify scope &amp; risks</h3>
                <p>
                  Short assessment to map requirements, constraints, and the fastest path to a demoable outcome.
                </p>
              </div>
              <div className="serviceCard">
                <div className="kicker">Build</div>
                <h3>Ship an MVP fast</h3>
                <p>
                  Deliver in small increments with review checkpoints—so you see progress early and decisions stay easy.
                </p>
              </div>
              <div className="serviceCard">
                <div className="kicker">Advisory</div>
                <h3>Stay unblocked</h3>
                <p>
                  Architecture reviews, integration guidance, and implementation support to keep your team moving.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="timeline">
          <div className="container">
            <div className="sectionHeader">
              <h2>Example timeline</h2>
              <p>A typical early build phase, optimized for speed and clarity.</p>
            </div>

            <div className="grid2">
              <div className="panel">
                <h3>Week 1</h3>
                <p>Requirements, access, risk review, and a small demo target everyone can agree on.</p>
              </div>
              <div className="panel">
                <h3>Weeks 2–3</h3>
                <p>Implementation + integration, with weekly demos and quality gates as features land.</p>
              </div>
              <div className="panel">
                <h3>Week 4</h3>
                <p>Hardening, evaluation, and handoff. You leave with working systems and a clear next-step plan.</p>
              </div>
              <div className="panel">
                <h3>Ongoing</h3>
                <p>Iterate based on real usage: reliability, performance, cost controls, and additional workflows.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

