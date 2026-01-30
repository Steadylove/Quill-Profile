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
    <section id="skills" className="relative py-40 md:py-56">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-(--color-bg) via-(--color-bg-secondary) to-(--color-bg)" />

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
              <span className="font-mono text-(--color-accent) opacity-50">{"<"}</span>
              {t("title")}
              <span className="font-mono text-(--color-accent) opacity-50">{"/>"}</span>
            </h2>
            <div className="h-px w-24 bg-linear-to-l from-transparent to-(--color-accent)/30" />
          </div>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed tracking-wide text-(--color-text-secondary)">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="mb-24 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-3xl border border-(--glass-border) bg-(--glass-bg) p-12 ${item.size === "large" ? "md:col-span-2 md:row-span-2" : ""} ${item.size === "wide" ? "lg:col-span-2" : ""} `}
              style={{
                background: `linear-gradient(135deg, ${item.color}08 0%, transparent 60%)`,
              }}
            >
              {/* Hover Glow */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${item.color}15 0%, transparent 80%)`,
                }}
              />

              {/* Category Header */}
              <div className="relative mb-12">
                <div className="flex items-center gap-5">
                  <div
                    className="h-4 w-4 rounded-full"
                    style={{ backgroundColor: item.color, boxShadow: `0 0 20px ${item.color}` }}
                  />
                  <h3 className="text-2xl font-bold tracking-tight">
                    {t(`categories.${item.key}`)}
                  </h3>
                </div>
              </div>

              {/* Skills Grid */}
              <div
                className={`relative grid gap-6 ${
                  item.size === "large" ? "grid-cols-2 gap-8" : "grid-cols-1"
                }`}
              >
                {item.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group/skill flex items-center gap-5 rounded-2xl border border-transparent bg-(--color-bg)/40 p-5 transition-all hover:border-(--glass-border) hover:bg-(--color-bg-tertiary) hover:shadow-xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.08 }}
                    whileHover={{ x: 6, scale: 1.02 }}
                  >
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-inner transition-all"
                      style={{
                        backgroundColor: `${item.color}15`,
                        color: item.color,
                      }}
                    >
                      <skill.icon className="h-7 w-7" />
                    </div>
                    <span className="text-lg font-medium text-(--color-text-secondary) transition-colors group-hover/skill:text-(--color-text-primary)">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div
                className="absolute -right-12 -bottom-12 h-56 w-56 rounded-full opacity-10 blur-[80px]"
                style={{ backgroundColor: item.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Other Tools */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="mb-10 font-mono text-sm tracking-[0.4em] text-(--color-text-muted) uppercase">
            Also experienced with
          </p>
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-4">
            {otherTools.map((tool, index) => (
              <motion.span
                key={tool}
                className="rounded-xl border border-(--glass-border) bg-(--glass-bg) px-8 py-4 font-mono text-sm text-(--color-text-secondary) transition-all hover:border-(--color-accent)/50 hover:bg-(--color-bg-tertiary) hover:text-(--color-accent) hover:shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
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
