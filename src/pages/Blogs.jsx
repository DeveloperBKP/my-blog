import blogData from "../data/blogData";
import BlogCard from "../components/BlogCard";

function Blogs() {
  const blogs =
    JSON.parse(localStorage.getItem("blogs")) || blogData;

  return (
    <div className="container">
      <h2>All Blogs</h2>

      {blogs.length === 0 && <p>No blogs available</p>}

      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default Blogs;
