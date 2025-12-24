# 🔧 GitHub Pages 部署修复说明

## 问题描述

部署到 GitHub Pages 后，页面显示空白。

## 根本原因

1. **路径不匹配**：
   - vite.config.js 中配置的 base 路径是 `/iccyyxx-blog/`
   - 实际的 GitHub 仓库名是 `iccyyxxBlog`（注意大小写）
   - 导致资源文件（JS、CSS）加载失败

2. **React Router 缺少 basename 配置**：
   - 在 GitHub Pages 子路径下部署时，React Router 需要设置 basename
   - 否则路由无法正确匹配

## 修复方案

### 1. 修复 vite.config.js 中的 base 路径

```javascript
// 修改前
base: command === 'build' ? '/iccyyxx-blog/' : '/',

// 修改后
base: command === 'build' ? '/iccyyxxBlog/' : '/',
```

### 2. 为 React Router 添加 basename 配置

```javascript
// 在 src/App.jsx 中添加
const basename = import.meta.env.PROD ? '/iccyyxxBlog' : '';

<Router basename={basename}>
  {/* ... */}
</Router>
```

## 验证修复

1. 本地构建测试：
   ```bash
   npm run build
   ```

2. 检查 dist/index.html 中的资源路径：
   ```html
   <link rel="icon" href="/iccyyxxBlog/favicon.svg" />
   <script src="/iccyyxxBlog/assets/index-xxx.js"></script>
   ```

3. 推送到 GitHub，等待自动部署完成

## 部署 URL

- **GitHub Pages URL**: https://iccyyxx.github.io/iccyyxxBlog/
- **仓库地址**: https://github.com/iccyyxx/iccyyxxBlog

## 注意事项

- 本地开发时使用根路径 `/`
- 生产构建时自动使用 `/iccyyxxBlog/` 路径
- React Router 会根据环境自动设置 basename

