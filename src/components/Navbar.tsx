"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const WA_LINK = "https://wa.me/+919414259587";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
            {/* Logo */}
            <a
              href="#"
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
            </a>

            {/* Desktop nav links */}
            <ul
              className="hidden lg:flex items-center gap-8 list-none m-0 p-0"
              role="list"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative font-body text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 group pb-1"
                  >
                    {link.label}
                    {/* Gold underline on hover */}
                    <span
                      className="absolute bottom-0 left-0 h-px bg-accent w-0 group-hover:w-full transition-all duration-200"
                      aria-hidden="true"
                    />
                  </a>
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
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.07,
                    duration: 0.22,
                    ease: "easeOut",
                  }}
                  className="font-display text-4xl font-medium text-text-primary hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
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
                  delay: navLinks.length * 0.07,
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
