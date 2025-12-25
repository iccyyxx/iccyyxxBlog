import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🌸</span>
          <span className="logo-text">iccyyxx's Blog</span>
        </Link>
        
        <ul className="navbar-menu">
          <li>
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              <span className="nav-icon">🏠</span>
              首页
            </Link>
          </li>
          <li>
            <Link 
              to="/blog" 
              className={`nav-link ${location.pathname.includes('/blog') ? 'active' : ''}`}
            >
              <span className="nav-icon">📝</span>
              博客
            </Link>
          </li>
          <li>
            <Link 
              to="/demos" 
              className={`nav-link ${location.pathname.includes('/demos') ? 'active' : ''}`}
            >
              <span className="nav-icon">✨</span>
              Demo
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

