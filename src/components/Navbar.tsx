"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const servicePages = [
  { label: "Printing Press Bhilwara", href: "/printing-press-bhilwara" },
  { label: "Catalogue Printing", href: "/catalogue-printing-bhilwara" },
  { label: "Visiting Card Printing", href: "/visiting-card-printing-bhilwara" },
  { label: "Wedding Card Printing", href: "/wedding-card-printing-bhilwara" },
  { label: "Brochure Printing", href: "/brochure-printing-bhilwara" },
  {
    label: "Sticker & Label Printing",
    href: "/sticker-label-printing-bhilwara",
  },
  { label: "Garment Hang Tags", href: "/garment-hang-tags-printing" },
  {
    label: "Offset Printing Services",
    href: "/offset-printing-services-bhilwara",
  },
  { label: "Book & Report Printing", href: "/book-report-printing-bhilwara" },
  { label: "Food Menu Printing", href: "/food-menu-printing" },
];

const navLinks = [
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

const WA_LINK = "https://wa.me/+919414259587";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-surface border-b border-border backdrop-blur-md"
            : "border-b border-transparent",
        ].join(" ")}
      >
        <div className="section-container">
          <nav
            className="flex items-center justify-between h-[72px]"
            aria-label="Main navigation"
          >
            {/* Logo — use Link instead of <a> */}
            <Link
              href="/"
              aria-label="Global Printers — home"
              className="flex-shrink-0"
            >
              <Image
                src="/logo/logo.svg"
                alt="Global Printers"
                width={140}
                height={40}
                priority
                className="h-9 w-auto"
              />
            </Link>

            {/* Desktop nav links */}
            <ul
              className="hidden lg:flex items-center gap-8 list-none m-0 p-0"
              role="list"
            >
              {/* Services dropdown */}
              <li ref={dropdownRef} className="relative">
                <button
                  onClick={() => setServicesOpen((v) => !v)}
                  className="relative flex items-center gap-1 font-body text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 group"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className="absolute bottom-0 left-0 h-px bg-accent w-0 group-hover:w-full transition-all duration-200"
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-[calc(100%+12px)] left-0 z-50 w-64 rounded-md bg-surface border border-border shadow-xl py-2"
                      role="menu"
                    >
                      {/* Anchor link back to homepage services section */}
                      <Link
                        href="/#services"
                        onClick={() => setServicesOpen(false)}
                        className="block px-4 py-2.5 font-body text-sm text-text-muted hover:text-accent hover:bg-surface-alt transition-colors duration-150"
                        role="menuitem"
                      >
                        All Services →
                      </Link>
                      <div className="my-1 border-t border-border" />
                      {servicePages.map(({ label, href }) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={() => setServicesOpen(false)}
                          className="block px-4 py-2.5 font-body text-sm text-text-secondary hover:text-accent hover:bg-surface-alt transition-colors duration-150"
                          role="menuitem"
                        >
                          {label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative font-body text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 group pb-1"
                  >
                    {link.label}
                    {/* Gold underline on hover */}
                    <span
                      className="absolute bottom-0 left-0 h-px bg-accent w-0 group-hover:w-full transition-all duration-200"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 rounded-md font-semibold bg-cta hover:bg-cta-hover text-bg transition-all duration-150 hover:scale-[1.02] font-body text-sm px-6 py-3 tracking-[0.01em]"
            >
              Get a Quote
            </a>

            {/* Hamburger (mobile/tablet) */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded text-text-primary"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 bottom-0 top-[72px] z-40 bg-bg flex flex-col"
            aria-modal="true"
            role="dialog"
            aria-label="Navigation menu"
          >
            <nav
              className="flex flex-col items-center justify-center flex-1 gap-10"
              aria-label="Mobile navigation"
            >
              {/* Mobile Services — collapsible */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0, duration: 0.22, ease: "easeOut" }}
                className="flex flex-col items-center gap-3"
              >
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="flex items-center gap-2 font-display text-4xl font-medium text-text-primary hover:text-accent transition-colors duration-200"
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <ChevronDown
                    size={24}
                    className={`transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="overflow-hidden flex flex-col items-center gap-2"
                    >
                      {servicePages.map(({ label, href }) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={closeMenu}
                          className="font-body text-base text-text-secondary hover:text-accent transition-colors duration-150"
                        >
                          {label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: (i + 1) * 0.07,
                    duration: 0.22,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="font-display text-4xl font-medium text-text-primary hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* CTA in mobile menu */}
              <motion.a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: (navLinks.length + 1) * 0.07,
                  duration: 0.22,
                  ease: "easeOut",
                }}
                className="mt-2 inline-flex items-center gap-2 rounded-md font-semibold bg-cta hover:bg-cta-hover text-bg transition-colors duration-150 font-body text-base px-9 py-[14px]"
              >
                Get a Quote on WhatsApp
              </motion.a>
            </nav>

            {/* Bottom legal line */}
            <p className="text-center pb-8 text-text-muted font-mono text-xs tracking-[0.1em]">
              EST. 1996 · BHILWARA, RAJASTHAN
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
