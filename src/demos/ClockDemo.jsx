import { useState, useEffect } from 'react';
import './ClockDemo.css';

function ClockDemo() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="clock-demo">
      <div className="clock-container">
        <div className="time-display">
          <span className="time-unit">{hours}</span>
          <span className="separator">:</span>
          <span className="time-unit">{minutes}</span>
          <span className="separator">:</span>
          <span className="time-unit">{seconds}</span>
        </div>
        <div className="date-display">
          {time.toLocaleDateString('zh-CN', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            weekday: 'long'
          })}
        </div>
      </div>
    </div>
  );
}

// 导出代码字符串用于展示
export const code = `import { useState, useEffect } from 'react';

function ClockDemo() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="clock-demo">
      <div className="clock-container">
        <div className="time-display">
          <span className="time-unit">{hours}</span>
          <span className="separator">:</span>
          <span className="time-unit">{minutes}</span>
          <span className="separator">:</span>
          <span className="time-unit">{seconds}</span>
        </div>
        <div className="date-display">
          {time.toLocaleDateString('zh-CN', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            weekday: 'long'
          })}
        </div>
      </div>
    </div>
  );
}

export default ClockDemo;`;

// 导出描述信息
export const description = `
## 功能说明

这是一个实时更新的数字时钟 Demo，展示了以下 React 概念：

### 核心知识点

1. **useState Hook**：管理时间状态
2. **useEffect Hook**：设置定时器和清理副作用
3. **时间格式化**：使用 JavaScript Date API
4. **CSS 动画**：平滑的视觉效果

### 实现要点

- 使用 \`setInterval\` 每秒更新时间
- 在组件卸载时清理定时器，避免内存泄漏
- 使用 \`padStart\` 确保时间显示为两位数
- 使用 \`toLocaleDateString\` 格式化日期显示

### 适用场景

- 学习 React Hooks 基础用法
- 理解副作用和清理机制
- 实践时间处理和格式化
`;

export default ClockDemo;

