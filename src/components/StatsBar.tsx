"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "30+", label: "Years in Business" },
  { value: "50+", label: "Industries Served" },
  { value: "72hr", label: "Standard Turnaround" },
  { value: "500+", label: "Paper & Finish Combinations" },
];

export default function StatsBar() {
  return (
    <section
      aria-label="Key numbers"
      className="bg-surface border-t border-border border-b border-border"
    >
      <div className="section-container">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                ease: "easeOut" as const,
                delay: i * 0.1,
              }}
              className="flex flex-col items-center justify-center gap-4 py-14 lg:py-20 text-center bg-surface"
            >
              <span className="font-mono text-[clamp(2rem,4vw,3rem)] text-accent leading-none tracking-[-0.02em]">
                {stat.value}
              </span>
              <span className="font-body text-sm text-text-secondary max-w-[12ch] leading-[1.4]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
