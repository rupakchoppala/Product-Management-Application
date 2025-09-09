import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Header.css";

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const query = e.target.value.toLowerCase().trim();
      if (["home", "about", "contact", "products"].includes(query)) {
        navigate(`/${query === "home" ? "" : query}`);
      } else {
        alert("Page not found! Try Home, About, Contact, or Products.");
      }
      e.target.value = "";
    }
  };

  return (
    <header className="app-header">
      <div className="container header-inner">
        <div className="brand" onClick={() => navigate("/")}>
          <div className="logo">PM</div>
          <div className="brand-text">
            <span className="title">Product Management</span>
           
          </div>
        </div>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
        <div className="header-actions">
          <input
            className="header-search"
            placeholder="Quick search..."
            onKeyDown={handleSearch}
          />
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}
