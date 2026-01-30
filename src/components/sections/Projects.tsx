"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { GitHubIcon, ExternalLinkIcon } from "@/components/ui/Icons";

const projects = [
  {
    id: "project1",
    featured: true,
    tags: ["Next.js", "OpenAI", "TypeScript", "Tailwind"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "#10A37F",
    image: null,
  },
  {
    id: "project2",
    featured: true,
    tags: ["React", "Solidity", "Web3.js", "Ethereum"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "#627EEA",
    image: null,
  },
  {
    id: "project3",
    featured: false,
    tags: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "#00ff88",
    image: null,
  },
];

export function Projects() {
  const t = useTranslations("projects");

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative bg-(--color-bg-secondary) py-40 md:py-56">
      {/* Background */}
      <div className="grid-pattern absolute inset-0 opacity-20" />
      <div className="absolute top-0 right-0 left-0 h-64 bg-linear-to-b from-(--color-bg) to-transparent" />
      <div className="absolute right-0 bottom-0 left-0 h-64 bg-linear-to-t from-(--color-bg) to-transparent" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-32 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-10 flex items-center justify-center gap-8">
            <div className="h-px w-24 bg-linear-to-r from-transparent to-(--color-accent)/30" />
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <span className="font-mono text-(--color-accent) opacity-50">{"{"}</span>
              {t("title")}
              <span className="font-mono text-(--color-accent) opacity-50">{"}"}</span>
            </h2>
            <div className="h-px w-24 bg-linear-to-l from-transparent to-(--color-accent)/30" />
          </div>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed tracking-wide text-(--color-text-secondary)">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Featured Projects - Large Cards */}
        <div className="mb-48 space-y-48">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative grid gap-16 lg:grid-cols-2 lg:gap-24 ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Project Image/Preview */}
              <motion.div
                className={`relative aspect-[16/10] overflow-hidden rounded-3xl border border-(--glass-border) bg-(--color-bg-tertiary) shadow-2xl ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Placeholder Pattern */}
                <div className="grid-pattern absolute inset-0 opacity-30" />

                {/* Project Number */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-[12rem] font-bold tracking-tighter opacity-10"
                    style={{ color: project.color }}
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 opacity-20 transition-opacity duration-700 group-hover:opacity-40"
                  style={{ background: `linear-gradient(135deg, ${project.color}40, transparent)` }}
                />

                {/* Hover Links */}
                <div className="absolute inset-0 flex translate-y-4 items-center justify-center gap-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-20 w-20 items-center justify-center rounded-full border border-(--glass-border) bg-(--color-bg)/90 shadow-2xl backdrop-blur-md transition-colors hover:text-(--color-accent)"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={t("viewCode")}
                  >
                    <GitHubIcon className="h-9 w-9" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-20 w-20 items-center justify-center rounded-full border border-(--glass-border) bg-(--color-bg)/90 shadow-2xl backdrop-blur-md transition-colors hover:text-(--color-accent)"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={t("viewLive")}
                  >
                    <ExternalLinkIcon className="h-9 w-9" />
                  </motion.a>
                </div>

                {/* Corner Accent */}
                <div
                  className="absolute top-0 right-0 h-40 w-40 opacity-50"
                  style={{
                    background: `linear-gradient(225deg, ${project.color}40, transparent 80%)`,
                  }}
                />
              </motion.div>

              {/* Project Info */}
              <div
                className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}
              >
                {/* Label */}
                <motion.p
                  className="mb-4 font-mono text-sm tracking-[0.3em] uppercase"
                  style={{ color: project.color }}
                  initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Featured Project
                </motion.p>

                {/* Title */}
                <motion.h3
                  className="mb-8 text-4xl leading-tight font-bold tracking-tight transition-colors group-hover:text-(--color-accent) md:text-5xl lg:text-6xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  {t(`items.${project.id}.title`)}
                </motion.h3>

                {/* Description Card */}
                <motion.div
                  className="mb-10 rounded-3xl border border-(--glass-border) bg-(--glass-bg) p-10 shadow-xl backdrop-blur-md"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <p className="text-lg leading-relaxed text-(--color-text-secondary)">
                    {t(`items.${project.id}.description`)}
                  </p>
                </motion.div>

                {/* Tags */}
                <motion.div
                  className={`flex flex-wrap gap-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-xl border border-(--glass-border) bg-(--color-bg-tertiary) px-6 py-2.5 font-mono text-sm text-(--color-text-muted)"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Other Projects - Compact Grid */}
        {otherProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-40"
          >
            <h3 className="mb-16 text-center text-2xl font-bold tracking-widest text-(--color-text-muted) uppercase">
              Noteworthy Projects
            </h3>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.8 }}
                  className="group glass-card rounded-3xl p-12 transition-all hover:border-(--color-accent)/30 hover:shadow-2xl"
                  whileHover={{ y: -8 }}
                >
                  {/* Header */}
                  <div className="mb-10 flex items-start justify-between">
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-inner"
                      style={{ backgroundColor: `${project.color}15` }}
                    >
                      <svg
                        className="h-8 w-8"
                        style={{ color: project.color }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex gap-5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-(--color-text-muted) transition-colors hover:text-(--color-accent)"
                        aria-label={t("viewCode")}
                      >
                        <GitHubIcon className="h-7 w-7" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-(--color-text-muted) transition-colors hover:text-(--color-accent)"
                        aria-label={t("viewLive")}
                      >
                        <ExternalLinkIcon className="h-7 w-7" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="mb-4 text-2xl font-bold tracking-tight transition-colors group-hover:text-(--color-accent)">
                    {t(`items.${project.id}.title`)}
                  </h4>
                  <p className="mb-8 line-clamp-3 text-base leading-relaxed text-(--color-text-secondary)">
                    {t(`items.${project.id}.description`)}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs tracking-widest text-(--color-text-muted) uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* View All Link */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 rounded-full border border-(--color-border) px-10 py-5 text-lg font-semibold text-(--color-text-secondary) shadow-lg transition-all hover:border-(--color-accent) hover:bg-(--color-bg-tertiary) hover:text-(--color-accent)"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("viewAll")}
            <ExternalLinkIcon className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
