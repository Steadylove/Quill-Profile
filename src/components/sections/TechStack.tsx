"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  ReactIcon,
  NextJsIcon,
  TypeScriptIcon,
  NodeJsIcon,
  TailwindIcon,
  NestJsIcon,
  PythonIcon,
  OpenAIIcon,
  EthereumIcon,
  SolidityIcon,
  DockerIcon,
} from "@/components/ui/Icons";

// Bento Grid Layout with varying sizes
const bentoItems = [
  // Large featured card - Frontend
  {
    key: "frontend",
    size: "large",
    color: "#61DAFB",
    skills: [
      { name: "React", icon: ReactIcon },
      { name: "Next.js", icon: NextJsIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Tailwind", icon: TailwindIcon },
    ],
  },
  // Medium card - AI
  {
    key: "ai",
    size: "medium",
    color: "#10A37F",
    skills: [
      { name: "OpenAI", icon: OpenAIIcon },
      { name: "LangChain", icon: OpenAIIcon },
      { name: "RAG", icon: OpenAIIcon },
    ],
  },
  // Medium card - Web3
  {
    key: "web3",
    size: "medium",
    color: "#627EEA",
    skills: [
      { name: "Ethereum", icon: EthereumIcon },
      { name: "Solidity", icon: SolidityIcon },
      { name: "Web3.js", icon: EthereumIcon },
    ],
  },
  // Medium card - Backend
  {
    key: "backend",
    size: "wide",
    color: "#68A063",
    skills: [
      { name: "Node.js", icon: NodeJsIcon },
      { name: "NestJS", icon: NestJsIcon },
      { name: "Python", icon: PythonIcon },
      { name: "Docker", icon: DockerIcon },
    ],
  },
];

const otherTools = ["Git", "Linux", "PostgreSQL", "MongoDB", "Redis", "AWS", "Vercel", "Figma"];

export function TechStack() {
  const t = useTranslations("skills");

  return (
    <section
      id="skills"
      className="scroll-section relative flex flex-col justify-center overflow-hidden py-12"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-(--color-bg) via-(--color-bg-secondary) to-(--color-bg)" />
      <div className="grid-pattern absolute inset-0 opacity-30" />
      <div className="stars" />
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-0 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-(--color-accent)/5 blur-[140px]" />
      <div className="absolute bottom-1/4 left-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="section-container relative z-10">
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
              <span className="font-mono text-(--color-accent) opacity-50">{"<"}</span>
              {t("title")}
              <span className="font-mono text-(--color-accent) opacity-50">{"/>"}</span>
            </h2>
            <div className="h-px w-16 bg-linear-to-l from-transparent to-(--color-accent)/30" />
          </div>
          <p className="mx-auto max-w-2xl text-base text-(--color-text-secondary)">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Bento Grid - 2 rows layout */}
        <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-xl border border-(--glass-border) bg-(--glass-bg) p-4"
              style={{
                background: `linear-gradient(135deg, ${item.color}08 0%, transparent 60%)`,
              }}
            >
              {/* Category Header */}
              <div className="relative mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: item.color, boxShadow: `0 0 12px ${item.color}` }}
                  />
                  <h3 className="text-lg font-bold tracking-tight">
                    {t(`categories.${item.key}`)}
                  </h3>
                </div>
              </div>

              {/* Skills - Horizontal Layout */}
              <div className="relative flex flex-wrap gap-2">
                {item.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group/skill flex items-center gap-2 rounded-lg border border-transparent bg-(--color-bg)/40 px-3 py-2 transition-all hover:border-(--glass-border) hover:bg-(--color-bg-tertiary)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + skillIndex * 0.05 }}
                  >
                    <div
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md"
                      style={{
                        backgroundColor: `${item.color}15`,
                        color: item.color,
                      }}
                    >
                      <skill.icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-(--color-text-secondary) transition-colors group-hover/skill:text-(--color-text-primary)">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Tools */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="mb-4 font-mono text-xs tracking-[0.3em] text-(--color-text-muted) uppercase">
            Also experienced with
          </p>
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-2">
            {otherTools.map((tool, index) => (
              <motion.span
                key={tool}
                className="rounded-lg border border-(--glass-border) bg-(--glass-bg) px-4 py-2 font-mono text-xs text-(--color-text-secondary) transition-all hover:border-(--color-accent)/50 hover:text-(--color-accent)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.03 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
