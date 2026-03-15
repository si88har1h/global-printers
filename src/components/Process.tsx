"use client";

import { motion } from "framer-motion";
import {
  MessageSquareText,
  Paintbrush2,
  ScanSearch,
  Printer,
  PackageCheck,
} from "lucide-react";

const WA_LINK = "https://wa.me/+919414259587";

const steps = [
  {
    number: "01",
    icon: MessageSquareText,
    title: "Brief",
    description:
      "Tell us what you need — quantity, size, material, and finish.",
  },
  {
    number: "02",
    icon: Paintbrush2,
    title: "Design",
    description: "Provide your artwork or use our in-house design service.",
  },
  {
    number: "03",
    icon: ScanSearch,
    title: "Proof",
    description:
      "Review a digital or physical proof before we touch the press.",
  },
  {
    number: "04",
    icon: Printer,
    title: "Print",
    description: "We run the press with precision and full quality control.",
  },
  {
    number: "05",
    icon: PackageCheck,
    title: "Deliver",
    description: "Packaged carefully and dispatched on time, every time.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="section-padding bg-bg border-t border-border"
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" as const }}
        >
          <p className="label-mono mb-3">How It Works</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              id="process-heading"
              className="font-display text-[clamp(1.875rem,3.5vw,2.75rem)] font-normal leading-[1.2] text-text-primary"
            >
              Five steps from brief{" "}
              <em className="italic text-accent">
                to delivery.
              </em>
            </h2>
            <p className="font-body text-sm text-text-muted max-w-[38ch] leading-[1.6] shrink-0">
              No ambiguity, no surprises. Just a clear, reliable process built
              around your deadline.
            </p>
          </div>
        </motion.div>

        {/* ── DESKTOP: Horizontal flow ── */}
        <div className="hidden lg:block">
          {/* Connector line */}
          <div className="relative mb-0">
            <div
              className="absolute top-5 left-[calc(100%/10)] right-[calc(100%/10)] h-px bg-border"
              aria-hidden="true"
            />

            {/* Steps */}
            <div className="grid grid-cols-5 gap-6">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    className="flex flex-col items-center text-center gap-4 pt-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut" as const,
                      delay: i * 0.1,
                    }}
                  >
                    {/* Dot on the line */}
                    <div
                      className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-bg border-2 border-accent"
                    >
                      <Icon
                        size={16}
                        aria-hidden="true"
                        className="text-accent"
                      />
                    </div>

                    {/* Step number */}
                    <span
                      className="font-mono text-[clamp(2.5rem,3.5vw,4rem)] text-accent opacity-[0.18] leading-none tracking-[-0.03em]"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>

                    {/* Title */}
                    <h3
                      className="font-display text-xl font-normal text-text-primary leading-[1.2] -mt-3"
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-sm text-text-secondary leading-[1.65] max-w-[18ch]">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── MOBILE: Vertical timeline ── */}
        <div className="lg:hidden flex flex-col">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            return (
              <motion.div
                key={step.number}
                className="flex gap-5"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut" as const,
                  delay: i * 0.08,
                }}
              >
                {/* Timeline spine */}
                <div
                  className="flex flex-col items-center w-10 shrink-0"
                >
                  {/* Circle marker */}
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0 bg-bg border-2 border-accent"
                  >
                    <Icon
                      size={16}
                      aria-hidden="true"
                      className="text-accent"
                    />
                  </div>
                  {/* Vertical connector */}
                  {!isLast && (
                    <div
                      className="flex-1 w-px my-1 bg-border min-h-[48px]"
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Step content */}
                <div className="flex flex-col gap-2 pb-10">
                  <span className="font-mono text-xs text-accent tracking-[0.12em]">
                    STEP {step.number}
                  </span>
                  <h3 className="font-display text-2xl font-normal text-text-primary leading-[1.2]">
                    {step.title}
                  </h3>
                  <p className="font-body text-base text-text-secondary leading-[1.65] max-w-[42ch]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-16 pt-10 border-t border-border"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.2 }}
        >
          <div className="flex flex-col gap-1">
            <p className="font-body text-base text-text-primary font-medium">
              Ready to start your next print run?
            </p>
            <p className="font-body text-sm text-text-muted">
              Message us on WhatsApp — we respond within a few hours.
            </p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-md font-semibold bg-cta hover:bg-cta-hover text-bg transition-all duration-150 hover:scale-[1.02] font-body text-sm px-8 py-3.5 tracking-[0.01em]"
          >
            Start with a Brief
          </a>
        </motion.div>
      </div>
    </section>
  );
}
