import React from "react";

export default function Products() {
  const services = [
    { name: "Airport Pickup", price: "$75" },
    { name: "Hourly Charter", price: "$60/hr" },
    { name: "Medical Transport", price: "$50" }
  ];

  return (
    <div style={{ maxWidth: 600, margin: "2em auto" }}>
      <h1>Services & Pricing</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "#003366", color: "white" }}>
          <tr>
            <th style={{ padding: "0.5em" }}>Service</th>
            <th style={{ padding: "0.5em" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {services.map((s, i) => (
            <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#f4f4f4" : "white" }}>
              <td style={{ padding: "0.5em" }}>{s.name}</td>
              <td style={{ padding: "0.5em" }}>{s.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

