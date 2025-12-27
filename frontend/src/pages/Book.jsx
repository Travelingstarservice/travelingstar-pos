import React, { useState } from "react";
import { sendBooking } from "../api/api";

export default function Book() {
  const [form, setForm] = useState({ name: "", phone: "", service: "" });
  const [status, setStatus] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const res = await sendBooking(form);
    setStatus(res.message);
  };

  return (
    <div style={{ maxWidth: 600, margin: "2em auto" }}>
      <h1>Book a Ride</h1>

      <form onSubmit={submit}>
        <input placeholder="Name" required
          onChange={e => setForm({ ...form, name: e.target.value })} /><br/><br/>

        <input placeholder="Phone" required
          onChange={e => setForm({ ...form, phone: e.target.value })} /><br/><br/>

        <input placeholder="Service"
          onChange={e => setForm({ ...form, service: e.target.value })} /><br/><br/>

        <button type="submit">Submit</button>
      </form>

      <p>{status}</p>
    </div>
  );
}
