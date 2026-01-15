import { useState } from "react";
import { useNavigate } from "react-router-dom";
import blogData from "../data/blogData";

function CreateBlog() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedBlogs =
      JSON.parse(localStorage.getItem("blogs")) || blogData;

    const newBlog = {
      id: Date.now(),
      title,
      author,
      content,
      date: new Date().toLocaleDateString(),
      category: "General",
    };

    const updatedBlogs = [...storedBlogs, newBlog];

    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

    navigate("/blogs");
  };

  return (
    <div className="container">
      <h2>Create Blog</h2>

      <form onSubmit={handleSubmit}>
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

        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
}

export default CreateBlog;
