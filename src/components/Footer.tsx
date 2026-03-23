import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";

const WA_LINK = "https://wa.me/+919414259587";

const quickLinks = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

const servicePages = [
  { label: "Printing Press Bhilwara", href: "/printing-press-bhilwara" },
  { label: "Catalogue Printing", href: "/catalogue-printing-bhilwara" },
  { label: "Visiting Card Printing", href: "/visiting-card-printing-bhilwara" },
  { label: "Wedding Card Printing", href: "/wedding-card-printing-bhilwara" },
  { label: "Brochure Printing", href: "/brochure-printing-bhilwara" },
];

const contactItems = [
  {
    icon: MapPin,
    text: "Shop No. 16, Arihant Complex, Rajendra Marg, Opp. Hotel La Abode, Bhopal Ganj, Bhilwara, Rajasthan 311001",
    href: null,
  },
  { icon: Phone, text: "+91 94142 59587", href: "tel:+919414259587" },
  {
    icon: Mail,
    text: "globalprinter76@gmail.com",
    href: "mailto:globalprinter76@gmail.com",
  },
  { icon: Clock, text: "Mon – Sat, 11:00 AM – 7:00 PM", href: null },
];

export default function Footer() {
  return (
    <footer aria-label="Site footer" className="bg-bg border-t border-border">
      {/* Main columns */}
      <div className="section-container py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-6">
            <a href="#" aria-label="Global Printers — back to top">
              <Image
                src="/logo/logo.svg"
                alt="Global Printers"
                width={130}
                height={38}
                className="h-9 w-auto"
              />
            </a>

            <p className="font-body italic text-sm text-text-muted leading-relaxed max-w-[28ch]">
              "Bhilwara's offset printing press since 1996 —
              <br />
              exceptional quality, on time, every time."
            </p>

            {/* WhatsApp icon link */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start inline-flex items-center gap-2 px-4 py-2 rounded transition-colors duration-150 bg-accent/10 border border-accent/25 font-body text-sm text-accent"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={16} aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="flex flex-col gap-5">
            <p className="font-mono text-xs text-text-muted tracking-[0.15em] uppercase">
              Quick Links
            </p>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3 list-none p-0 m-0" role="list">
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="font-body text-sm text-text-secondary no-underline transition-colors duration-150 hover:text-text-primary"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3 — Service Pages */}
          <div className="flex flex-col gap-5">
            <p className="font-mono text-xs text-text-muted tracking-[0.15em] uppercase">
              Services
            </p>
            <nav aria-label="Service pages">
              <ul className="flex flex-col gap-3 list-none p-0 m-0" role="list">
                {servicePages.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="font-body text-sm text-text-secondary no-underline transition-colors duration-150 hover:text-text-primary"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 4 — Contact */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs text-text-muted tracking-[0.15em] uppercase">
              Contact
            </p>
            <address className="not-italic flex flex-col gap-4">
              {contactItems.map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex gap-2.5 items-start">
                  <Icon
                    size={14}
                    aria-hidden="true"
                    className="text-accent mt-[3px] shrink-0"
                  />
                  {href ? (
                    <a
                      href={href}
                      className="font-body text-sm text-text-secondary leading-[1.55] no-underline hover:text-text-primary transition-colors duration-150"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="font-body text-sm text-text-secondary leading-[1.55]">
                      {text}
                    </span>
                  )}
                </div>
              ))}
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-text-muted">
            © 2025 Global Printers. All rights reserved.
          </p>
          <p className="font-mono text-xs text-text-muted tracking-[0.08em]">
            EST. 1996 · BHILWARA, RAJASTHAN
          </p>
        </div>
      </div>
    </footer>
  );
}
