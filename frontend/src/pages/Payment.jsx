import React from "react";
import QRCode from "react-qr-code";

export default function Payment() {
  return (
    <div style={{ maxWidth: 600, margin: "2em auto", textAlign: "center" }}>
      <h1>Pay with Cash App</h1>
      <QRCode value="cashapp://$TravelingStarTransport" size={128} />
      <p>Send payment to <strong>$TravelingStarTransport</strong></p>
      <p>Include your Name, Pickup Date, and Service Type</p>
      <p>Questions? Call (252) 969-2444</p>
    </div>
  );
}



