# iccyyxx's Blog 🌸

一个可爱风格的个人博客，用于记录算法学习和前端开发实践。

## ✨ 功能特点

- 🎨 可爱的粉色系设计风格
- 📝 Markdown 博客文章系统
- ✨ **交互式 Demo 展示**（新增！）
- 🏷️ 分类标签（算法、前端开发）
- 💫 流畅的动画效果
- 📱 响应式设计
- 🔍 代码语法高亮
- 📄 独立的 Markdown 文件管理
- 🚀 自动部署到 GitHub Pages

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## ✍️ 添加新内容

### 添加博客文章

1. 在 `public/posts/` 创建新的 Markdown 文件
2. 在文件开头添加 Front Matter 元数据
3. 运行 `npm run generate:posts` 生成索引
4. 完成！

详细说明请查看 [博客管理指南](./BLOG_MANAGEMENT.md)

### 添加 Demo

1. 在 `src/demos/` 创建 Demo 组件
2. 在 `src/data/demos.js` 注册 Demo 信息
3. 在 `src/pages/DemoDetail.jsx` 添加导入
4. 完成！

详细说明请查看 [Demo 添加指南](./HOW_TO_ADD_DEMO.md)

## 🛠️ 技术栈

- **前端框架**: React 18
- **路由**: React Router
- **构建工具**: Vite
- **Markdown 渲染**: react-markdown
- **代码高亮**: react-syntax-highlighter + highlight.js
- **Front Matter 解析**: gray-matter
- **样式**: CSS3 动画
- **部署**: GitHub Actions + GitHub Pages

## 📁 项目结构

```
iccyyxx-s-Blog/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 自动部署
├── public/
│   ├── posts/                  # Markdown 博客文章
│   └── demos/                  # Demo 资源文件
├── scripts/
│   └── generate-posts-index.js # 索引生成脚本
├── src/
│   ├── components/             # React 组件
│   ├── demos/                  # Demo 组件
│   │   ├── ClockDemo.jsx      # 时钟 Demo
│   │   ├── TodoDemo.jsx       # Todo Demo
│   │   └── ColorPickerDemo.jsx # 颜色选择器
│   ├── data/                   # 数据管理
│   │   ├── blogPosts.js       # 博客数据
│   │   ├── demos.js           # Demo 数据
│   │   └── posts-index.json   # 自动生成的索引
│   └── pages/                  # 页面组件
│       ├── Home.jsx           # 首页
│       ├── BlogList.jsx       # 博客列表
│       ├── BlogPost.jsx       # 博客详情
│       ├── DemoList.jsx       # Demo 列表
│       └── DemoDetail.jsx     # Demo 详情
├── BLOG_MANAGEMENT.md         # 博客管理指南
├── HOW_TO_ADD_DEMO.md         # Demo 添加指南
└── DEMO_SYSTEM.md             # Demo 系统说明

