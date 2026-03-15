'use client';

import { motion } from 'framer-motion';
import {
  Award, GitMerge, Package, Gem,
  Clock, Sparkles, Truck, ScanEye,
} from 'lucide-react';

const WA_LINK = 'https://wa.me/+919414259587';

const differentiators = [
  {
    icon: Award,
    title: '30 Years of Expertise',
    detail: 'Three decades of offset printing — every press run refined by experience.',
  },
  {
    icon: GitMerge,
    title: 'End-to-End Service',
    detail: 'Brief, design, proof, print, deliver — one partner for every step.',
  },
  {
    icon: Package,
    title: 'Startup-Friendly MOQs',
    detail: 'Corporate-grade capacity that scales down for growing businesses.',
  },
  {
    icon: Gem,
    title: 'Premium High-GSM Stock',
    detail: 'Consistent color quality and weight — run after run, order after order.',
  },
  {
    icon: Clock,
    title: '72-Hour Turnaround',
    detail: 'Standard delivery in 72 hours. Rush jobs discussed case-by-case.',
  },
  {
    icon: Sparkles,
    title: 'Premium Finish Options',
    detail: 'Matte, Gloss Lamination, Spot UV & Embossing — all under one roof.',
  },
  {
    icon: Truck,
    title: 'Pan-India Delivery',
    detail: 'Bulk orders dispatched nationwide. Pickup available for small runs.',
  },
  {
    icon: ScanEye,
    title: 'Digital Proofing',
    detail: 'A final approved proof before every full print run. Zero surprises.',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      aria-labelledby="why-heading"
      className="section-padding bg-surface border-t border-border"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-14 lg:gap-20 items-start">

          {/* ── LEFT: Heading + blurb + CTA ── */}
          <motion.div
            className="lg:sticky lg:top-32 flex flex-col gap-9"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' as const }}
          >
            <p className="label-mono">Why Global Printers</p>

            <h2
              id="why-heading"
              className="font-display text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.15] text-text-primary"
            >
              Not just a vendor.{' '}
              <em className="italic text-accent">
                Your print infrastructure.
              </em>
            </h2>

            <p className="font-body text-base text-text-secondary leading-[1.75] max-w-[48ch]">
              Most printers take orders. We take ownership — of quality, timelines,
              and the consistency that keeps your brand looking sharp at every
              customer touchpoint.
            </p>

            {/* Decorative quote mark */}
            <div
              aria-hidden="true"
              className="font-display text-[6rem] text-accent opacity-[0.12] leading-none -mt-4 select-none"
            >
              "
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start inline-flex items-center gap-2 rounded-md font-semibold bg-cta hover:bg-cta-hover text-bg transition-all duration-150 hover:scale-[1.02] font-body text-sm px-8 py-3.5 tracking-[0.01em]"
            >
              Get a Free Quote
            </a>
          </motion.div>

          {/* ── RIGHT: Feature rows ── */}
          <div className="grid sm:grid-cols-2 gap-px bg-border">
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="flex gap-5 p-8 lg:p-10 bg-surface-alt"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeOut' as const,
                    delay: (i % 2) * 0.08,
                  }}
                >
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded bg-accent/10"
                  >
                    <Icon
                      size={18}
                      aria-hidden="true"
                      className="text-accent"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-3">
                    <h3 className="font-body text-base font-semibold text-text-primary leading-[1.3]">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-text-secondary leading-[1.65]">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
