"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { GitHubIcon, LinkedInIcon, TwitterIcon } from "@/components/ui/Icons";

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: GitHubIcon },
  { name: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon },
  { name: "Twitter", href: "https://twitter.com", icon: TwitterIcon },
];

export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-(--glass-border) bg-(--color-bg)">
      <div className="section-container py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center gap-10">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-mono text-3xl font-bold text-(--color-accent)"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {"<Q/>"}
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl text-(--color-text-muted) transition-colors hover:text-(--color-accent)"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                <link.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px w-full max-w-sm bg-linear-to-r from-transparent via-(--color-border) to-transparent" />

          {/* Copyright & Credits */}
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-base text-(--color-text-muted)">
              © {currentYear} <span className="font-mono text-(--color-accent)">{"<Q/>"}</span>.{" "}
              {t("copyright")}
            </p>
            <p className="flex items-center gap-2 text-sm text-(--color-text-muted)">
              {t("madeWith")}{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                ♥
              </motion.span>{" "}
              & <span className="font-mono text-(--color-accent)">Next.js</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
