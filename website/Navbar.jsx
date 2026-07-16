import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar">

      <div className="brand">

        <span className="star">
          ★
        </span>

        <span>
          Traveling Star Service
        </span>

      </div>


      <div className="menu">

        <Link to="/">Home</Link>

        <Link to="/services">Services</Link>

        <Link to="/pricing">Pricing</Link>

        <Link to="/booking">Booking</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/owner-login">Owner Login</Link>

      </div>


      <div>

        <a href="tel:2528865996">
          ☎ Call
        </a>

        <a href="sms:2528865996">
          💬 Text
        </a>

      </div>


    </nav>

  );

}

export default Navbar;