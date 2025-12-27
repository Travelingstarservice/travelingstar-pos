import React from "react";

export default function Payment() {
  return (
    <div style={{ maxWidth: 700, margin: "2em auto", padding: "1em" }}>
      <h1 style={{ color: "#003366" }}>Pay with Cash App</h1>

      <p>Please send payment to:</p>

      <h2>$TravelingStarTransport</h2>

      <p>
        After payment, include:
        <ul>
          <li>Your Name</li>
          <li>Pickup Date</li>
          <li>Service Type</li>
        </ul>
      </p>

      <p>
        Questions? Call <strong>(252) 969-2444</strong>
      </p>
    </div>
  );
}
