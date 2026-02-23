"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  { id: "job1", color: "#00ff88", icon: "🚀" },
  { id: "job2", color: "#3B82F6", icon: "💻" },
];

export function Experience() {
  const t = useTranslations("experience");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section
      id="experience"
      className="scroll-section relative flex flex-col justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-(--color-bg) via-(--color-bg-secondary) to-(--color-bg)" />
      <div className="grid-pattern absolute inset-0 opacity-30" />
      <div className="stars" />
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-1/4 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-(--color-accent)/5 blur-[140px]" />
      <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="section-container relative z-10 max-h-[calc(100vh-8rem)] overflow-y-auto pt-32">
        {/* Section Header */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-4 flex items-center justify-center gap-6">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-(--color-accent)/30" />
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              <span className="font-mono text-(--color-accent) opacity-50">{"["}</span>
              {t("title")}
              <span className="font-mono text-(--color-accent) opacity-50">{"]"}</span>
            </h2>
            <div className="h-px w-16 bg-linear-to-l from-transparent to-(--color-accent)/30" />
          </div>
          <p className="mx-auto max-w-2xl text-base text-(--color-text-secondary)">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative mx-auto max-w-5xl">
          {/* Animated Timeline Line */}
          <div className="absolute top-0 bottom-0 left-8 w-px bg-(--color-border) md:left-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-linear-to-b from-(--color-accent) to-(--color-accent)/30"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative pl-24 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-[calc(50%+5rem)]" : "md:pl-[calc(50%+5rem)]"
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className={`absolute top-0 left-0 z-10 -translate-x-1/2 md:left-1/2`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                >
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full border-2 bg-(--color-bg) shadow-2xl"
                    style={{ borderColor: exp.color }}
                  >
                    <span className="text-2xl">{exp.icon}</span>
                  </div>
                  {/* Glow */}
                  <div
                    className="absolute inset-0 rounded-full opacity-40 blur-xl"
                    style={{ backgroundColor: exp.color }}
                  />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className="group relative cursor-pointer overflow-hidden rounded-3xl border border-(--glass-border) bg-(--glass-bg) p-12 shadow-xl backdrop-blur-md transition-all hover:border-(--color-border-hover) hover:shadow-2xl"
                  whileHover={{ y: -8 }}
                >
                  {/* Accent Line */}
                  <div
                    className="absolute top-0 bottom-0 left-0 w-2 rounded-l-3xl"
                    style={{ backgroundColor: exp.color }}
                  />

                  {/* Header */}
                  <div className="mb-8 pl-6">
                    <div className="flex flex-wrap items-start justify-between gap-6">
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight transition-colors group-hover:text-(--color-accent) md:text-3xl">
                          {t(`items.${exp.id}.position`)}
                        </h3>
                        <p className="mt-2 text-lg font-medium text-(--color-text-secondary)">
                          {t(`items.${exp.id}.company`)}
                        </p>
                      </div>
                      <span
                        className="shrink-0 rounded-full px-6 py-2 font-mono text-sm font-semibold tracking-wider"
                        style={{
                          backgroundColor: `${exp.color}15`,
                          color: exp.color,
                          border: `1px solid ${exp.color}30`,
                        }}
                      >
                        {t(`items.${exp.id}.period`)}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="pl-6 text-lg leading-relaxed text-(--color-text-secondary)">
                    {t(`items.${exp.id}.description`)}
                  </p>

                  {/* Decorative Gradient */}
                  <div
                    className="absolute -right-16 -bottom-16 h-56 w-56 rounded-full opacity-10 blur-[80px] transition-opacity group-hover:opacity-20"
                    style={{ backgroundColor: exp.color }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Resume Download */}
        <motion.div
          className="mt-8 mb-1 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.a
            href="/resume.pdf"
            className="inline-flex cursor-pointer items-center gap-4 rounded-full border border-(--color-border) px-10 py-5 text-lg font-semibold text-(--color-text-secondary) shadow-lg transition-all hover:border-(--color-accent) hover:bg-(--color-bg-tertiary) hover:text-(--color-accent)"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {t("downloadResume")}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
