/**
 * Booking: set VITE_SCHEDULING_URL in .env to your full Cal.com or Calendly event URL.
 * Fallback below is a placeholder — replace with your real slug or always use .env in production.
 */
const schedulingUrl =
  typeof import.meta.env.VITE_SCHEDULING_URL === "string" &&
  import.meta.env.VITE_SCHEDULING_URL.trim().length > 0
    ? import.meta.env.VITE_SCHEDULING_URL.trim()
    : "https://cal.com/appalachiadev/15min";

export const siteConfig = {
  brand: {
    name: "Appalachia Devs",
    tagline: "AI Integration • IoT • Developer Consulting"
  },
  company: {
    /** Legal name as registered (shown in footer / policies). Update if your S-corp / legal name differs. */
    legal: "Appalachia Devs, LLC.",
    location: "Miami, Florida"
  },
  /** Primary public hostname (used in Privacy Policy copy). */
  publicHostname: "appalachiadevs.com",
  links: {
    email: "alex@appalachiadevs.com",
    scheduling: schedulingUrl
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "How we help", href: "#approach" },
    { label: "Proof", href: "#proof" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ],
  /** Full profile URLs; leave empty to hide that icon in the footer. */
  social: {
    linkedin: "https://www.linkedin.com/company/appalachiadevs",
    x: "https://x.com/appalachiadevs"
  },
  logo: {
    src: "/logo.svg",
    alt: "Appalachia Devs logo"
  }
} as const;
