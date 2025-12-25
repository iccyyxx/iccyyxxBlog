// Demo 数据管理
// 每个 Demo 包含：组件、代码、描述等信息

export const demosData = [
  {
    id: 1,
    title: "动态时钟",
    category: "React",
    description: "一个实时更新的数字时钟，展示 React Hooks 的使用",
    tags: ["React", "Hooks", "useState", "useEffect"],
    difficulty: "简单",
    componentPath: "ClockDemo"
  },
  {
    id: 2,
    title: "待办事项列表",
    category: "React",
    description: "经典的 Todo List 应用，包含添加、删除、标记完成等功能",
    tags: ["React", "状态管理", "表单处理"],
    difficulty: "简单",
    componentPath: "TodoDemo"
  },
  {
    id: 3,
    title: "颜色选择器",
    category: "CSS",
    description: "交互式颜色选择器，展示 CSS 渐变和颜色处理",
    tags: ["CSS", "交互", "颜色"],
    difficulty: "中等",
    componentPath: "ColorPickerDemo"
  }
];

// 获取所有 Demo
export function getAllDemos() {
  return demosData;
}

// 根据 ID 获取 Demo
export function getDemoById(id) {
  return demosData.find(demo => demo.id === parseInt(id));
}

// 根据分类获取 Demo
export function getDemosByCategory(category) {
  if (!category || category === '全部') {
    return demosData;
  }
  return demosData.filter(demo => demo.category === category);
}

// 获取所有分类
export function getDemoCategories() {
  const categories = ['全部', ...new Set(demosData.map(demo => demo.category))];
  return categories;
}

