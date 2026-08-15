import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "@/utils/axios";

function OwnerLogin() {

  const [pin, setPin] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    const payload = {
      pin,
    };

    try {
      const response = await axios.post("/api/auth/login", payload);

      if (response.data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch {
      alert("Incorrect PIN");
    }
  };


  return (

    <div className="owner-login">

      <h1>
        🔐 Traveling Star Owner Login
      </h1>


      <input

        type="password"

        placeholder="Enter PIN"

        value={pin}

        onChange={(e)=>setPin(e.target.value)}

      />


      <br /><br />


      <button onClick={login}>

        Login

      </button>


    </div>

  );

}


export default OwnerLogin;
