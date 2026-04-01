import { ContactForm } from "./ContactForm";
import { siteConfig } from "../siteConfig";

export function ContactSection() {
  return (
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
  );
}

