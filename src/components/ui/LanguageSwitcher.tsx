"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

const locales = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <div className="flex items-center gap-1 rounded-lg border border-(--glass-border) bg-(--glass-bg) p-1">
      {locales.map((loc) => (
        <motion.button
          key={loc.code}
          onClick={() => switchLocale(loc.code)}
          className={`cursor-pointer rounded-md px-3 py-1.5 font-mono text-sm transition-colors ${
            locale === loc.code
              ? "bg-(--color-accent) text-(--color-bg)"
              : "text-(--color-text-secondary) hover:text-(--color-text-primary)"
          }`}
          whileTap={{ scale: 0.95 }}
        >
          {loc.label}
        </motion.button>
      ))}
    </div>
  );
}
