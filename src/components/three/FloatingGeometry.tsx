"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// 使用种子生成确定性的随机数（基于索引）
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

// 生成粒子数据
function generateParticles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.round(seededRandom(i * 3 + 1) * 10000) / 100,
    top: Math.round(seededRandom(i * 3 + 2) * 10000) / 100,
    opacity: Math.round((seededRandom(i * 3 + 3) * 0.5 + 0.2) * 100) / 100,
    duration: Math.round((3 + seededRandom(i * 3 + 4) * 4) * 10) / 10,
    delay: Math.round(seededRandom(i * 3 + 5) * 20) / 10,
  }));
}

export function FloatingGeometry() {
  // 粒子只在客户端渲染，避免 hydration 不匹配
  // 使用 lazy initialization 避免在 useEffect 中同步调用 setState
  const [particles] = useState<ReturnType<typeof generateParticles>>(() => generateParticles(50));

  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
      {/* 主几何体 - 旋转的多边形 */}
      <motion.div
        className="relative"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* 外层发光环 */}
        <motion.div
          className="absolute -inset-8 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* 主几何体容器 */}
        <div className="relative h-64 w-64 md:h-80 md:w-80">
          {/* 多面体效果 - 使用多个旋转的边框 */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-3xl border border-(--color-accent)/30"
              style={{
                transform: `rotateX(${i * 30}deg) rotateY(${i * 60}deg)`,
              }}
              animate={{
                rotateX: [i * 30, i * 30 + 360],
                rotateY: [i * 60, i * 60 + 360],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          {/* 中心发光核心 */}
          <motion.div
            className="absolute inset-16 rounded-full md:inset-20"
            style={{
              background:
                "radial-gradient(circle, var(--color-accent) 0%, rgba(0, 255, 136, 0.3) 50%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* 粒子效果 - 只在客户端渲染 */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute h-1 w-1 rounded-full bg-(--color-accent)"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              opacity: particle.opacity,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [particle.opacity * 0.5, particle.opacity, particle.opacity * 0.5],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 网格线效果 */}
      <svg className="absolute inset-0 h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
