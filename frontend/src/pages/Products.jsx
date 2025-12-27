import React from "react";

export default function Products() {
  const services = [
    { name: "Airport Pickup / Drop-off", price: "$50" },
    { name: "Hourly Charter / Events", price: "$40 per hour" },
    { name: "Medical / Non-emergency Transport", price: "$60" },
    { name: "Package / Small Cargo Delivery", price: "$25" },
  ];

  return (
    <div style={{ maxWidth: 800, margin: "2em auto", padding: "0 1em" }}>
      <h1 style={{ color: "#003366" }}>Products / Services</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #003366", padding: "0.5em" }}>Service</th>
            <th style={{ border: "1px solid #003366", padding: "0.5em" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #003366", padding: "0.5em" }}>{service.name}</td>
              <td style={{ border: "1px solid #003366", padding: "0.5em" }}>{service.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
