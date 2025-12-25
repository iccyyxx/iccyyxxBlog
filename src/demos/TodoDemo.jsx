import { useState } from 'react';
import './TodoDemo.css';

function TodoDemo() {
  const [todos, setTodos] = useState([
    { id: 1, text: '学习 React Hooks', completed: true },
    { id: 2, text: '完成项目 Demo', completed: false }
  ]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="todo-demo">
      <div className="todo-container">
        <h2 className="todo-title">✨ 我的待办事项</h2>
        
        <div className="todo-input-group">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="添加新任务..."
            className="todo-input"
          />
          <button onClick={addTodo} className="todo-add-btn">
            添加
          </button>
        </div>

        <div className="todo-list">
          {todos.length === 0 ? (
            <div className="todo-empty">暂无待办事项 🎉</div>
          ) : (
            todos.map(todo => (
              <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="todo-checkbox"
                />
                <span className="todo-text">{todo.text}</span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="todo-delete-btn"
                >
                  删除
                </button>
              </div>
            ))
          )}
        </div>

        <div className="todo-stats">
          <span>总计: {todos.length}</span>
          <span>已完成: {todos.filter(t => t.completed).length}</span>
          <span>未完成: {todos.filter(t => !t.completed).length}</span>
        </div>
      </div>
    </div>
  );
}

export const code = `import { useState } from 'react';

function TodoDemo() {
  const [todos, setTodos] = useState([
    { id: 1, text: '学习 React Hooks', completed: true },
    { id: 2, text: '完成项目 Demo', completed: false }
  ]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-demo">
      {/* ... UI 代码 ... */}
    </div>
  );
}`;

export const description = `
## 功能说明

经典的待办事项列表应用，包含完整的 CRUD 操作。

### 核心功能

1. **添加任务**：输入框添加新任务，支持回车快捷键
2. **标记完成**：点击复选框切换任务状态
3. **删除任务**：移除不需要的任务
4. **统计信息**：实时显示任务统计

### 技术要点

- **状态管理**：使用 useState 管理任务列表
- **数组操作**：map、filter 等方法处理数据
- **条件渲染**：根据状态显示不同 UI
- **事件处理**：表单输入、按钮点击、键盘事件

### 学习价值

这是学习 React 状态管理的经典案例，涵盖了：
- 列表渲染和 key 的使用
- 不可变数据更新模式
- 受控组件的实现
- 用户交互处理
`;

export default TodoDemo;

