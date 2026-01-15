import { useParams } from "react-router-dom";
import blogData from "../data/blogData";

function BlogDetails() {
  const blogs =
    JSON.parse(localStorage.getItem("blogs")) || blogData;
  const { id } = useParams();

  const blog = blogs.find(
    (item) => item.id === parseInt(id)
  );

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div className="container blog-details">
      <h2>{blog.title}</h2>

      <p><b>Author:</b> {blog.author}</p>
      <p><b>Date:</b> {blog.date}</p>
      <p><b>Category:</b> {blog.category}</p>

      <hr />

      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetails;
