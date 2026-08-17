import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE } from "../config";

function OwnerDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      navigate("/admin-login", { replace: true });
      return;
    }

    fetch(`${API_BASE}/api/admin/dashboard`, {
      headers: { Authorization: "Bearer " + token },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Your session has expired");
        }
        return response.json();
      })
      .then(() => setIsLoading(false))
      .catch((dashboardError) => {
        localStorage.removeItem("admin_token");
        setError(dashboardError.message);
        navigate("/admin-login", { replace: true });
      });
  }, [navigate]);

  if (isLoading && !error) {
    return <section className="owner-dashboard"><p>Loading dashboard...</p></section>;
  }

  return (
    <section className="owner-dashboard">
      <p className="eyebrow">Owner area</p>
      <h1>Traveling Star Service dashboard</h1>
      <p>Quickly review the public pages your customers use to book and contact you.</p>

      <div className="dashboard-actions">
        <Link to="/booking">View booking page</Link>
        <Link to="/services">Review services</Link>
        <Link to="/pricing">Review pricing</Link>
        <Link to="/contact">Review contact details</Link>
      </div>
      {error && <p role="alert">{error}</p>}
    </section>
  );
}

export default OwnerDashboard;
