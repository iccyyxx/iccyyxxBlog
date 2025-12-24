import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import { getBlogPost, getBlogPosts, loadBlogContent } from '../data/blogPosts'
import './BlogPost.css'
import 'highlight.js/styles/github-dark.css'

function BlogPost() {
  const { id } = useParams()
  const navigate = useNavigate()
  const post = getBlogPost(id)
  const allPosts = getBlogPosts()
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    if (post && post.contentFile) {
      setLoading(true)
      loadBlogContent(post.contentFile)
        .then(markdownContent => {
          if (markdownContent) {
            setContent(markdownContent)
          } else {
            setContent('# 文章内容加载失败\n\n抱歉，无法加载文章内容。')
          }
          setLoading(false)
        })
        .catch(error => {
          console.error('加载文章失败:', error)
          setContent('# 文章内容加载失败\n\n抱歉，无法加载文章内容。')
          setLoading(false)
        })
    }
  }, [post])
  
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
          {loading ? (
            <div className="loading-content">
              <div className="loading-spinner"></div>
              <p>加载中...</p>
            </div>
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight, rehypeRaw]}
              components={{
                h1: ({node, ...props}) => <h1 className="content-h1" {...props} />,
                h2: ({node, ...props}) => <h2 className="content-h2" {...props} />,
                h3: ({node, ...props}) => <h3 className="content-h3" {...props} />,
                p: ({node, ...props}) => <p className="content-paragraph" {...props} />,
                code: ({node, inline, className, children, ...props}) => {
                  return inline ? (
                    <code className="inline-code" {...props}>
                      {children}
                    </code>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                },
                pre: ({node, ...props}) => <pre className="code-block" {...props} />,
                table: ({node, ...props}) => (
                  <div className="table-wrapper">
                    <table className="content-table" {...props} />
                  </div>
                ),
                blockquote: ({node, ...props}) => <blockquote className="content-blockquote" {...props} />,
                ul: ({node, ...props}) => <ul className="content-ul" {...props} />,
                ol: ({node, ...props}) => <ol className="content-ol" {...props} />,
                li: ({node, ...props}) => <li className="content-li" {...props} />,
              }}
            >
              {content}
            </ReactMarkdown>
          )}
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
