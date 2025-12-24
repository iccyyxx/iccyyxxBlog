import { useParams, Link, useNavigate } from 'react-router-dom'
import { getBlogPost, getBlogPosts } from '../data/blogPosts'
import './BlogPost.css'

function BlogPost() {
  const { id } = useParams()
  const navigate = useNavigate()
  const post = getBlogPost(id)
  const allPosts = getBlogPosts()
  
  if (!post) {
    return (
      <div className="blog-post">
        <div className="post-not-found">
          <div className="not-found-icon">😢</div>
          <h2>文章未找到</h2>
          <p>抱歉，这篇文章不存在或已被删除</p>
          <Link to="/blog" className="btn btn-primary">
            返回博客列表
          </Link>
        </div>
      </div>
    )
  }

  const currentIndex = allPosts.findIndex(p => p.id === post.id)
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  return (
    <div className="blog-post">
      <article className="post-container">
        <button className="back-btn" onClick={() => navigate('/blog')}>
          ← 返回列表
        </button>

        <header className="post-header">
          <div className="post-category-badge">
            {post.category === '算法' ? '🧮' : '💻'} {post.category}
          </div>
          
          <h1 className="post-title-main">{post.title}</h1>
          
          <div className="post-meta-info">
            <span className="meta-item">📅 {post.date}</span>
            <span className="meta-item">⏱️ {post.readTime}</span>
          </div>
          
          <div className="post-tags-list">
            {post.tags.map(tag => (
              <span key={tag} className="post-tag">#{tag}</span>
            ))}
          </div>
        </header>

        <div className="post-content">
          {post.content.split('\n').map((paragraph, index) => {
            // 处理标题
            if (paragraph.startsWith('# ')) {
              return <h1 key={index} className="content-h1">{paragraph.slice(2)}</h1>
            }
            if (paragraph.startsWith('## ')) {
              return <h2 key={index} className="content-h2">{paragraph.slice(3)}</h2>
            }
            if (paragraph.startsWith('### ')) {
              return <h3 key={index} className="content-h3">{paragraph.slice(4)}</h3>
            }
            
            // 处理代码块
            if (paragraph.startsWith('```')) {
              const language = paragraph.slice(3)
              return <div key={index} className="code-block-marker" data-lang={language}></div>
            }
            
            // 处理普通段落
            if (paragraph.trim()) {
              return <p key={index} className="content-paragraph">{paragraph}</p>
            }
            
            return <br key={index} />
          })}
        </div>

        <footer className="post-footer">
          <div className="post-navigation">
            {prevPost && (
              <Link to={`/blog/${prevPost.id}`} className="nav-link prev-post">
                <span className="nav-label">← 上一篇</span>
                <span className="nav-title">{prevPost.title}</span>
              </Link>
            )}
            
            {nextPost && (
              <Link to={`/blog/${nextPost.id}`} className="nav-link next-post">
                <span className="nav-label">下一篇 →</span>
                <span className="nav-title">{nextPost.title}</span>
              </Link>
            )}
          </div>

          <div className="post-actions">
            <Link to="/blog" className="btn btn-secondary">
              查看更多文章
            </Link>
          </div>
        </footer>
      </article>
    </div>
  )
}

export default BlogPost

