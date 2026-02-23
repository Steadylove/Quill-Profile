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

const bentoItems = [
  {
    key: "frontend",
    size: "large",
    color: "#61DAFB",
    skills: [
      { name: "React", icon: ReactIcon, url: "https://react.dev" },
      { name: "Next.js", icon: NextJsIcon, url: "https://nextjs.org" },
      { name: "TypeScript", icon: TypeScriptIcon, url: "https://www.typescriptlang.org" },
      { name: "Tailwind", icon: TailwindIcon, url: "https://tailwindcss.com" },
    ],
  },
  {
    key: "ai",
    size: "medium",
    color: "#10A37F",
    skills: [
      { name: "OpenAI", icon: OpenAIIcon, url: "https://openai.com" },
      { name: "LangChain", icon: OpenAIIcon, url: "https://www.langchain.com" },
      { name: "RAG", icon: OpenAIIcon, url: "https://docs.llamaindex.ai" },
    ],
  },
  {
    key: "web3",
    size: "medium",
    color: "#627EEA",
    skills: [
      { name: "Aleo/Leo", icon: EthereumIcon, url: "https://aleo.org" },
      { name: "ZK Proofs", icon: SolidityIcon, url: "https://zkproof.org" },
      { name: "Solidity", icon: EthereumIcon, url: "https://soliditylang.org" },
    ],
  },
  {
    key: "backend",
    size: "wide",
    color: "#68A063",
    skills: [
      { name: "Node.js", icon: NodeJsIcon, url: "https://nodejs.org" },
      { name: "NestJS", icon: NestJsIcon, url: "https://nestjs.com" },
      { name: "Python", icon: PythonIcon, url: "https://www.python.org" },
      { name: "Docker", icon: DockerIcon, url: "https://www.docker.com" },
    ],
  },
];

const otherTools = [
  { name: "Git", url: "https://git-scm.com" },
  { name: "Vite", url: "https://vite.dev" },
  { name: "Zustand", url: "https://zustand.docs.pmnd.rs" },
  { name: "Cloudflare Workers", url: "https://workers.cloudflare.com" },
  { name: "Hono", url: "https://hono.dev" },
  { name: "IndexedDB", url: "https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API" },
  { name: "Vercel", url: "https://vercel.com" },
  { name: "Vitest", url: "https://vitest.dev" },
  { name: "pnpm", url: "https://pnpm.io" },
];

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
                  <motion.a
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/skill flex cursor-pointer items-center gap-2 rounded-lg border border-transparent bg-(--color-bg)/40 px-3 py-2 transition-all hover:border-(--glass-border) hover:bg-(--color-bg-tertiary)"
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
                  </motion.a>
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
              <motion.a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-lg border border-(--glass-border) bg-(--glass-bg) px-4 py-2 font-mono text-xs text-(--color-text-secondary) transition-all hover:border-(--color-accent)/50 hover:text-(--color-accent)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.03 }}
              >
                {tool.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
