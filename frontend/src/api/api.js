const API_URL = process.env.REACT_APP_API_URL || "http://localhost:10000";

export async function sendBooking(data) {
  const res = await fetch(`${API_URL}/api/book`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

