import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getBlogPosts } from '../data/blogPosts'
import './BlogList.css'

function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const allPosts = getBlogPosts()
  
  const categories = ['全部', '算法', '前端开发']
  
  const filteredPosts = selectedCategory === '全部' 
    ? allPosts 
    : allPosts.filter(post => post.category === selectedCategory)

  return (
    <div className="blog-list">
      <div className="blog-list-container">
        <header className="blog-header">
          <h1 className="blog-title">
            <span className="title-icon">📚</span>
            我的博客
          </h1>
          <p className="blog-subtitle">记录学习与成长的点点滴滴</p>
        </header>

        <div className="category-filter">
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

        <div className="posts-grid">
          {filteredPosts.map((post, index) => (
            <article 
              key={post.id} 
              className="post-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="post-category-badge">
                {post.category === '算法' ? '🧮' : '💻'} {post.category}
              </div>
              
              <Link to={`/blog/${post.id}`} className="post-link">
                <h2 className="post-title">{post.title}</h2>
              </Link>
              
              <p className="post-excerpt">{post.excerpt}</p>
              
              <div className="post-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="post-tag">#{tag}</span>
                ))}
              </div>
              
              <div className="post-meta">
                <span className="post-date">📅 {post.date}</span>
                <span className="post-read-time">⏱️ {post.readTime}</span>
              </div>
              
              <Link to={`/blog/${post.id}`} className="read-more">
                阅读全文 →
              </Link>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="no-posts">
            <div className="no-posts-icon">📭</div>
            <p>暂无相关文章</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogList

