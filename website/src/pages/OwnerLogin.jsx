import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getStoredPin,
  isAdminLoggedIn,
  loginAdmin,
  logoutAdmin,
  updateAdminPin,
} from "../utils/adminAuth";

function OwnerLogin() {

  const [password, setPassword] = useState("");
  const [showPinChange, setShowPinChange] = useState(false);
  const [currentPin, setCurrentPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const navigate = useNavigate();

  const login = () => {

    if (password === "TravelingStar123") {

      loginAdmin();
      navigate("/owner-dashboard");

    } else {

      alert("Incorrect Password");

    }

  };

  const handlePinChange = () => {

    const stored = getStoredPin();

    if (stored && currentPin !== stored) {
      alert("Current PIN is incorrect");
      return;
    }

    if (newPin !== confirmPin) {
      alert("New PINs do not match");
      return;
    }

    if (newPin.length < 4) {
      alert("PIN must be at least 4 digits");
      return;
    }

    updateAdminPin(newPin);
    setShowPinChange(false);
    setCurrentPin("");
    setNewPin("");
    setConfirmPin("");
    alert("PIN updated successfully");

  };

  return (

    <div className="owner-login">

      <h1>
        🔐 Traveling Star Owner Login
      </h1>

      <input

        type="password"

        placeholder="Enter Owner Password"

        value={password}

        onChange={(e) => setPassword(e.target.value)}

      />

      <br /><br />

      <button onClick={login}>

        Login

      </button>

      <br /><br />

      <button onClick={() => setShowPinChange(!showPinChange)}>

        {showPinChange ? "Cancel PIN Change" : "Change Admin PIN"}

      </button>

      {showPinChange && (

        <div className="pin-change-form">

          <br />

          <input

            type="password"

            placeholder="Current PIN"

            aria-label="Current PIN"

            value={currentPin}

            onChange={(e) => setCurrentPin(e.target.value)}

          />

          <br />

          <input

            type="password"

            placeholder="New PIN"

            aria-label="New PIN"

            value={newPin}

            onChange={(e) => setNewPin(e.target.value)}

          />

          <br />

          <input

            type="password"

            placeholder="Confirm new PIN"

            aria-label="Confirm new PIN"

            value={confirmPin}

            onChange={(e) => setConfirmPin(e.target.value)}

          />

          <br /><br />

          <button onClick={handlePinChange}>Update PIN</button>

        </div>

      )}

    </div>

  );

}


export default OwnerLogin;
