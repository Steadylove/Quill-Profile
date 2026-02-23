"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FloatingGeometry } from "@/components/three/FloatingGeometry";
import { GitHubIcon, LinkedInIcon, TwitterIcon, MailIcon } from "@/components/ui/Icons";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Steadylove", icon: GitHubIcon },
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
    <section id="home" className="scroll-section relative overflow-hidden">
      {/* Background Elements */}
      <FloatingGeometry />
      <div className="grid-pattern absolute inset-0 opacity-40" />
      <div className="stars" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-(--color-bg)" />
      <div className="absolute top-0 left-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-accent)/5 blur-[160px]" />
      <div className="absolute right-0 bottom-1/4 h-[600px] w-[600px] translate-x-1/2 rounded-full bg-blue-500/5 blur-[140px]" />

      {/* Main Content */}
      <div className="section-container relative z-10 flex h-screen flex-col justify-center pt-16 pb-20">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-20 xl:gap-32">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl flex-1 gap-3"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="mb-8 inline-flex">
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
              className="mb-2 font-mono text-sm tracking-[0.2em] text-(--color-text-secondary) uppercase"
            >
              {t("greeting")}
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="mb-6 text-5xl leading-[1.1] font-bold md:text-6xl lg:text-7xl"
            >
              <span className="text-(--color-text-primary)">{t("name").split(" ")[0]}</span>
              <br />
              <span className="gradient-text">
                {t("name").split(" ").slice(1).join(" ") || t("name")}
              </span>
            </motion.h1>

            {/* Title with Code Style */}
            <motion.div variants={itemVariants} className="mb-6">
              <p className="font-mono text-lg text-(--color-text-secondary) md:text-xl">
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
              className="mb-8 max-w-xl text-base leading-relaxed text-(--color-text-secondary) md:text-lg"
            >
              {t("description")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="mb-8 flex flex-wrap items-center gap-5">
              <motion.a
                href="#projects"
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-(--color-accent) px-8 py-4 font-semibold tracking-wide !text-gray-900"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t("cta.projects")}
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                className="cursor-pointer rounded-xl border border-(--color-border) px-8 py-4 font-semibold tracking-wide text-(--color-text-primary) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("cta.contact")}
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-(--glass-border) bg-(--glass-bg) text-(--color-text-secondary) transition-all hover:border-(--color-accent)/50 hover:bg-(--color-bg-tertiary) hover:text-(--color-accent)"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden w-80 shrink-0 lg:block xl:w-[340px]"
          >
            <div className="glass-card relative rounded-2xl px-10 py-10">
              {/* Decorative Corner */}
              <div className="absolute -top-px -right-px h-24 w-24 rounded-tr-2xl border-t-2 border-r-2 border-(--color-accent)/30" />
              <div className="absolute -bottom-px -left-px h-24 w-24 rounded-bl-2xl border-b-2 border-l-2 border-(--color-accent)/30" />

              {/* Code Block Style */}
              <div className="mb-8 font-mono text-xs tracking-widest text-(--color-text-muted) uppercase">
                <span className="text-(--color-accent)">{"// "}</span>stats.ts
              </div>

              <div className="space-y-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.15 }}
                    className="flex flex-col gap-1"
                  >
                    <span className="text-5xl font-bold tracking-tighter text-(--color-accent)">
                      {stat.value}
                    </span>
                    <span className="font-mono text-xs tracking-[0.15em] text-(--color-text-muted) uppercase">
                      {t(`stats.${stat.label}`)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.a
            href="#skills"
            className="flex cursor-pointer flex-col items-center gap-3 text-(--color-text-muted) transition-colors hover:text-(--color-accent)"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="font-mono text-xs tracking-[0.3em] uppercase">scroll</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
