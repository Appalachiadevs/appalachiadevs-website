import { ContactForm } from "../components/ContactForm";
import { SiteFooter } from "../components/SiteFooter";
import { TopBar } from "../components/TopBar";
import { scrollToHash } from "../lib/scrollToHash";

const features = [
  {
    title: "PBS Bidding",
    description: "Build layered ballots with proven strategies. Max days off, premium hunting, specific dates off.",
  },
  {
    title: "TTS Drops & Pickups",
    description: "Monitor open time, submit drop requests, grab RT-eligible sequences automatically.",
  },
  {
    title: "DOTC Premium Hunting",
    description: "Get alerted when high-value trips appear. Filter by credit, layover, or premium pay.",
  },
  {
    title: "Deadhead Check-In",
    description: "Never miss the 24-hour window. Auto check-in at T-24 with retry logic.",
  },
  {
    title: "Schedule Sync",
    description: "Automatic calendar sync. Sequences, deadheads, vacation—all on your Google Calendar.",
  },
  {
    title: "Text Your Agent",
    description: '"What\'s my schedule?" "Find premium trips for Thursday." Just ask via WhatsApp or Telegram.',
  },
];

const tiers = [
  {
    name: "Self-Hosted",
    price: "$30",
    period: "/month",
    description: "Run your own agent",
    features: ["Full automation scripts", "PBS bid strategies", "All workflow docs", "GitHub repo access", "Email support"],
    href: "https://totheskies.gumroad.com/l/aapilotpro",
    primary: false,
  },
  {
    name: "Managed — Pilots",
    price: "$75",
    period: "/month",
    description: "We run everything",
    features: [
      "Everything in Self-Hosted",
      "Fully managed infrastructure",
      "Residential IP (no blocks)",
      "24/7 agent uptime",
      "WhatsApp or Telegram",
      "Priority support",
      "Automatic updates",
    ],
    href: "#contact",
    primary: true,
  },
  {
    name: "Managed — Flight Attendants",
    price: "$50",
    period: "/month",
    description: "Streamlined for cabin crew",
    features: [
      "Schedule management",
      "Trip trade automation",
      "Auto check-in",
      "Calendar sync",
      "Fully managed",
      "WhatsApp or Telegram",
      "Priority support",
    ],
    href: "#contact",
    primary: false,
  },
];

const faqs = [
  {
    q: "What do I need to get started?",
    a: "Your AA employee ID and password. For managed plans, that's it—we handle the rest. For self-hosted, you'll need a server and some technical experience.",
  },
  {
    q: "Is my login secure?",
    a: "Your credentials are encrypted and stored only on your dedicated agent instance. We never access your account directly. The agent acts on your behalf using browser automation.",
  },
  {
    q: "What if AA changes their portals?",
    a: "Managed subscribers get automatic updates. We monitor for portal changes and push fixes. Self-hosted users get notified and can pull updates from the repo.",
  },
  {
    q: "Why residential IP?",
    a: "AA portals flag datacenter IPs. Managed plans route through residential connections so your agent doesn't get blocked or trigger extra verification.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts. Cancel anytime via email.",
  },
];

export function SkyPage() {
  return (
    <>
      <TopBar />

      <main id="main" className="landingMain">
        {/* Hero */}
        <section className="landingSection landingHero" id="sky-hero" aria-labelledby="sky-title">
          <div className="container landingSectionInner">
            <div className="landingHeroCopy">
              <div className="landingKicker">For American Airlines Crew</div>
              <h1 className="landingTitle" id="sky-title">
                SkyAgent
              </h1>
              <p className="landingSubhead">
                Automate PBS bidding, TTS trades, DOTC premium hunting, and deadhead check-ins. Text your agent like a colleague. It handles the portals.
              </p>
              <div className="landingActions">
                <a
                  className="button"
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHash("#pricing");
                  }}
                >
                  View pricing
                </a>
                <a
                  className="button buttonPrimary"
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHash("#contact");
                  }}
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="landingSection" id="features" aria-labelledby="sky-features-title">
          <div className="container landingSectionInner">
            <div className="landingContactHeader">
              <h2 className="landingSectionTitle" id="sky-features-title">
                What your agent handles
              </h2>
            </div>
            <div className="skyFeaturesGrid">
              {features.map((f) => (
                <div className="skyFeatureCard" key={f.title}>
                  <h3 className="skyFeatureTitle">{f.title}</h3>
                  <p className="skyFeatureDesc">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="landingSection" id="pricing" aria-labelledby="sky-pricing-title">
          <div className="container landingSectionInner">
            <div className="landingContactHeader">
              <h2 className="landingSectionTitle" id="sky-pricing-title">
                Pricing
              </h2>
              <p className="landingSubhead">Self-hosted if you're technical. Managed if you want it to just work.</p>
            </div>
            <div className="skyPricingGrid">
              {tiers.map((tier) => (
                <div className={`skyPricingCard ${tier.primary ? "skyPricingCardPrimary" : ""}`} key={tier.name}>
                  {tier.primary && <div className="skyPricingBadge">Popular</div>}
                  <h3 className="skyPricingName">{tier.name}</h3>
                  <p className="skyPricingDesc">{tier.description}</p>
                  <div className="skyPricingPrice">
                    <span className="skyPricingAmount">{tier.price}</span>
                    <span className="skyPricingPeriod">{tier.period}</span>
                  </div>
                  <ul className="skyPricingFeatures">
                    {tier.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <a
                    className={`button ${tier.primary ? "buttonPrimary" : ""}`}
                    href={tier.href}
                    onClick={
                      tier.href.startsWith("#")
                        ? (e) => {
                            e.preventDefault();
                            scrollToHash(tier.href);
                          }
                        : undefined
                    }
                    target={tier.href.startsWith("http") ? "_blank" : undefined}
                    rel={tier.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {tier.href.startsWith("#") ? "Contact to subscribe" : "Get started"}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="landingSection" id="faq" aria-labelledby="sky-faq-title">
          <div className="container landingSectionInner">
            <div className="landingContactHeader">
              <h2 className="landingSectionTitle" id="sky-faq-title">
                Questions
              </h2>
            </div>
            <div className="skyFaqList">
              {faqs.map((faq) => (
                <div className="skyFaqItem" key={faq.q}>
                  <h3 className="skyFaqQ">{faq.q}</h3>
                  <p className="skyFaqA">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="landingSection landingContact" id="contact" aria-labelledby="sky-contact-title">
          <div className="container landingSectionInner">
            <div className="landingContactHeader">
              <div className="landingKicker">Contact us</div>
              <h2 className="landingSectionTitle" id="sky-contact-title">
                Get started
              </h2>
              <p className="landingSubhead">Send a message and we'll respond with next steps.</p>
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
