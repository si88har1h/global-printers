'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import {
  portfolioItems,
  portfolioCategories,
  type PortfolioCategory,
  type PortfolioItem,
} from '@/src/data/portfolio';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);

  const filtered =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  // Close lightbox on Escape
  const closeLightbox = useCallback(() => setLightboxItem(null), []);
  useEffect(() => {
    if (!lightboxItem) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeLightbox(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxItem, closeLightbox]);

  return (
    <>
      <section
        id="portfolio"
        aria-labelledby="portfolio-heading"
        className="section-padding bg-surface"
      >
        <div className="section-container">

          {/* Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' as const }}
          >
            <p className="label-mono mb-4">Our Work</p>
            <h2
              id="portfolio-heading"
              className="font-display text-[clamp(1.875rem,3.5vw,2.75rem)] font-normal leading-[1.2] text-text-primary"
            >
              Proof in every print.
            </h2>
            <p
              className="mt-3 font-body text-base text-text-secondary max-w-[55ch] leading-[1.7]"
            >
              Browse a selection of work across our service categories. Click any
              image for a closer look.
            </p>
          </motion.div>

          {/* Filter tabs — horizontally scrollable on mobile */}
          <motion.div
            className="mb-12 -mx-6 px-6 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0 overflow-x-auto"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: 'easeOut' as const, delay: 0.1 }}
          >
            <div className="flex gap-2 pb-2 lg:flex-wrap lg:pb-0 min-w-max">
              {portfolioCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-5 py-2.5 rounded transition-all duration-200 whitespace-nowrap font-body text-sm border ${
                    activeCategory === cat
                      ? 'font-semibold bg-accent text-bg border-accent'
                      : 'font-normal bg-surface-alt text-text-secondary border-border'
                  }`}
                  aria-pressed={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <PortfolioCard
                  key={item.id}
                  item={item}
                  onOpen={() => setLightboxItem(item)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <p className="text-center py-16 font-body text-text-muted">
              No images in this category yet.
            </p>
          )}

        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            key="lightbox"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8 bg-black/[0.92]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`Lightbox: ${lightboxItem.title}`}
          >
            {/* Inner content — stop propagation so clicking image doesn't close */}
            <motion.div
              className="relative flex flex-col items-center gap-4 max-w-4xl w-full"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' as const }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-2 -right-2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-border"
                aria-label="Close lightbox"
              >
                <X size={18} className="text-text-primary" />
              </button>

              {/* Full-size image */}
              <div className="relative w-full rounded-lg overflow-hidden aspect-[4/3] max-h-[75vh]">
                <Image
                  src={lightboxItem.full}
                  alt={lightboxItem.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 900px"
                />
              </div>

              {/* Caption */}
              <div className="flex flex-col items-center gap-1 text-center">
                <p className="font-display text-lg text-text-primary">
                  {lightboxItem.title}
                </p>
                <p className="label-mono text-text-muted text-xs">
                  {lightboxItem.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ── Individual portfolio card ──
function PortfolioCard({
  item,
  onOpen,
}: {
  item: PortfolioItem;
  onOpen: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3, ease: 'easeOut' as const }}
      className="group relative overflow-hidden cursor-pointer bg-bg aspect-[4/3]"
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpen(); }}
      aria-label={`View ${item.title} — ${item.category}`}
    >
      {/* Thumbnail */}
      <Image
        src={item.thumb}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
      >
        <p className="font-display text-base text-text-primary leading-[1.3]">
          {item.title}
        </p>
        <p className="label-mono mt-1 text-accent text-xs">
          {item.category}
        </p>

        {/* Zoom icon */}
        <div
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded bg-accent/15 border border-accent/[0.3]"
        >
          <ZoomIn size={16} className="text-accent" aria-hidden="true" />
        </div>
      </div>
    </motion.div>
  );
}
