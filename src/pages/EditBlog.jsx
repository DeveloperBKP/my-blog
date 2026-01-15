import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import blogData from "../data/blogData";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogs =
    JSON.parse(localStorage.getItem("blogs")) || blogData;

  const blog = blogs.find(
    (item) => item.id === Number(id)
  );

  const [title, setTitle] = useState(blog?.title || "");
  const [author, setAuthor] = useState(blog?.author || "");
  const [content, setContent] = useState(blog?.content || "");

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedBlogs = blogs.map((item) =>
      item.id === Number(id)
        ? { ...item, title, author, content }
        : item
    );

    localStorage.setItem(
      "blogs",
      JSON.stringify(updatedBlogs)
    );

    navigate("/blogs");
  };

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div className="container">
      <h2>Edit Blog</h2>

      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <br /><br />

        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
}

export default EditBlog;
