import { SiteFooter } from "../components/SiteFooter";
import { TopBar } from "../components/TopBar";

export function ProofPage() {
  return (
    <>
      <a className="skipLink" href="#main">
        Skip to content
      </a>
      <TopBar />

      <main id="main">
        <section className="section" id="proof">
          <div className="container">
            <div className="sectionHeader">
              <h2>Demos &amp; delivery proof</h2>
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
                  <strong>Stacks &amp; platforms:</strong> AWS and Azure, Kubernetes where it fits, IoT via MQTT and major
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
              <p className="industriesLead">Not exhaustive—if your problem is data, devices, or AI in production, say hello.</p>
              <ul className="industryList" aria-label="Industries served">
                <li>Industrial &amp; operational technology</li>
                <li>Logistics and asset tracking</li>
                <li>B2B SaaS and internal tools</li>
                <li>Health-adjacent workflows (non-diagnostic software)</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

