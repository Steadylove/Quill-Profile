import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// 检测是否为静态导出（用于 GitHub Pages）
const isExport = process.env.NEXT_EXPORT === "true" || process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  // 在 GitHub Actions 中启用静态导出
  ...(isExport ? { output: "export" as const } : {}),
  // 如果仓库名不是 username.github.io，需要设置 basePath
  ...(isExport ? { basePath: "/Quill-Profile" } : {}),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    // 确保 three.js 相关模块只在客户端加载
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

export default withNextIntl(nextConfig);
