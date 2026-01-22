import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">NavBar UI</div>

      {/* MENU ICON (Mobile) */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* NAV LINKS */}
      <div className={`nav-links ${open ? "open" : ""}`}>
        <a href="#home" onClick={() => setOpen(false)}>
          Home
        </a>
        <a href="#about" onClick={() => setOpen(false)}>
          About
        </a>
        <a href="#services" onClick={() => setOpen(false)}>
          Services
        </a>
        <a href="#contact" onClick={() => setOpen(false)}>
          Contact
        </a>
      </div>

      {/* BUTTON */}
      <button className="nav-btn">Login</button>
    </nav>
  );
};

export default Navbar;