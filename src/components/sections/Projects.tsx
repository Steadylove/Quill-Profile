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
    icon: "🤖",
  },
  {
    id: "project2",
    featured: true,
    tags: ["React", "Solidity", "Web3.js", "Ethereum"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "#627EEA",
    icon: "⛓️",
  },
  {
    id: "project3",
    featured: false,
    tags: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "#00ff88",
    icon: "🚀",
  },
  {
    id: "project4",
    featured: false,
    tags: ["Vue.js", "Node.js", "MongoDB", "AWS"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "#42b883",
    icon: "📊",
  },
];

export function Projects() {
  const t = useTranslations("projects");

  return (
    <section
      id="projects"
      className="scroll-section relative flex flex-col justify-center overflow-hidden bg-(--color-bg-secondary) py-12"
    >
      {/* Background */}
      <div className="grid-pattern absolute inset-0 opacity-30" />
      <div className="stars" />
      <div className="absolute top-0 right-0 left-0 h-32 bg-linear-to-b from-(--color-bg) to-transparent" />
      <div className="absolute right-0 bottom-0 left-0 h-32 bg-linear-to-t from-(--color-bg) to-transparent" />
      {/* Gradient Orbs */}
      <div className="absolute top-1/3 left-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-(--color-accent)/5 blur-[140px]" />
      <div className="absolute right-0 bottom-1/3 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-purple-500/5 blur-[120px]" />

      <div className="section-container relative z-10 pt-16">
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
              <span className="font-mono text-(--color-accent) opacity-50">{"{"}</span>
              {t("title")}
              <span className="font-mono text-(--color-accent) opacity-50">{"}"}</span>
            </h2>
            <div className="h-px w-16 bg-linear-to-l from-transparent to-(--color-accent)/30" />
          </div>
          <p className="mx-auto max-w-2xl text-base text-(--color-text-secondary)">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Bento Grid Projects */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative cursor-pointer overflow-hidden rounded-xl border border-(--glass-border) bg-(--glass-bg) p-5 backdrop-blur-md transition-all duration-300 hover:border-(--color-accent)/40 hover:shadow-(--color-accent)/5 hover:shadow-lg ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              {/* Gradient Background */}
              <div
                className="absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-10 blur-3xl transition-opacity duration-300 group-hover:opacity-20"
                style={{ backgroundColor: project.color }}
              />

              {/* Header */}
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-xl"
                    style={{ backgroundColor: `${project.color}15` }}
                  >
                    {project.icon}
                  </div>
                  {project.featured && (
                    <span
                      className="rounded-full px-2 py-0.5 font-mono text-[10px] tracking-wider uppercase"
                      style={{
                        backgroundColor: `${project.color}15`,
                        color: project.color,
                      }}
                    >
                      Featured
                    </span>
                  )}
                </div>
                {/* Links */}
                <div className="flex gap-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-(--glass-border) bg-(--color-bg-tertiary) text-(--color-text-muted) transition-all hover:border-(--color-accent)/50 hover:text-(--color-accent)"
                    whileHover={{ scale: 1.05 }}
                    aria-label={t("viewCode")}
                  >
                    <GitHubIcon className="h-4 w-4" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-(--glass-border) bg-(--color-bg-tertiary) text-(--color-text-muted) transition-all hover:border-(--color-accent)/50 hover:text-(--color-accent)"
                    whileHover={{ scale: 1.05 }}
                    aria-label={t("viewLive")}
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-bold tracking-tight transition-colors group-hover:text-(--color-accent)">
                {t(`items.${project.id}.title`)}
              </h3>
              <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-(--color-text-secondary)">
                {t(`items.${project.id}.description`)}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-(--glass-border) bg-(--color-bg-tertiary)/50 px-2 py-0.5 font-mono text-[11px] text-(--color-text-muted)"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Decorative Border Accent */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: project.color }}
              />
            </motion.article>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-(--color-border) px-6 py-2.5 text-sm font-semibold text-(--color-text-secondary) transition-all hover:border-(--color-accent) hover:text-(--color-accent)"
            whileHover={{ scale: 1.02 }}
          >
            {t("viewAll")}
            <ExternalLinkIcon className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
