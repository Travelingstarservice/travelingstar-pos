import { Link, Navigate, useNavigate } from "react-router-dom";
import { isAdminLoggedIn, logoutAdmin } from "../utils/adminAuth";

function OwnerDashboard() {
  const navigate = useNavigate();

  if (!isAdminLoggedIn()) {
    return <Navigate to="/owner-login" replace />;
  }

  const handleLogout = () => {
    logoutAdmin();
    navigate("/owner-login");
  };

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
      <div className="owner-actions">
        <Link className="button button-secondary" to="/owner-login">
          Change PIN
        </Link>
        <button className="button button-secondary" type="button" onClick={handleLogout}>
          Close admin access
        </button>
      </div>
    </section>
  );
}

export default OwnerDashboard;
