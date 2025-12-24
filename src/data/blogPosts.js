export const blogPosts = [
  {
    id: 1,
    title: "LeetCode 动态规划经典题目总结",
    category: "算法",
    date: "2024-12-20",
    excerpt: "总结了 LeetCode 上经典的动态规划题目，包括背包问题、最长子序列、股票买卖等常见题型...",
    tags: ["动态规划", "LeetCode", "算法"],
    readTime: "8 分钟",
    content: "这里是文章内容，你可以使用 Markdown 格式编写..."
  },
  {
    id: 2,
    title: "React 性能优化实战指南",
    category: "前端开发",
    date: "2024-12-18",
    excerpt: "在实际项目中总结的 React 性能优化技巧，包括 memo、useMemo、useCallback 的使用场景...",
    tags: ["React", "性能优化", "前端"],
    readTime: "10 分钟",
    content: "这里是文章内容，你可以使用 Markdown 格式编写..."
  },
  {
    id: 3,
    title: "二叉树遍历算法详解",
    category: "算法",
    date: "2024-12-15",
    excerpt: "深入理解二叉树的前序、中序、后序遍历，包括递归和迭代两种实现方式...",
    tags: ["二叉树", "遍历", "数据结构"],
    readTime: "6 分钟",
    content: "这里是文章内容，你可以使用 Markdown 格式编写..."
  },
  {
    id: 4,
    title: "CSS Grid 布局完全指南",
    category: "前端开发",
    date: "2024-12-12",
    excerpt: "CSS Grid 是最强大的 CSS 布局系统，本文详细介绍 Grid 的各种属性和使用场景...",
    tags: ["CSS", "Grid", "布局"],
    readTime: "12 分钟",
    content: "这里是文章内容，你可以使用 Markdown 格式编写..."
  },
  {
    id: 5,
    title: "滑动窗口算法模板总结",
    category: "算法",
    date: "2024-12-10",
    excerpt: "滑动窗口是解决字符串和数组问题的利器，总结一个通用的算法模板...",
    tags: ["滑动窗口", "算法模板", "字符串"],
    readTime: "7 分钟",
    content: "这里是文章内容，你可以使用 Markdown 格式编写..."
  },
  {
    id: 6,
    title: "Webpack 打包优化实践",
    category: "前端开发",
    date: "2024-12-08",
    excerpt: "项目打包速度慢？包体积太大？来看看这些 Webpack 优化技巧...",
    tags: ["Webpack", "构建优化", "工程化"],
    readTime: "9 分钟",
    content: "这里是文章内容，你可以使用 Markdown 格式编写..."
  }
];

export function getBlogPosts() {
  return blogPosts;
}

export function getBlogPost(id) {
  return blogPosts.find(post => post.id === parseInt(id));
}

export function getBlogPostsByCategory(category) {
  if (!category) return blogPosts;
  return blogPosts.filter(post => post.category === category);
}

