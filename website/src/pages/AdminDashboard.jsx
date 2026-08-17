import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_BASE || "https://travelingstarservice-backend.onrender.com";

function AdminDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");

    if (!token) {
      navigate("/admin-login");
      return;
    }

    fetch(`${API_BASE}/api/admin/me`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Unauthorized");
        }

        const data = await response.json();
        setUser(data.user || { email: "admin@travelingstar.com", role: "admin" });
      })
      .catch(() => {
        localStorage.removeItem("admin_token");
        navigate("/admin-login");
      });
  }, [navigate]);

  if (!user) {
    return <section className="owner-dashboard"><p>Loading admin dashboard...</p></section>;
  }

  return (
    <section className="owner-dashboard">
      <p className="eyebrow">Admin area</p>
      <h1>Traveling Star Admin Dashboard</h1>
      <p>Signed in as {user.email}</p>
      <p>Secure access is active for the admin dashboard.</p>
    </section>
  );
}

export default AdminDashboard;
