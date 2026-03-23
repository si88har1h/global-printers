"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  CreditCard,
  BookMarked,
  Tag,
  Image,
  Library,
  Layers,
  FileText,
  Mail,
  Scissors,
  UtensilsCrossed,
  Heart,
  type LucideProps,
} from "lucide-react";
import { services } from "@/src/data/services";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  BookOpen,
  CreditCard,
  BookMarked,
  Tag,
  Image,
  Library,
  Layers,
  FileText,
  Mail,
  Scissors,
  UtensilsCrossed,
  Heart,
};

const WA_LINK = "https://wa.me/+919414259587";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-padding bg-bg"
    >
      <div className="section-container">
        {/* Section header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" as const }}
        >
          <p className="label-mono mb-3">What We Print</p>
          <h2
            id="services-heading"
            className="font-display text-[clamp(1.875rem,3.5vw,2.75rem)] font-normal leading-tight text-text-primary max-w-[20ch]"
          >
            Twelve categories.
            <br />
            <em className="italic text-accent">One trusted press in Bhilwara.</em>
          </h2>
          <p className="mt-6 font-body text-base text-text-secondary leading-[1.75] max-w-[58ch]">
            From everyday business stationery to premium wedding invitations —
            we handle every print need with the same precision and consistency,
            every single run.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, i) => {
            const Icon = iconMap[service.iconName];
            return (
              <ServiceCard
                key={service.id}
                service={service}
                Icon={Icon}
                index={i}
              />
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.2 }}
        >
          <p className="font-body text-base text-text-secondary">
            Don't see what you need? We handle custom requests too.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-md font-semibold bg-cta hover:bg-cta-hover text-bg transition-all duration-150 hover:scale-[1.02] px-6 py-3 text-sm font-body"
          >
            Ask on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: (typeof services)[number];
  Icon: React.ComponentType<LucideProps>;
  index: number;
}

function ServiceCard({ service, Icon, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.45,
        ease: "easeOut" as const,
        delay: (index % 3) * 0.08,
      }}
      className="group flex flex-col gap-5 px-8 py-10 lg:px-10 lg:py-12 bg-surface transition-transform duration-200 cursor-default"
      whileHover={{ y: -4 }}
    >
      {/* Icon */}
      {Icon && (
        <div className="w-12 h-12 flex items-center justify-center rounded bg-accent/10">
          <Icon size={24} aria-hidden="true" className="text-accent" />
        </div>
      )}

      {/* Service name */}
      <h3 className="font-display text-xl font-normal text-text-primary leading-snug -mt-1">
        {service.name}
      </h3>

      {/* Description */}
      <p className="font-body text-sm text-text-secondary leading-[1.7] grow -mt-1">
        {service.description}
      </p>

      {/* Gold rule on hover */}
      <div
        className="h-px mt-1 bg-accent opacity-0 scale-x-0 origin-left transition-all duration-300 group-hover:opacity-100 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </motion.div>
  );
}
