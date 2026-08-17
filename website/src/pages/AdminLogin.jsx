import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_BASE || "https://travelingstarservice-backend.onrender.com";

function AdminLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "admin@travelingstar.com",
    password: "TravelingStar123",
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await fetch(`${API_BASE}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Login failed.");
      }

      if (!data.token) {
        throw new Error("Authentication token missing from server response.");
      }

      localStorage.setItem("admin_token", data.token);
      navigate("/admin-dashboard");
    } catch (loginError) {
      setError(loginError.message || "Unable to sign in.");
    }
  };

  return (
    <section className="owner-login">
      <h1>🔐 Traveling Star Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="admin@travelingstar.com"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter admin password"
            required
          />
        </div>

        {error && <p role="alert">{error}</p>}

        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default AdminLogin;
