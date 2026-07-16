import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <Link className="logo" to="/">
        ⭐ Traveling Star Service
      </Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/services">
          Services
        </Link>

        <Link to="/pricing">
          Pricing
        </Link>

        <Link to="/booking">
          Booking
        </Link>

        <Link to="/contact">
          Contact
        </Link>

        <Link to="/owner-login">
          Owner Login
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;
