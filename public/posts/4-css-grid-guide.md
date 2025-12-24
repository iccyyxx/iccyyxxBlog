---
id: 4
title: "CSS Grid 布局完全指南"
category: "前端开发"
date: "2024-12-12"
excerpt: "CSS Grid 是最强大的 CSS 布局系统，本文详细介绍 Grid 的各种属性和使用场景..."
tags: ["CSS", "Grid", "布局"]
readTime: "12 分钟"
---

# CSS Grid 布局完全指南

CSS Grid 是最强大的 CSS 布局系统，本文将详细介绍 Grid 的各种属性和使用场景。

## 什么是 CSS Grid？

CSS Grid 是一个二维布局系统，可以同时处理行和列，非常适合创建复杂的网页布局。

## 基础概念

### Grid Container 和 Grid Item

```css
.container {
  display: grid;
}
```

- **Grid Container**：设置了 `display: grid` 的元素
- **Grid Item**：Grid Container 的直接子元素

### 网格线（Grid Lines）

网格线是构成网格结构的分界线，可以是垂直的（列网格线）或水平的（行网格线）。

## 容器属性

### 1. 定义网格结构

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 100px 100px;
}
```

使用 `repeat()` 函数简化：

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: repeat(2, 100px);
}
```

### 2. fr 单位

`fr` 是 fraction（分数）的缩写，表示可用空间的一部分。

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  /* 第二列是第一列和第三列的两倍宽 */
}
```

### 3. gap 属性

设置网格间距：

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; /* 行间距和列间距都是 20px */
  
  /* 或者分别设置 */
  row-gap: 20px;
  column-gap: 30px;
}
```

### 4. 自动填充

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
```

- `auto-fill`：自动填充尽可能多的列
- `minmax()`：定义最小和最大尺寸

## 项目属性

### 1. 指定位置

```css
.item {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  
  /* 简写 */
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  
  /* 更简洁的写法 */
  grid-area: 1 / 1 / 2 / 3;
}
```

### 2. span 关键字

```css
.item {
  grid-column: span 2; /* 跨越 2 列 */
  grid-row: span 3;    /* 跨越 3 行 */
}
```

## 实战案例

### 响应式卡片布局

```css
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  padding: 24px;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

### 圣杯布局

```css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 20px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
```

### 响应式调整

```css
@media (max-width: 768px) {
  .layout {
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "aside"
      "footer";
    grid-template-columns: 1fr;
  }
}
```

## Grid vs Flexbox

| 特性 | Grid | Flexbox |
|-----|------|---------|
| 维度 | 二维（行和列） | 一维（行或列） |
| 适用场景 | 整体布局 | 组件内部布局 |
| 对齐方式 | 更强大 | 简单直观 |
| 浏览器支持 | 较新 | 更好 |

## 常用技巧

### 1. 居中元素

```css
.container {
  display: grid;
  place-items: center; /* 水平和垂直居中 */
}
```

### 2. 等高列

Grid 默认就是等高的，不需要额外设置。

### 3. 命名网格线

```css
.container {
  display: grid;
  grid-template-columns: [start] 1fr [middle] 1fr [end];
}

.item {
  grid-column: start / middle;
}
```

## 浏览器兼容性

现代浏览器都支持 CSS Grid：

- Chrome 57+
- Firefox 52+
- Safari 10.1+
- Edge 16+

## 总结

CSS Grid 的优势：

- 🎯 强大的二维布局能力
- 📱 天生支持响应式设计
- 🎨 代码简洁易维护
- ⚡ 性能优秀

掌握 CSS Grid，让你的布局能力更上一层楼！

