import blogData from "../data/blogData";
import BlogCard from "../components/BlogCard";

function Home() {
  return (
    <div className="container">
      <h2>Latest Blogs</h2>

      {blogData.slice(0, 3).map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default Home;
