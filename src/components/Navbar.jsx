import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="My Blog Logo" />
        <span>My Blog</span>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">All Blogs</Link>
        </li>
        <li>
          <Link to="/create">Create Blog</Link>
        </li>
        <li>
          <Link to="/edit">Edit Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <button
        onClick={() => {
          document.body.classList.toggle("dark");
        }}
        style={{
          background: "transparent",
          border: "1px solid #ccc",
          color: "white",
          padding: "5px 10px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        🌙 Dark
      </button>
    </nav>
  );
}

export default Navbar;
