# Quill Profile - 个人主页

一个简约风格的个人主页，使用 Next.js 14、React Three Fiber 和 Framer Motion 构建，支持中英文国际化。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS v4
- **动画**: Framer Motion
- **3D**: React Three Fiber + Drei
- **国际化**: next-intl
- **语言**: TypeScript

## 快速开始

```bash
# 安装依赖 (需要使用 --legacy-peer-deps 因为 React 19 与 R3F 的兼容性问题)
npm install --legacy-peer-deps

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 项目结构

```
src/
├── app/
│   ├── [locale]/           # 国际化路由
│   │   ├── layout.tsx      # 带语言的布局
│   │   └── page.tsx        # 主页
│   ├── layout.tsx          # 根布局
│   └── globals.css         # 全局样式
├── components/
│   ├── sections/           # 页面区块
│   │   ├── Hero.tsx        # 首屏 + 3D几何体
│   │   ├── TechStack.tsx   # 技术栈展示
│   │   ├── Projects.tsx    # 项目展示
│   │   ├── Experience.tsx  # 工作经历时间线
│   │   └── Contact.tsx     # 联系方式
│   ├── three/              # 3D组件
│   │   └── FloatingGeometry.tsx
│   ├── ui/                 # UI组件
│   │   ├── Icons.tsx
│   │   └── LanguageSwitcher.tsx
│   └── layout/
│       ├── Navbar.tsx
│       └── Footer.tsx
├── i18n/
│   ├── routing.ts          # 路由配置
│   └── request.ts          # 请求配置
└── messages/               # 翻译文件
    ├── en.json
    └── zh.json
```

## 自定义配置

### 修改个人信息

编辑 `src/messages/en.json` 和 `src/messages/zh.json` 中的内容：

- `hero.name`: 你的名字
- `hero.title`: 职位
- `hero.description`: 个人简介
- `projects.items`: 项目信息
- `experience.items`: 工作经历

### 修改社交链接

编辑以下文件中的链接：

- `src/components/sections/Hero.tsx`
- `src/components/sections/Contact.tsx`
- `src/components/layout/Footer.tsx`

### 修改配色

编辑 `src/app/globals.css` 中的 CSS 变量：

```css
:root {
  --color-accent: #00ff88; /* 主强调色 */
  --color-bg: #0a0a0a; /* 背景色 */
  --color-text-primary: #fafafa; /* 主要文字颜色 */
}
```

## 部署

项目配置为静态导出，可以部署到 GitHub Pages、Vercel 或其他静态托管平台。

```bash
# 构建静态文件
npm run build

# 静态文件会输出到 out/ 目录
```

## 许可证

MIT
