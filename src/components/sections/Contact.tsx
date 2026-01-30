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
    href: "https://github.com/yourusername",
    value: "@yourusername",
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
    <section id="contact" className="relative bg-(--color-bg-secondary) py-40 md:py-56">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="grid-pattern absolute inset-0 opacity-15" />
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-accent)/5 blur-[160px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-blue-500/5 blur-[140px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="mb-6 font-mono text-base tracking-[0.4em] text-(--color-accent) uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            04. What&apos;s Next?
          </motion.p>
          <h2 className="mb-8 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed tracking-wide text-(--color-text-secondary)">
            {t("description")}
          </p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Main CTA */}
          <div className="mb-24 text-center">
            <motion.a
              href="mailto:your@email.com"
              className="group relative inline-flex items-center gap-5 overflow-hidden rounded-2xl bg-(--color-accent) px-12 py-6 text-xl font-bold text-(--color-bg) shadow-2xl"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <MailIcon className="h-7 w-7" />
              <span className="relative z-10 tracking-wider">{t("cta")}</span>
              <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 ease-out group-hover:translate-x-0" />
            </motion.a>
          </div>

          {/* Social Links - Horizontal */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.key}
                href={link.href}
                target={link.key !== "email" ? "_blank" : undefined}
                rel={link.key !== "email" ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-5 rounded-2xl border border-(--glass-border) bg-(--glass-bg) px-8 py-5 backdrop-blur-md transition-all hover:border-(--color-accent)/40 hover:bg-(--color-bg-tertiary) hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl shadow-inner transition-all"
                  style={{ backgroundColor: `${link.color}15` }}
                >
                  <link.icon
                    className="h-6 w-6 transition-transform group-hover:scale-110"
                    style={{ color: link.color }}
                  />
                </div>
                <span className="text-lg font-medium text-(--color-text-secondary) transition-colors group-hover:text-(--color-text-primary)">
                  {link.value}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Decorative Code Block */}
        <motion.div
          className="mt-32 text-center font-mono text-base tracking-widest text-(--color-text-muted)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p>
            <span className="text-(--color-accent)">const</span>{" "}
            <span className="text-(--color-text-secondary)">message</span>{" "}
            <span className="text-(--color-accent)">=</span>{" "}
            <span className="text-amber-400">&quot;Looking forward to connecting!&quot;</span>
            <span className="text-(--color-text-muted)">;</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
