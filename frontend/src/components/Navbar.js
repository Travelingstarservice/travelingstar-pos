import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#003366", color: "white" }}>
      <Link to="/" style={{ margin: "1rem", color: "white" }}>Home</Link>
      <Link to="/book" style={{ margin: "1rem", color: "white" }}>Book</Link>
      <Link to="/products" style={{ margin: "1rem", color: "white" }}>Services</Link>
      <Link to="/about" style={{ margin: "1rem", color: "white" }}>About</Link>
    </nav>
  );
}
