import { siteConfig } from "../siteConfig";

export function TopBar() {
  return (
    <header className="topbar">
      <div className="container topbarInner">
        <a className="brand" href="/" aria-label={siteConfig.brand.name}>
          <img className="brandLogo" src={siteConfig.logo.src} alt={siteConfig.logo.alt} />
          <span className="brandName">
            <strong>{siteConfig.brand.name}</strong>
            <span>
              {siteConfig.company.location} • {siteConfig.company.legal}
            </span>
          </span>
        </a>

        <nav className="nav" aria-label="Primary">
          <a href="/services">Services</a>
          <a href="/help">How we help</a>
          <a href="/proof">Proof</a>
          <a href="/about">About</a>
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
  );
}

