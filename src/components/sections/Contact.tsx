"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MailIcon, GitHubIcon, LinkedInIcon, TwitterIcon } from "@/components/ui/Icons";

const contactLinks = [
  {
    key: "email",
    icon: MailIcon,
    href: "mailto:your@email.com",
    value: "your@email.com",
    color: "#00ff88",
  },
  {
    key: "github",
    icon: GitHubIcon,
    href: "https://github.com/Steadylove",
    value: "@Steadylove",
    color: "#ffffff",
  },
  {
    key: "linkedin",
    icon: LinkedInIcon,
    href: "https://linkedin.com/in/yourusername",
    value: "/in/yourusername",
    color: "#0077b5",
  },
  {
    key: "twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/yourusername",
    value: "@yourusername",
    color: "#1da1f2",
  },
];

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="relative flex flex-1 flex-col justify-center bg-(--color-bg-secondary) py-20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="stars" />
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-accent)/5 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] translate-x-1/2 translate-y-1/2 rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      <div className="section-container relative z-10 pt-16">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-4 flex items-center justify-center gap-6">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-(--color-accent)/30" />
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              <span className="font-mono text-(--color-accent) opacity-50">{"<"}</span>
              {t("title")}
              <span className="font-mono text-(--color-accent) opacity-50">{"/>"}</span>
            </h2>
            <div className="h-px w-16 bg-linear-to-l from-transparent to-(--color-accent)/30" />
          </div>
          <p className="mx-auto max-w-2xl text-base text-(--color-text-secondary)">
            {t("description")}
          </p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Main CTA + Social Links in One Row */}
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-8">
            {/* Main CTA */}
            <motion.a
              href="mailto:your@email.com"
              className="group relative inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-xl bg-(--color-accent) px-8 py-4 font-bold !text-gray-900 shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MailIcon className="h-5 w-5" />
              <span className="relative z-10 tracking-wide">{t("cta")}</span>
              <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 ease-out group-hover:translate-x-0" />
            </motion.a>

            {/* Divider */}
            <div className="hidden h-8 w-px bg-(--color-border) lg:block" />

            {/* Social Links - Compact */}
            <div className="flex items-center gap-3">
              {contactLinks.slice(1).map((link, index) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-(--glass-border) bg-(--glass-bg) backdrop-blur-md transition-all hover:border-(--color-accent)/40 hover:bg-(--color-bg-tertiary)"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.key}
                >
                  <link.icon
                    className="h-5 w-5 transition-colors group-hover:text-(--color-accent)"
                    style={{ color: link.color }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Decorative Code Block */}
          <motion.div
            className="mt-16 text-center font-mono text-sm tracking-widest text-(--color-text-muted)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p>
              <span className="text-(--color-accent)">const</span>{" "}
              <span className="text-(--color-text-secondary)">message</span>{" "}
              <span className="text-(--color-accent)">=</span>{" "}
              <span className="text-amber-400">&quot;Looking forward to connecting!&quot;</span>
              <span className="text-(--color-text-muted)">;</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
