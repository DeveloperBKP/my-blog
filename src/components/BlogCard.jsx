import { Link, useNavigate } from "react-router-dom";

function BlogCard({ blog }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmDelete) return;

    const blogs =
      JSON.parse(localStorage.getItem("blogs")) || [];

    const updatedBlogs = blogs.filter(
      (item) => item.id !== blog.id
    );

    localStorage.setItem(
      "blogs",
      JSON.stringify(updatedBlogs)
    );

    // page refresh taaki UI update ho
    window.location.reload();
  };

  return (
    <div className="blog-card">
      <h3>{blog.title}</h3>

      <p>
        {(blog.content || blog.description || "")
          .slice(0, 100)}...
      </p>

      <Link to={`/blogs/${blog.id}`}>Read More</Link>

      <br /><br />

     <div className="btn-group">
  <button
    className="edit-btn"
    onClick={() => navigate(`/edit/${blog.id}`)}
  >
    Edit
  </button>

  <button
    className="delete-btn"
    onClick={handleDelete}
  >
    Delete
  </button>
</div>
    </div>
  );
}

export default BlogCard;
