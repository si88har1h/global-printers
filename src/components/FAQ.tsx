'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/src/data/faqs';

const WA_LINK = 'https://wa.me/+919414259587';

// Only the original 8 homepage FAQs (service-specific FAQs live on their own pages)
const homepageFaqs = faqs.slice(0, 8);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homepageFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

// Split 8 FAQs into two columns of 4
const col1 = homepageFaqs.slice(0, 4);
const col2 = homepageFaqs.slice(4, 8);

export default function FAQ() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-padding bg-bg border-t border-border"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="section-container">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut' as const }}
        >
          <p className="label-mono mb-3">Common Questions</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              id="faq-heading"
              className="font-display text-[clamp(1.875rem,3.5vw,2.75rem)] font-normal leading-[1.2] text-text-primary"
            >
              Everything you need{' '}
              <em className="italic text-accent">
                to know.
              </em>
            </h2>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start lg:self-auto flex-shrink-0 inline-flex items-center gap-2 rounded-md font-semibold bg-cta hover:bg-cta-hover text-bg transition-all duration-150 hover:scale-[1.02] font-body text-sm px-6 py-3"
            >
              Ask on WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Two-column accordion grid */}
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-0">
          {/* Column 1 */}
          <div>
            {col1.map((faq, i) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openIds.has(faq.id)}
                onToggle={() => toggle(faq.id)}
                index={i}
              />
            ))}
          </div>

          {/* Column 2 */}
          <div>
            {col2.map((faq, i) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openIds.has(faq.id)}
                onToggle={() => toggle(faq.id)}
                index={i + col1.length}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// ── Individual accordion item ──
interface FAQItemProps {
  faq: { id: string; question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ faq, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, ease: 'easeOut' as const, delay: (index % 4) * 0.07 }}
      className="border-b border-border"
    >
      {/* Question row (button) */}
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 text-left py-6"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <span
          className={`font-body text-base font-medium leading-[1.5] transition-colors duration-200 ${isOpen ? 'text-accent' : 'text-text-primary'}`}
        >
          {faq.question}
        </span>

        {/* Icon */}
        <span
          className={`flex-shrink-0 mt-0.5 transition-colors duration-200 ${isOpen ? 'text-accent' : 'text-text-muted'}`}
          aria-hidden="true"
        >
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>

      {/* Answer — animated height */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${faq.id}`}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' as const }}
            className="overflow-hidden"
          >
            <p
              className="pt-2 pb-8 font-body text-base text-text-secondary leading-[1.75] max-w-[60ch]"
            >
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
