import React, { useState } from "react";
import { sendBooking } from "../api/api";

export default function Book() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "" });
  const [status, setStatus] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const res = await sendBooking(form);
    setStatus(res.message);
  };

  return (
    <div style={{ maxWidth: 600, margin: "2em auto" }}>
      <h1>Book a Ride</h1>
      <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input placeholder="Name" required onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Phone" required onChange={e => setForm({ ...form, phone: e.target.value })} />
        <input type="date" required onChange={e => setForm({ ...form, date: e.target.value })} />
        <select required onChange={e => setForm({ ...form, service: e.target.value })}>
          <option value="">Select Service</option>
          <option value="Airport Pickup">Airport Pickup</option>
          <option value="Hourly Charter">Hourly Charter</option>
          <option value="Medical Transport">Medical Transport</option>
        </select>
        <button type="submit" style={{ backgroundColor: "#003366", color: "white", padding: "0.5rem", borderRadius: "5px" }}>Submit</button>
      </form>
      {status && <p style={{ marginTop: "1rem", color: "green" }}>{status}</p>}
    </div>
  );
}

