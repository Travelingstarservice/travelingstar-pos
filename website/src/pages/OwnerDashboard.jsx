import { Link } from "react-router-dom";

function OwnerDashboard() {
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
    </section>
  );
}

export default OwnerDashboard;
