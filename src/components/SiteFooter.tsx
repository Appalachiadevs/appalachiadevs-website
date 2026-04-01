import { siteConfig } from "../siteConfig";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const socialLinkedIn = siteConfig.social.linkedin.trim();
  const socialX = siteConfig.social.x.trim();

  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="footerPrimary">
          <small className="footerCopyright">
            © {year} {siteConfig.company.legal} · {siteConfig.company.location}
          </small>
        </div>

        <div className="footerNavRow" aria-label="Footer">
          <div className="footerLinks">
            <a href="/services">Services</a>
            <a href="/help">How we help</a>
            <a href="/proof">Proof</a>
            <a href="/about">About</a>
            <a href="/#contact">Contact</a>
          </div>

          <div className="footerSocial" aria-label="Contact and social">
            <a href={`mailto:${siteConfig.links.email}`}>Email</a>
            {socialLinkedIn ? (
              <a href={socialLinkedIn} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            ) : null}
            {socialX ? (
              <a href={socialX} target="_blank" rel="noreferrer">
                X
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}

