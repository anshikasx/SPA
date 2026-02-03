import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h3 className="logo">
        <Link to="/profile">My Profile</Link>
      </h3>

      <div className="nav-links">
        <Link to="/profile">Profile</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Header;