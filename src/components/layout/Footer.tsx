"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-(--glass-border) bg-(--color-bg)">
      <div className="section-container py-6">
        {/* Compact Footer */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-mono text-xl font-bold text-(--color-accent)"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {"<Q/>"}
          </motion.a>

          {/* Copyright */}
          <p className="text-sm text-(--color-text-muted)">
            © {currentYear} <span className="font-mono text-(--color-accent)">{"<Q/>"}</span>.{" "}
            {t("copyright")}
          </p>

          {/* Made With */}
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
    </footer>
  );
}
