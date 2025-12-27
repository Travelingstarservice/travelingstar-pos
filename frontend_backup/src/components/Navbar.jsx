import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav style={{ backgroundColor: "#003366", padding: "1em", color: "white" }}>
      <Link to="/" style={{ color: "white", marginRight: "1em" }}>Home</Link>
      <Link to="/book" style={{ color: "white", marginRight: "1em" }}>Book</Link>
      <Link to="/about" style={{ color: "white", marginRight: "1em" }}>About</Link>
      <Link to="/products" style={{ color: "white" }}>Products</Link>
    </nav>
  );
}
