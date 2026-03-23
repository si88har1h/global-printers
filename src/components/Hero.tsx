"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/+919414259587";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: "easeOut" as const, delay: delay / 1000 },
});

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-bg"
    >
      {/* Paper / grain texture overlay at 8% */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.08,
        }}
      />

      {/* Radial gradient — subtle warm glow bottom-left */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 10% 90%, rgba(200,146,42,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10 w-full">
        {/* 58/42 grid on desktop, stacked on mobile */}
        <div className="grid lg:grid-cols-[1fr_0.72fr] gap-10 lg:gap-16 items-center lg:min-h-screen py-28 lg:py-0">
          {/* ── LEFT: Text ── */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            {/* Eyebrow */}
            <motion.p className="label-mono" {...fadeUp(0)}>
              Offset Printing&nbsp;•&nbsp;Est.&nbsp;1996
            </motion.p>

            {/* H1 */}
            <motion.h1
              className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.15] font-normal text-text-primary"
              {...fadeUp(150)}
            >
              Bhilwara's Premium Offset Printing Press —{" "}
              <em className="italic text-accent">
                On Time, Every Time
              </em>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="font-body text-lg leading-[1.75] max-w-[52ch] text-text-secondary"
              {...fadeUp(300)}
            >
              Offset printing in Bhilwara since 1996 — serving Delhi NCR's D2C ecosystem with premium, high-GSM print assets at scale.
            </motion.p>

            {/* CTAs */}
            <motion.div className="flex flex-wrap gap-5 mt-4" {...fadeUp(450)}>
              {/* Primary — gold filled */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[10px] px-9 py-[15px] rounded-md font-body text-base font-semibold tracking-[0.01em] transition-all duration-150 cursor-pointer no-underline bg-cta text-bg hover:bg-cta-hover hover:scale-[1.02]"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Get a Quote on WhatsApp
              </a>

              {/* Secondary — ghost */}
              <a
                href="#portfolio"
                className="inline-flex items-center gap-[10px] px-9 py-[15px] rounded-md font-body text-base font-semibold tracking-[0.01em] transition-all duration-150 cursor-pointer no-underline bg-transparent text-text-primary border border-border hover:border-accent"
              >
                View Our Work
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: Hero image ── */}
          <motion.div
            className="relative order-1 lg:order-2 rounded-lg overflow-hidden h-[clamp(220px,50vw,680px)]"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.2 }}
          >
            <Image
              src="/images/hero/hero.jpg"
              alt="Premium print samples — brochures, business cards, and catalogues arranged on a dark surface, showcasing Global Printers' offset printing quality"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-24 pointer-events-none bg-gradient-to-t from-bg to-transparent"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
