# 部署说明

本项目使用 GitHub Actions 自动部署到 GitHub Pages。

## 自动部署流程

当代码合并到 `main` 分支后，GitHub Actions 会自动：

1. 安装依赖（使用 pnpm）
2. 构建 Next.js 静态站点
3. 部署到 GitHub Pages

## 部署地址

部署完成后，网站将可通过以下地址访问：

```
https://steadylove.github.io/Quill-Profile/
```

## 手动触发部署

如果需要手动触发部署，可以：

1. 前往 GitHub 仓库的 Actions 页面
2. 选择 "Deploy to GitHub Pages" workflow
3. 点击 "Run workflow"

## 配置说明

### Next.js 配置

- 在 GitHub Actions 构建时，会自动启用静态导出（`output: 'export'`）
- 自动设置 `basePath: '/Quill-Profile'`（因为仓库名不是 `username.github.io`）
- 图片优化已禁用（`unoptimized: true`）以支持静态导出

### GitHub Pages 设置

首次部署前，需要在 GitHub 仓库设置中：

1. 前往 Settings → Pages
2. Source 选择 "GitHub Actions"
3. 保存设置

## 本地测试静态导出

如果想在本地测试静态导出：

```bash
# 设置环境变量
export NEXT_EXPORT=true
export GITHUB_ACTIONS=true

# 构建
pnpm run build

# 构建产物在 out 目录
# 可以使用静态服务器测试
npx serve out
```

## 注意事项

- 静态导出不支持服务端功能（如 API routes）
- 所有路由都会在构建时预渲染
- 如果修改了仓库名，需要更新 `next.config.ts` 中的 `basePath`
