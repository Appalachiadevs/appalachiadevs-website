import { useState } from "react";
import { siteConfig } from "../siteConfig";
import { scrollToHash } from "../lib/scrollToHash";

export type ContactFormProps = {
  /**
   * Where "Privacy Policy" should go.
   * - Use `#privacy` when the privacy section is on the same page.
   * - Use `#/full#privacy` when the privacy section is on the full page.
   */
  privacyHref: string;
};

export function ContactForm({ privacyHref }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed || !name.trim() || !email.trim() || !message.trim()) return;

    const subject = encodeURIComponent(`Website inquiry — ${siteConfig.brand.name}`);
    const body = encodeURIComponent(`Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`);
    window.location.href = `mailto:${siteConfig.links.email}?subject=${subject}&body=${body}`;
  }

  const handlePrivacyClick = (e: React.MouseEvent) => {
    // Only intercept "same page" links like `#privacy`.
    if (privacyHref.startsWith("#") && !privacyHref.startsWith("#/")) {
      e.preventDefault();
      scrollToHash(privacyHref);
    }
  };

  return (
    <form className="contactForm" onSubmit={handleSubmit} noValidate>
      <div className="formField">
        <label className="formLabel" htmlFor="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="formField">
        <label className="formLabel" htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="formField">
        <label className="formLabel" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <label className="formCheck">
        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
        <span>
          I agree that my details will be used to respond to this inquiry, as described in the{" "}
          <a href={privacyHref} onClick={handlePrivacyClick}>
            Privacy Policy
          </a>
          .
        </span>
      </label>

      <button className="button buttonPrimary" type="submit" disabled={!agreed}>
        Send via email
      </button>

      <p className="formHint">Opens your email app with a pre-filled message—we do not store submissions on this site.</p>
    </form>
  );
}

