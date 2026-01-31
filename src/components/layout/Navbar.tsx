"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

const navItems = [
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "experience", href: "#experience" },
  { key: "contact", href: "#contact" },
];

const sectionIds = ["home", "skills", "projects", "experience", "contact"];

export function Navbar() {
  const t = useTranslations("nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update hash based on visible section
  const updateHash = useCallback(() => {
    const scrollContainer = document.querySelector(".scroll-container");
    if (!scrollContainer) return;

    const windowHeight = window.innerHeight;

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        // Check if section is in view (at least 50% visible)
        if (rect.top <= windowHeight * 0.5) {
          const newHash = sectionIds[i] === "home" ? "" : `#${sectionIds[i]}`;
          if (window.location.hash !== newHash && window.location.hash !== `#${sectionIds[i]}`) {
            history.replaceState(null, "", newHash || window.location.pathname);
          }
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container");

    const handleScroll = () => {
      const scrollTop = scrollContainer?.scrollTop || window.scrollY;
      setIsScrolled(scrollTop > 50);
      updateHash();
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [updateHash]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-(--glass-border) bg-(--color-bg)/70 py-4 shadow-2xl backdrop-blur-xl"
          : "bg-transparent py-8"
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-accent font-mono text-2xl font-bold tracking-tighter"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {"<Q/>"}
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-12 md:flex">
            {navItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                className="group relative text-sm font-medium tracking-widest text-(--color-text-secondary) uppercase transition-colors hover:text-(--color-text-primary)"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <span className="text-accent mr-2 font-mono text-xs opacity-50">0{index + 1}.</span>
                {t(item.key)}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-(--color-accent) transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <div className="border-l border-(--glass-border) pl-4">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-xl border border-(--glass-border) bg-(--glass-bg) md:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-6 bg-(--color-accent) transition-colors"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="h-0.5 w-6 bg-(--color-accent) transition-colors"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-6 bg-(--color-accent) transition-colors"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-(--glass-border) bg-(--color-bg)/95 backdrop-blur-2xl md:hidden"
          >
            <div className="section-container flex flex-col gap-6 py-12">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center text-2xl font-bold text-(--color-text-secondary) transition-colors hover:text-(--color-accent)"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-accent mr-4 font-mono text-sm opacity-50">
                    0{index + 1}.
                  </span>
                  {t(item.key)}
                </motion.a>
              ))}
              <div className="mt-6 border-t border-(--glass-border) pt-8">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
