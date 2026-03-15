"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const milestones = [
  { year: "1996", label: "Founded in Bhilwara" },
  { year: "2010", label: "Expanded to D2C Supply Chain" },
  { year: "2020", label: "Pan-India Bulk Delivery" },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-padding bg-bg border-t border-border"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-[0.85fr_1fr] gap-12 lg:gap-20 items-center">
          {/* ── LEFT: Portrait ── */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
          >
            {/* Gold accent bar */}
            <div
              className="absolute -left-4 top-8 bottom-8 w-0.5 rounded-full bg-accent"
              aria-hidden="true"
            />

            {/* Portrait image */}
            <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
              <Image
                src="/images/about/owner-portrait.jpg"
                alt="Owner of Global Printers reviewing a freshly printed sample at the press — 30 years of craft in every detail"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                loading="lazy"
              />
              {/* Subtle bottom vignette */}
              <div
                className="absolute inset-x-0 bottom-0 h-32 pointer-events-none bg-gradient-to-t from-black/50 to-transparent"
                aria-hidden="true"
              />
            </div>

            {/* Est. badge — overlaps bottom of portrait */}
            <div
              className="absolute -bottom-5 -right-2 lg:-right-6 flex flex-col items-center justify-center w-24 h-24 rounded-full bg-surface border border-border"
            >
              <span className="font-mono text-xs text-text-muted tracking-[0.1em] uppercase">
                Est.
              </span>
              <span className="font-mono text-xl text-accent leading-[1.1]">
                1996
              </span>
            </div>
          </motion.div>

          {/* ── RIGHT: Story ── */}
          <div className="flex flex-col lg:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut" as const }}
            >
              <p className="label-mono mb-4">Our Story</p>
              <h2
                id="about-heading"
                className="font-display text-[clamp(1.875rem,3.5vw,2.75rem)] font-normal leading-[1.2] text-text-primary"
              >
                Built on Bhilwara's{" "}
                <em className="italic text-accent">
                  industrial backbone.
                </em>
              </h2>
            </motion.div>

            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                ease: "easeOut" as const,
                delay: 0.12,
              }}
            >
              <p className="font-body text-base text-text-secondary leading-[1.8] max-w-[60ch]">
                In 1996, we started in the industrial heart of Bhilwara,
                providing high-durability print solutions for the region's
                largest textile and transport giants. While the industry has
                moved from traditional looms to digital storefronts, our core
                remains the same: high-volume precision and absolute
                reliability.
              </p>
              <p className="font-body text-base text-text-secondary leading-[1.8] max-w-[60ch]">
                Today, we've bridged the gap between our manufacturing roots and
                the high-speed demands of Delhi NCR's D2C ecosystem. By
                combining decades of technical expertise with a tech-enabled
                supply chain, we deliver premium, high-GSM print assets at
                scale. We don't just take orders; we manage the print
                infrastructure that keeps your warehouse moving.
              </p>
            </motion.div>

            {/* Timeline milestones */}
            <motion.div
              className="flex flex-col gap-4 pt-2"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                ease: "easeOut" as const,
                delay: 0.22,
              }}
            >
              <div
                className="h-px w-full bg-border"
                aria-hidden="true"
              />
              <div className="flex flex-wrap gap-x-10 gap-y-4">
                {milestones.map(({ year, label }) => (
                  <div key={year} className="flex flex-col gap-0.5">
                    <span className="font-mono text-base text-accent leading-none">
                      {year}
                    </span>
                    <span className="font-body text-sm text-text-muted">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
