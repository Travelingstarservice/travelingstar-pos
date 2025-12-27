import React from "react";

export default function Home() {
  return (
    <div style={{ maxWidth: 800, margin: "2em auto", padding: "0 1em" }}>
      <h1 style={{ color: "#003366" }}>Welcome to Traveling Star Transport</h1>
      <p>Fast, safe, and dependable transportation in your area. Airport pickups, hourly rides, and special event transport.</p>
      <h2>Our Services</h2>
      <ul>
        <li>Airport pickups & drop-offs</li>
        <li>Hourly charters & events</li>
        <li>Medical & non-emergency transport</li>
        <li>Package & small cargo deliveries</li>
      </ul>
    </div>
  );
}
