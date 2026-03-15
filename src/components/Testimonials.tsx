'use client';

import { motion } from 'framer-motion';
import { testimonials, type Testimonial } from '@/src/data/testimonials';

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="section-padding bg-surface border-t border-border"
    >
      <div className="section-container">

        {/* Header */}
        <motion.div
          className="mb-10 lg:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut' as const }}
        >
          <p className="label-mono mb-4">Client Voices</p>
          <h2
            id="testimonials-heading"
            className="font-display text-[clamp(1.875rem,3.5vw,2.75rem)] font-normal leading-[1.2] text-text-primary"
          >
            Results that{' '}
            <em className="italic text-accent">
              speak for themselves.
            </em>
          </h2>
        </motion.div>

        {/* Responsive grid: 1-col mobile, 2-col tablet, 3-col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

// ── Individual card ──
function TestimonialCard({
  testimonial: t,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.article
      className="flex flex-col h-full bg-bg border border-border rounded-lg p-6 lg:p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.45,
        ease: 'easeOut' as const,
        delay: (index % 3) * 0.1,
      }}
    >
      {/* Decorative opening quote mark */}
      <div
        aria-hidden="true"
        className="font-display text-[3rem] lg:text-[4.5rem] text-accent leading-[0.8] mb-3 lg:mb-5 select-none"
      >
        &ldquo;
      </div>

      {/* Quote text */}
      <blockquote
        className="flex-1 font-display italic text-base text-text-primary leading-[1.8] m-0"
      >
        {t.quote}
      </blockquote>

      {/* Divider */}
      <div
        className="mt-7 lg:mt-10 mb-5 lg:mb-6 h-px bg-border"
        aria-hidden="true"
      />

      {/* Attribution */}
      <footer className="flex items-center gap-3">
        {/* Initials avatar */}
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0 bg-surface-alt border border-border"
          aria-hidden="true"
        >
          <span className="font-mono text-xs text-accent tracking-[0.05em] font-medium">
            {t.initials.replace('.', '').replace('.', '')}
          </span>
        </div>

        {/* Role + industry */}
        <div className="flex flex-col gap-0.5">
          <span className="font-body text-sm font-medium text-text-secondary">
            {t.initials} &mdash; {t.role}
          </span>
          <span className="font-mono text-xs text-text-muted tracking-[0.08em] uppercase">
            {t.industry}
          </span>
        </div>
      </footer>
    </motion.article>
  );
}
