'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, MessageCircle, Phone } from 'lucide-react';
import type { FAQ } from '@/src/data/faqs';
import type { PortfolioItem } from '@/src/data/portfolio';

const WA_LINK = 'https://wa.me/+919414259587';

export interface ServiceFeature {
  label: string;
  detail: string;
}

export interface RelatedPage {
  title: string;
  href: string;
}

export interface ServicePageProps {
  /** Exact keyword for H1 */
  h1: string;
  /** 1-2 sentence subheadline */
  subheadline: string;
  /** Body intro paragraph (1-3 sentences) */
  intro: string;
  /** 4-6 feature bullets */
  features: ServiceFeature[];
  /** Portfolio items to show (pre-filtered by category, max 4) */
  portfolioItems: PortfolioItem[];
  /** 3-4 FAQs relevant to this service */
  faqs: FAQ[];
  /** Schema.org @type string for the Service schema */
  serviceType: string;
  /** Links to related service pages for internal linking */
  relatedPages: RelatedPage[];
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: 'easeOut' as const, delay },
});

export default function ServicePageLayout({
  h1,
  subheadline,
  intro,
  features,
  portfolioItems,
  faqs,
  relatedPages,
}: ServicePageProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <main>
      {/* ── Hero ── */}
      <section className="pt-36 pb-20 lg:pt-44 lg:pb-28 section-padding bg-bg border-b border-border">
        <div className="section-container">
          <motion.p
            {...fadeUp(0)}
            className="label-mono mb-4 text-accent"
          >
            GLOBAL PRINTERS · EST. 1996 · BHILWARA
          </motion.p>

          <motion.h1
            {...fadeUp(0.08)}
            className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-normal leading-[1.15] text-text-primary mb-6 max-w-[20ch]"
          >
            {h1}
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="font-body text-lg text-text-secondary leading-[1.7] max-w-[55ch] mb-10"
          >
            {subheadline}
          </motion.p>

          <motion.div
            {...fadeUp(0.24)}
            className="flex flex-wrap gap-4"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md font-semibold bg-cta hover:bg-cta-hover text-bg transition-all duration-150 hover:scale-[1.02] font-body text-sm px-7 py-3.5"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Get a Quote on WhatsApp
            </a>
            <a
              href="tel:+919414259587"
              className="inline-flex items-center gap-2 rounded-md font-semibold border border-border text-text-primary hover:border-accent hover:text-accent transition-all duration-150 font-body text-sm px-7 py-3.5"
            >
              <Phone size={16} aria-hidden="true" />
              +91 94142 59587
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Intro + Features ── */}
      <section className="section-padding bg-surface border-b border-border">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div {...fadeUp(0)}>
              <p className="label-mono mb-4">Why Choose Us</p>
              <h2 className="font-display text-[clamp(1.5rem,2.8vw,2.25rem)] font-normal leading-[1.25] text-text-primary mb-6">
                Premium quality printing in Bhilwara, delivered on time.
              </h2>
              <p className="font-body text-base text-text-secondary leading-[1.75] max-w-[60ch]">
                {intro}
              </p>
            </motion.div>

            <motion.ul
              {...fadeUp(0.1)}
              className="flex flex-col gap-6 list-none p-0 m-0"
              role="list"
            >
              {features.map(({ label, detail }, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span
                    className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent block" />
                  </span>
                  <div>
                    <p className="font-body text-sm font-semibold text-text-primary mb-0.5">
                      {label}
                    </p>
                    <p className="font-body text-sm text-text-secondary leading-[1.6]">
                      {detail}
                    </p>
                  </div>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ── Portfolio Samples ── */}
      {portfolioItems.length > 0 && (
        <section className="section-padding bg-bg border-b border-border">
          <div className="section-container">
            <motion.div {...fadeUp(0)} className="mb-12">
              <p className="label-mono mb-3">Our Work</p>
              <h2 className="font-display text-[clamp(1.5rem,2.8vw,2.25rem)] font-normal leading-[1.25] text-text-primary">
                Print samples from our Bhilwara press.
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {portfolioItems.slice(0, 4).map((item, i) => (
                <motion.div
                  key={item.id}
                  {...fadeUp(i * 0.07)}
                  className="group relative aspect-[4/3] overflow-hidden rounded bg-surface"
                >
                  <Image
                    src={item.thumb}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="font-body text-xs text-text-primary font-medium">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {faqs.length > 0 && (
        <section className="section-padding bg-surface border-b border-border">
          <div className="section-container max-w-3xl">
            <motion.div {...fadeUp(0)} className="mb-12">
              <p className="label-mono mb-3">Common Questions</p>
              <h2 className="font-display text-[clamp(1.5rem,2.8vw,2.25rem)] font-normal leading-[1.25] text-text-primary">
                Frequently asked questions.
              </h2>
            </motion.div>

            <div>
              {faqs.map((faq, i) => (
                <motion.div
                  key={faq.id}
                  {...fadeUp(i * 0.07)}
                  className="border-b border-border"
                >
                  <button
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="w-full flex items-start justify-between gap-4 text-left py-6"
                    aria-expanded={openId === faq.id}
                  >
                    <span
                      className={`font-body text-base font-medium leading-[1.5] transition-colors duration-200 ${openId === faq.id ? 'text-accent' : 'text-text-primary'}`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 mt-0.5 transition-colors duration-200 ${openId === faq.id ? 'text-accent' : 'text-text-muted'}`}
                      aria-hidden="true"
                    >
                      {openId === faq.id ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeOut' as const }}
                        className="overflow-hidden"
                      >
                        <p className="pt-2 pb-8 font-body text-base text-text-secondary leading-[1.75] max-w-[60ch]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA Banner ── */}
      <section className="section-padding bg-bg border-b border-border">
        <div className="section-container text-center">
          <motion.div {...fadeUp(0)} className="max-w-2xl mx-auto">
            <p className="label-mono mb-4">Get Started</p>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-normal leading-[1.2] text-text-primary mb-4">
              Ready to print? Message us on WhatsApp.
            </h2>
            <p className="font-body text-base text-text-secondary leading-[1.7] mb-8">
              Share your requirements and we'll send a quote within the hour. Based in Bhilwara,
              we serve pan-India for bulk orders.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md font-semibold bg-cta hover:bg-cta-hover text-bg transition-all duration-150 hover:scale-[1.02] font-body text-base px-9 py-4"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Get a Quote on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Related Service Pages (Internal Links) ── */}
      {relatedPages.length > 0 && (
        <section className="section-padding bg-surface">
          <div className="section-container">
            <motion.div {...fadeUp(0)} className="mb-10">
              <p className="label-mono mb-3">More Services</p>
              <h2 className="font-display text-[clamp(1.25rem,2vw,1.75rem)] font-normal leading-[1.3] text-text-primary">
                Other printing services in Bhilwara.
              </h2>
            </motion.div>
            <div className="flex flex-wrap gap-3">
              {relatedPages.map(({ title, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-border text-text-secondary hover:border-accent hover:text-accent transition-all duration-150 font-body text-sm"
                >
                  {title}
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
