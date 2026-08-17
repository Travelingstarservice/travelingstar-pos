import { useState } from "react";

function OwnerLogin() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const apiBase = (import.meta.env.VITE_API_BASE ||
    "https://travelingstarservice-backend.onrender.com").replace(/\/$/, "");
  const posUrl = (import.meta.env.VITE_POS_URL || "http://localhost:5173").replace(
    /\/$/,
    "",
  );

  const login = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch(`${apiBase}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pin }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || "Unable to log in.");
      }

      if (!result.token) {
        throw new Error("Login response did not include a token.");
      }

      sessionStorage.setItem("adminToken", result.token);
      window.location.assign(`${posUrl}/admin-dashboard`);
    } catch (loginError) {
      setError(loginError.message);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="owner-login">
      <h1>🔐 Traveling Star Admin Login</h1>
      <form onSubmit={login}>
        <input
          type="password"
          inputMode="numeric"
          autoComplete="current-password"
          placeholder="Enter admin PIN"
          value={pin}
          onChange={(event) => setPin(event.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
      {error && <p role="alert">{error}</p>}
    </div>
  );
}

export default OwnerLogin;
