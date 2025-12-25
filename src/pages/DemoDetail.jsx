import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDemoById } from '../data/demos';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './DemoDetail.css';

// Demo 组件映射函数
const getDemoComponent = (componentPath) => {
  const components = {
    ClockDemo: () => import('../demos/ClockDemo'),
    TodoDemo: () => import('../demos/TodoDemo'),
    ColorPickerDemo: () => import('../demos/ColorPickerDemo')
  };
  return components[componentPath];
};

function DemoDetail() {
  const { id } = useParams();
  const demo = getDemoById(id);
  const [activeTab, setActiveTab] = useState('preview');
  const [DemoComponent, setDemoComponent] = useState(null);
  const [demoCode, setDemoCode] = useState('// 代码加载中...');
  const [demoDescription, setDemoDescription] = useState('加载中...');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!demo) return;

    const loadDemo = async () => {
      setLoading(true);
      try {
        const componentLoader = getDemoComponent(demo.componentPath);
        if (componentLoader) {
          const module = await componentLoader();
          setDemoComponent(() => module.default);
          setDemoCode(module.code || '// 代码未提供');
          setDemoDescription(module.description || '暂无描述');
        }
      } catch (error) {
        console.error('Failed to load demo:', error);
        setDemoCode('// 加载失败');
        setDemoDescription('加载失败，请刷新重试');
      } finally {
        setLoading(false);
      }
    };

    loadDemo();
  }, [demo]);

  if (!demo) {
    return (
      <div className="demo-detail-page">
        <div className="demo-not-found">
          <h2>😢 Demo 未找到</h2>
          <Link to="/demos" className="back-link">返回 Demo 列表</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="demo-detail-page">
      <div className="demo-detail-container">
        <header className="demo-detail-header">
          <Link to="/demos" className="back-button">
            ← 返回列表
          </Link>
          <h1 className="demo-detail-title">{demo.title}</h1>
          <p className="demo-detail-subtitle">{demo.description}</p>
          <div className="demo-meta">
            <span className="demo-category">{demo.category}</span>
            <span className="demo-difficulty-badge">{demo.difficulty}</span>
            {demo.tags.map((tag, index) => (
              <span key={index} className="demo-tag-badge">{tag}</span>
            ))}
          </div>
        </header>

        <div className="demo-tabs">
          <button
            className={`demo-tab ${activeTab === 'preview' ? 'active' : ''}`}
            onClick={() => setActiveTab('preview')}
          >
            🎨 效果预览
          </button>
          <button
            className={`demo-tab ${activeTab === 'code' ? 'active' : ''}`}
            onClick={() => setActiveTab('code')}
          >
            💻 源代码
          </button>
          <button
            className={`demo-tab ${activeTab === 'description' ? 'active' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            📖 说明文档
          </button>
        </div>

        <div className="demo-content">
          {activeTab === 'preview' && (
            <div className="demo-preview-section">
              {loading ? (
                <div className="demo-loading">
                  <div className="loading-spinner"></div>
                  <p>Demo 加载中...</p>
                </div>
              ) : DemoComponent ? (
                <DemoComponent />
              ) : (
                <div className="demo-loading">
                  <p>Demo 加载失败</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'code' && (
            <div className="demo-code-section">
              <div className="code-header">
                <span className="code-language">JavaScript (React)</span>
                <button
                  className="copy-code-btn"
                  onClick={() => {
                    navigator.clipboard.writeText(demoCode);
                    alert('代码已复制到剪贴板！');
                  }}
                >
                  📋 复制代码
                </button>
              </div>
              <SyntaxHighlighter
                language="jsx"
                style={tomorrow}
                customStyle={{
                  margin: 0,
                  borderRadius: '0 0 15px 15px',
                  fontSize: '0.95rem'
                }}
              >
                {demoCode}
              </SyntaxHighlighter>
            </div>
          )}

          {activeTab === 'description' && (
            <div className="demo-description-section">
              <div className="markdown-content">
                <ReactMarkdown>{demoDescription}</ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DemoDetail;

