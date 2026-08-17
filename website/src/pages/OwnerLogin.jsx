import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAdminLoggedIn, loginAdmin, logoutAdmin, updateAdminPin } from "../utils/adminAuth";

function OwnerLogin() {
  const [pin, setPin] = useState("");
  const [currentPin, setCurrentPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(() => isAdminLoggedIn());
  const navigate = useNavigate();

  const handleLogin = () => {
    setError("");
    setMessage("");

    if (loginAdmin(pin)) {
      setLoggedIn(true);
      setMessage("Admin login opened on this device.");
      navigate("/owner-dashboard");
      return;
    }

    setError("Incorrect PIN.");
  };

  const handleLogout = () => {
    logoutAdmin();
    setLoggedIn(false);
    setMessage("Admin access closed.");
    setError("");
  };

  const handlePinChange = () => {
    setError("");
    setMessage("");

    if (newPin !== confirmPin) {
      setError("New PIN confirmation does not match.");
      return;
    }

    const result = updateAdminPin(currentPin, newPin);
    if (!result.success) {
      setError(result.message);
      return;
    }

    setCurrentPin("");
    setNewPin("");
    setConfirmPin("");
    setMessage(result.message);
  };

  return (
    <section className="owner-login">
      <p className="eyebrow">Owner area</p>
      <h1>🔐 Traveling Star Admin Login</h1>

      {error && <p className="owner-error">{error}</p>}
      {message && <p className="owner-message">{message}</p>}

      <div className="owner-panel">
        <h2>Login</h2>
        <input
          type="password"
          placeholder="Enter admin PIN"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
        <button className="button button-primary" type="button" onClick={handleLogin}>
          Open admin access
        </button>
      </div>

      {loggedIn && (
        <div className="owner-panel">
          <h2>Change PIN</h2>
          <input
            type="password"
            placeholder="Current PIN"
            aria-label="Current PIN"
            value={currentPin}
            onChange={(e) => setCurrentPin(e.target.value)}
          />
          <input
            type="password"
            placeholder="New PIN (min 4 characters)"
            aria-label="New PIN"
            value={newPin}
            onChange={(e) => setNewPin(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm new PIN"
            aria-label="Confirm new PIN"
            value={confirmPin}
            onChange={(e) => setConfirmPin(e.target.value)}
          />
          <button className="button button-primary" type="button" onClick={handlePinChange}>
            Update PIN
          </button>
          <div className="owner-actions">
            <Link className="button button-secondary" to="/owner-dashboard">
              Go to dashboard
            </Link>
            <button className="button button-secondary" type="button" onClick={handleLogout}>
              Close admin access
            </button>
          </div>
        </div>
      )}
    </section>
  );

}

export default OwnerLogin;

