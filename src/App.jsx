import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import BlogDetails from './pages/BlogDetails.jsx'
import CreateBlog from './pages/CreateBlog.jsx'
import EditBlog from './pages/EditBlog.jsx'
import About from './pages/About.jsx'
function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/edit/:id" element={<EditBlog />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;