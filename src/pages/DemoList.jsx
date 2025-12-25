import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllDemos, getDemosByCategory, getDemoCategories } from '../data/demos';
import './DemoList.css';

function DemoList() {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const categories = getDemoCategories();
  const demos = getDemosByCategory(selectedCategory);

  const difficultyColors = {
    '简单': '#2ed573',
    '中等': '#ffa502',
    '困难': '#ff4757'
  };

  return (
    <div className="demo-list-page">
      <div className="demo-list-container">
        <header className="demo-header">
          <h1 className="demo-page-title">✨ 实战 Demo 展示</h1>
          <p className="demo-page-subtitle">
            通过实际案例学习前端开发，每个 Demo 都包含完整代码和详细说明
          </p>
        </header>

        <div className="demo-categories">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="demos-grid">
          {demos.map(demo => (
            <Link
              key={demo.id}
              to={`/demos/${demo.id}`}
              className="demo-card"
            >
              <div className="demo-card-header">
                <h3 className="demo-card-title">{demo.title}</h3>
                <span
                  className="demo-difficulty"
                  style={{ backgroundColor: difficultyColors[demo.difficulty] }}
                >
                  {demo.difficulty}
                </span>
              </div>
              
              <p className="demo-card-description">{demo.description}</p>
              
              <div className="demo-card-footer">
                <div className="demo-tags">
                  {demo.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="demo-tag">
                      {tag}
                    </span>
                  ))}
                  {demo.tags.length > 3 && (
                    <span className="demo-tag">+{demo.tags.length - 3}</span>
                  )}
                </div>
                <span className="demo-view-link">
                  查看详情 →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {demos.length === 0 && (
          <div className="no-demos">
            <p>该分类下暂无 Demo 🎨</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DemoList;

