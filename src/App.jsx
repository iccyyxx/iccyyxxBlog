import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import DemoList from './pages/DemoList'
import DemoDetail from './pages/DemoDetail'
import './App.css'

function App() {
  // GitHub Pages 部署时需要设置 basename
  const basename = import.meta.env.PROD ? '/iccyyxxBlog' : '';
  
  return (
    <Router basename={basename}>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/demos" element={<DemoList />} />
            <Route path="/demos/:id" element={<DemoDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

