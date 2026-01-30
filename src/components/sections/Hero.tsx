"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FloatingGeometry } from "@/components/three/FloatingGeometry";
import { GitHubIcon, LinkedInIcon, TwitterIcon, MailIcon } from "@/components/ui/Icons";

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: GitHubIcon },
  { name: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon },
  { name: "Twitter", href: "https://twitter.com", icon: TwitterIcon },
  { name: "Email", href: "mailto:your@email.com", icon: MailIcon },
];

const stats = [
  { value: "3+", label: "years" },
  { value: "20+", label: "projects" },
  { value: "5+", label: "clients" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Elements */}
      <FloatingGeometry />
      <div className="grid-pattern absolute inset-0 opacity-40" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-(--color-bg)" />
      <div className="absolute top-0 left-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-accent)/5 blur-[160px]" />
      <div className="absolute right-0 bottom-1/4 h-[600px] w-[600px] translate-x-1/2 rounded-full bg-blue-500/5 blur-[140px]" />

      {/* Main Content */}
      <div className="section-container relative z-10 flex min-h-screen flex-col justify-center py-32 pt-48">
        <div className="grid items-center gap-20 lg:grid-cols-[1fr,auto] lg:gap-32">
          {/* Left: Text Content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="mb-12 inline-flex">
              <span className="inline-flex items-center gap-4 rounded-full border border-(--color-accent)/30 bg-(--color-accent)/5 px-6 py-2.5 text-sm tracking-wide">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--color-accent) opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-(--color-accent)"></span>
                </span>
                <span className="text-xs font-medium tracking-widest text-(--color-accent) uppercase">
                  {t("status")}
                </span>
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="mb-6 font-mono text-base tracking-[0.2em] text-(--color-text-secondary) uppercase"
            >
              {t("greeting")}
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="mb-8 text-6xl leading-[1.1] font-bold md:text-7xl lg:text-8xl"
            >
              <span className="text-(--color-text-primary)">{t("name").split(" ")[0]}</span>
              <br />
              <span className="gradient-text">
                {t("name").split(" ").slice(1).join(" ") || t("name")}
              </span>
            </motion.h1>

            {/* Title with Code Style */}
            <motion.div variants={itemVariants} className="mb-10">
              <p className="font-mono text-xl text-(--color-text-secondary) md:text-2xl">
                <span className="text-(--color-accent)">const</span>{" "}
                <span className="text-(--color-text-primary)">role</span>{" "}
                <span className="text-(--color-accent)">=</span>{" "}
                <span className="text-amber-400">&quot;{t("title")}&quot;</span>
                <span className="text-(--color-text-muted)">;</span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mb-14 max-w-2xl text-xl leading-relaxed text-(--color-text-secondary)"
            >
              {t("description")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="mb-16 flex flex-wrap items-center gap-8">
              <motion.a
                href="#projects"
                className="group relative overflow-hidden rounded-xl bg-(--color-accent) px-10 py-5 font-semibold tracking-wide text-(--color-bg)"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  {t("cta.projects")}
                  <svg
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform group-hover:translate-x-0" />
              </motion.a>
              <motion.a
                href="#contact"
                className="rounded-xl border border-(--color-border) px-10 py-5 font-semibold tracking-wide text-(--color-text-primary) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("cta.contact")}
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-(--glass-border) bg-(--glass-bg) text-(--color-text-secondary) transition-all hover:border-(--color-accent)/50 hover:bg-(--color-bg-tertiary) hover:text-(--color-accent)"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  aria-label={link.name}
                >
                  <link.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="glass-card relative w-80 rounded-3xl p-12">
              {/* Decorative Corner */}
              <div className="absolute -top-px -right-px h-32 w-32 rounded-tr-3xl border-t-2 border-r-2 border-(--color-accent)/30" />
              <div className="absolute -bottom-px -left-px h-32 w-32 rounded-bl-3xl border-b-2 border-l-2 border-(--color-accent)/30" />

              {/* Code Block Style */}
              <div className="mb-10 font-mono text-xs tracking-widest text-(--color-text-muted) uppercase">
                <span className="text-(--color-accent)">{"// "}</span>stats.ts
              </div>

              <div className="space-y-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.15 }}
                    className="flex flex-col gap-2"
                  >
                    <span className="text-6xl font-bold tracking-tighter text-(--color-accent)">
                      {stat.value}
                    </span>
                    <span className="font-mono text-xs tracking-[0.2em] text-(--color-text-muted) uppercase">
                      {t(`stats.${stat.label}`)}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack Preview */}
              <div className="mt-12 border-t border-(--glass-border) pt-10">
                <p className="mb-6 font-mono text-xs tracking-widest text-(--color-text-muted) uppercase">
                  <span className="text-(--color-accent)">{"// "}</span>tech_stack
                </p>
                <div className="flex flex-wrap gap-3">
                  {["React", "Next.js", "Node.js", "Web3"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-(--glass-border) bg-(--color-bg-tertiary) px-4 py-2 font-mono text-xs text-(--color-text-secondary)"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-16 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.a
            href="#skills"
            className="flex flex-col items-center gap-4 text-(--color-text-muted) transition-colors hover:text-(--color-accent)"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="font-mono text-xs tracking-[0.3em] uppercase">scroll</span>
            <div className="h-12 w-px bg-linear-to-b from-(--color-accent) to-transparent" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
