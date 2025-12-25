# 📚 Demo 添加指南

## 概述

本博客支持添加交互式 Demo，每个 Demo 包含：
- ✨ **实时预览**：可运行的交互式组件
- 💻 **完整代码**：带语法高亮的源代码
- 📖 **详细说明**：功能介绍和技术要点

## 🎯 Demo 系统架构

```
src/
├── demos/                    # Demo 组件目录
│   ├── ClockDemo.jsx        # Demo 组件
│   ├── ClockDemo.css        # Demo 样式
│   ├── TodoDemo.jsx
│   └── ...
├── data/
│   └── demos.js             # Demo 数据配置
└── pages/
    ├── DemoList.jsx         # Demo 列表页
    └── DemoDetail.jsx       # Demo 详情页
```

## ✍️ 如何添加新 Demo

### 步骤 1：创建 Demo 组件

在 `src/demos/` 目录下创建新的 Demo 组件文件，例如 `MyDemo.jsx`：

```jsx
import { useState } from 'react';
import './MyDemo.css';

function MyDemo() {
  // 你的 Demo 逻辑
  return (
    <div className="my-demo">
      {/* 你的 Demo UI */}
    </div>
  );
}

// 导出代码字符串（用于代码展示）
export const code = \`
// 这里放置你想展示的代码
import { useState } from 'react';

function MyDemo() {
  // ...
}

export default MyDemo;
\`;

// 导出描述文档（支持 Markdown）
export const description = \`
## 功能说明

这个 Demo 展示了...

### 核心知识点

1. **知识点 1**：说明
2. **知识点 2**：说明

### 技术要点

- 要点 1
- 要点 2

### 适用场景

- 场景 1
- 场景 2
\`;

export default MyDemo;
```

### 步骤 2：创建样式文件

创建对应的 CSS 文件 `src/demos/MyDemo.css`：

```css
.my-demo {
  padding: 2rem;
  /* 你的样式 */
}
```

### 步骤 3：注册 Demo 数据

在 `src/data/demos.js` 中添加 Demo 信息：

```javascript
export const demosData = [
  // ... 现有 Demo
  {
    id: 4,  // 新的唯一 ID
    title: "我的新 Demo",
    category: "React",  // 或 "CSS", "JavaScript" 等
    description: "简短描述这个 Demo 的功能",
    tags: ["React", "Hooks", "动画"],  // 相关标签
    difficulty: "简单",  // "简单", "中等", "困难"
    componentPath: "MyDemo"  // 组件文件名（不含扩展名）
  }
];
```

### 步骤 4：注册组件导入

在 `src/pages/DemoDetail.jsx` 中添加动态导入：

```javascript
const demoComponents = {
  ClockDemo: lazy(() => import('../demos/ClockDemo')),
  TodoDemo: lazy(() => import('../demos/TodoDemo')),
  ColorPickerDemo: lazy(() => import('../demos/ColorPickerDemo')),
  MyDemo: lazy(() => import('../demos/MyDemo'))  // 添加这一行
};
```

### 步骤 5：测试 Demo

```bash
# 启动开发服务器
npm run dev

# 访问 Demo 列表页
# http://localhost:3000/demos

# 点击你的 Demo 查看效果
```

## 📋 Demo 数据字段说明

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `id` | 数字 | ✅ | Demo 唯一 ID |
| `title` | 字符串 | ✅ | Demo 标题 |
| `category` | 字符串 | ✅ | 分类（React/CSS/JavaScript 等） |
| `description` | 字符串 | ✅ | 简短描述 |
| `tags` | 数组 | ✅ | 标签列表 |
| `difficulty` | 字符串 | ✅ | 难度级别 |
| `componentPath` | 字符串 | ✅ | 组件文件名 |

## 🎨 Demo 组件最佳实践

### 1. 组件结构

```jsx
function MyDemo() {
  // 状态管理
  const [state, setState] = useState(initialValue);
  
  // 副作用
  useEffect(() => {
    // ...
  }, []);
  
  // 事件处理
  const handleEvent = () => {
    // ...
  };
  
  // 渲染
  return (
    <div className="my-demo">
      {/* UI 内容 */}
    </div>
  );
}
```

### 2. 样式规范

- 使用独立的 CSS 文件
- 类名使用 kebab-case
- 添加响应式设计
- 考虑可访问性

```css
.my-demo {
  /* 基础样式 */
}

@media (max-width: 768px) {
  .my-demo {
    /* 移动端适配 */
  }
}
```

### 3. 代码导出

导出的 `code` 字符串应该：
- 包含完整的核心逻辑
- 格式清晰，易于阅读
- 可以省略样式代码（太长）
- 添加必要的注释

### 4. 描述文档

使用 Markdown 格式编写，包含：
- **功能说明**：Demo 做什么
- **核心知识点**：学习重点
- **技术要点**：实现细节
- **适用场景**：何时使用

## 🌟 示例参考

查看现有的 Demo 作为参考：
- `src/demos/ClockDemo.jsx` - 简单的计时器
- `src/demos/TodoDemo.jsx` - 状态管理示例
- `src/demos/ColorPickerDemo.jsx` - 交互式组件

## 💡 高级技巧

### 1. 使用外部库

如果 Demo 需要额外的 npm 包：

```bash
npm install package-name
```

然后在组件中导入使用。

### 2. 复杂状态管理

对于复杂的 Demo，可以使用：
- useReducer
- Context API
- 自定义 Hooks

### 3. 性能优化

- 使用 useMemo 缓存计算结果
- 使用 useCallback 缓存函数
- 使用 React.memo 避免不必要的重渲染

### 4. 错误处理

添加错误边界和友好的错误提示：

```jsx
try {
  // 可能出错的代码
} catch (error) {
  console.error('Demo error:', error);
  return <div>出错了，请刷新重试</div>;
}
```

## 🔧 调试技巧

### 1. 使用 React DevTools

安装浏览器扩展，检查组件状态和 props。

### 2. Console 调试

```jsx
useEffect(() => {
  console.log('State changed:', state);
}, [state]);
```

### 3. 性能分析

使用 React Profiler 分析渲染性能。

## 📦 部署注意事项

1. **构建测试**：
   ```bash
   npm run build
   ```

2. **检查打包大小**：
   - 避免引入过大的库
   - 使用代码分割（已配置 lazy loading）

3. **浏览器兼容性**：
   - 测试主流浏览器
   - 使用 polyfills（如需要）

## 🎯 Demo 分类建议

### React 类
- Hooks 使用示例
- 状态管理
- 组件通信
- 生命周期

### CSS 类
- 动画效果
- 布局技巧
- 响应式设计
- CSS 技巧

### JavaScript 类
- 算法可视化
- 数据处理
- 工具函数
- 设计模式

### 综合类
- 完整功能模块
- 实战项目
- 性能优化
- 最佳实践

## 🚀 快速开始

创建一个简单的计数器 Demo：

```bash
# 1. 创建组件文件
touch src/demos/CounterDemo.jsx
touch src/demos/CounterDemo.css

# 2. 编写组件代码（参考上面的模板）

# 3. 在 demos.js 中注册

# 4. 在 DemoDetail.jsx 中添加导入

# 5. 测试
npm run dev
```

## 📚 相关资源

- [React 官方文档](https://react.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)

---

现在开始创建你的第一个 Demo 吧！🎉

如有问题，请查看现有 Demo 的实现或参考本指南。

