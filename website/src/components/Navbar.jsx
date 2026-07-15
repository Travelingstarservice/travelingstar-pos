import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        ⭐ Traveling Star Service
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/booking">Book Service</Link>
        <Link to="/dashboard">Customer Dashboard</Link>
        <Link to="/owner">Owner Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;