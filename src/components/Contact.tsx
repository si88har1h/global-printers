"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

const WA_LINK = "https://wa.me/+919414259587";

const serviceOptions = [
  "Brochures & Pamphlets",
  "Visiting Cards",
  "Catalogues",
  "Stickers & Labels",
  "Posters & Banners",
  "Books & Reports",
  "Sticker Bands",
  "Billbooks",
  "Letterheads",
  "Garment Tags",
  "Food Menus",
  "Wedding Cards",
  "Other",
];

interface FormValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  quantity: string;
  message: string;
  file: FileList;
}

const contactDetails = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 94142 59587",
    href: WA_LINK,
    highlight: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 94142 59587",
    href: "tel:+919414259587",
    highlight: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: "globalprinter76@gmail.com",
    href: "mailto:globalprinter76@gmail.com",
    highlight: false,
  },
  {
    icon: MapPin,
    label: "Address",
    value:
      "Shop No. 16, Arihant Complex, Rajendra Marg, Opp. Hotel La Abode, Bhopal Ganj, Bhilwara, Rajasthan 311001",
    href: null,
    highlight: false,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Sat, 11:00 AM – 7:00 PM",
    href: null,
    highlight: false,
  },
];

// Tailwind class strings replacing the old style objects
const inputClass =
  "font-body text-sm text-text-primary bg-bg border border-border rounded-md px-4 py-3 w-full outline-none";
const labelClass = "font-body text-sm text-text-secondary mb-2 block";
const errorClass = "font-body text-xs text-error mt-1";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    // TODO: wire up to a server action / Resend / Nodemailer
    console.log("Quote request:", data);
    await new Promise((r) => setTimeout(r, 600)); // simulate async
    setSubmitted(true);
    reset();
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-padding bg-surface border-t border-border"
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="mb-[72px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" as const }}
        >
          <p className="label-mono mb-3">Get in Touch</p>
          <h2
            id="contact-heading"
            className="font-display text-[clamp(1.875rem,3.5vw,2.75rem)] font-normal leading-[1.2] text-text-primary"
          >
            Let's talk about{" "}
            <em className="italic text-accent">your next print run in Bhilwara.</em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16">
          {/* ── LEFT: Contact info + map ── */}
          <motion.div
            className="flex flex-col gap-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut" as const }}
          >
            {/* WhatsApp CTA — prominent at top */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg font-semibold transition-all duration-150 hover:scale-[1.01] px-7 py-4 bg-cta text-bg font-body text-base"
            >
              <MessageCircle size={22} aria-hidden="true" />
              <span>
                Message us on WhatsApp
                <span className="block font-normal text-xs opacity-75 mt-px">
                  Fastest way to get a quote
                </span>
              </span>
            </a>

            {/* Contact detail rows */}
            <div className="flex flex-col gap-6">
              {contactDetails
                .slice(1)
                .map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded mt-0.5 bg-accent/10">
                      <Icon
                        size={15}
                        aria-hidden="true"
                        className="text-accent"
                      />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-mono text-xs text-text-muted tracking-[0.1em] uppercase">
                        {label}
                      </span>
                      {href ? (
                        <a
                          href={href}
                          className="font-body text-sm text-text-secondary leading-[1.5] no-underline hover:text-text-primary transition-colors duration-150"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="font-body text-sm text-text-secondary leading-[1.5]">
                          {value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
            </div>

            {/* Google Maps embed */}
            <div className="rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.852059940484!2d74.63089127609986!3d25.342744877617605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c34842319287%3A0xdf798b024d28502c!2sGlobal%20Printers!5e0!3m2!1sen!2sin!4v1773337668175!5m2!1sen!2sin"
                width="100%"
                height="280"
                style={{
                  border: 0,
                  display: "block",
                  filter: "grayscale(0.3) contrast(1.05)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Global Printers location on Google Maps"
              />
            </div>
          </motion.div>

          {/* ── RIGHT: Quote form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              ease: "easeOut" as const,
              delay: 0.1,
            }}
          >
            <div className="rounded-lg p-8 lg:p-12 bg-surface-alt border border-border">
              <p className="label-mono mb-8">Request a Quote</p>

              {submitted ? (
                /* Success state */
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <CheckCircle size={48} className="text-success" />
                  <p className="font-display text-xl text-text-primary">
                    Request sent!
                  </p>
                  <p className="font-body text-sm text-text-secondary max-w-[36ch]">
                    We'll get back to you within a few hours. For faster
                    response, message us on WhatsApp.
                  </p>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 rounded-md font-semibold bg-cta hover:bg-cta-hover text-bg transition-colors duration-150 font-body text-sm px-6 py-3"
                  >
                    <MessageCircle size={16} />
                    Open WhatsApp
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="flex flex-col gap-5"
                >
                  {/* Name + Company */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className={inputClass}
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <p className={errorClass}>{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="company" className={labelClass}>
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Optional"
                        className={inputClass}
                        {...register("company")}
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        className={inputClass}
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: "Enter a valid email",
                          },
                        })}
                      />
                      {errors.email && (
                        <p className={errorClass}>{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        className={inputClass}
                        {...register("phone", {
                          required: "Phone is required",
                        })}
                      />
                      {errors.phone && (
                        <p className={errorClass}>{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Service + Quantity */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className={labelClass}>
                        Service Type *
                      </label>
                      <select
                        id="service"
                        className={`${inputClass} cursor-pointer`}
                        {...register("service", {
                          required: "Please select a service",
                        })}
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className={errorClass}>{errors.service.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="quantity" className={labelClass}>
                        Quantity
                      </label>
                      <input
                        id="quantity"
                        type="number"
                        placeholder="e.g. 500"
                        min="1"
                        className={inputClass}
                        {...register("quantity")}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Size, finish, paper type, deadline, or any other requirements…"
                      className={`${inputClass} resize-y`}
                      {...register("message")}
                    />
                  </div>

                  {/* File upload */}
                  <div>
                    <label htmlFor="file" className={labelClass}>
                      Artwork File (optional)
                    </label>
                    <input
                      id="file"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className={`${inputClass} cursor-pointer px-4 py-[10px] text-text-muted`}
                      {...register("file")}
                    />
                    <p className="font-body text-xs text-text-muted mt-1">
                      PDF, JPG or PNG — max 10MB
                    </p>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 w-full flex items-center justify-center gap-2 rounded-md font-semibold bg-cta hover:bg-cta-hover text-bg transition-all duration-150 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 font-body text-base py-[15px] tracking-[0.01em]"
                  >
                    {isSubmitting ? "Sending…" : "Send My Request"}
                  </button>

                  <p className="text-center font-body text-xs text-text-muted">
                    Or message directly on{" "}
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline"
                    >
                      WhatsApp
                    </a>{" "}
                    for a faster response.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
