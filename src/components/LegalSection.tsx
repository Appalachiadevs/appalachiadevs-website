import { siteConfig } from "../siteConfig";

export type LegalSectionProps = {
  /** When true, use the standard page container width (like About/Services). */
  fullWidth?: boolean;
};

export function LegalSection({ fullWidth }: LegalSectionProps) {
  const year = new Date().getFullYear();

  return (
    <section className="section legalSection" aria-labelledby="legal-heading">
      <div className={fullWidth ? "container" : "container legalAccordionWrap"}>
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
                your information is sent with your own email client. We do not operate a separate server-side inbox
                on this static site—the data you choose to send goes directly to us via email.
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
              Text, graphics, and branding on this site are owned by {siteConfig.company.legal} or used with permission.
              You may not copy or reuse them for commercial purposes without our written consent.
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
  );
}

