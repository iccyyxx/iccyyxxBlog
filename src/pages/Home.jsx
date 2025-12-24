import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-emoji">👩‍💻✨</div>
          <h1 className="hero-title">
            Hi! 我是 <span className="highlight">iccyyxx</span>
          </h1>
          <p className="hero-subtitle">
            一个热爱前端开发和算法的程序媛 🌸
          </p>
          <p className="hero-description">
            在这里记录我的学习历程、算法刷题心得和工作中的技术实践
          </p>
          <div className="hero-buttons">
            <Link to="/blog" className="btn btn-primary">
              <span>📚</span>
              查看博客
            </Link>
          </div>
        </div>
        
        <div className="floating-elements">
          <div className="float-item" style={{ top: '10%', left: '10%' }}>💖</div>
          <div className="float-item" style={{ top: '20%', right: '15%' }}>⭐</div>
          <div className="float-item" style={{ bottom: '15%', left: '20%' }}>🌈</div>
          <div className="float-item" style={{ bottom: '25%', right: '10%' }}>✨</div>
          <div className="float-item" style={{ top: '50%', left: '5%' }}>🎀</div>
          <div className="float-item" style={{ top: '60%', right: '8%' }}>🦄</div>
        </div>
      </section>

      <section className="features">
        <div className="features-container">
          <h2 className="section-title">博客内容 📖</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🧮</div>
              <h3>算法学习</h3>
              <p>LeetCode 刷题记录、数据结构与算法总结</p>
              <div className="feature-tags">
                <span className="tag">数据结构</span>
                <span className="tag">算法</span>
                <span className="tag">LeetCode</span>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>前端开发</h3>
              <p>工作中的技术方案、最佳实践和踩坑记录</p>
              <div className="feature-tags">
                <span className="tag">React</span>
                <span className="tag">Vue</span>
                <span className="tag">工程化</span>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>技术分享</h3>
              <p>有趣的技术探索、开源项目和学习心得</p>
              <div className="feature-tags">
                <span className="tag">CSS</span>
                <span className="tag">性能优化</span>
                <span className="tag">工具</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2>开始探索吧！ 🚀</h2>
          <p>一起在代码的世界里成长</p>
          <Link to="/blog" className="btn btn-secondary">
            进入博客
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

