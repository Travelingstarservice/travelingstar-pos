import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OwnerLogin() {

  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {

    if (password === "TravelingStar123") {

      navigate("/owner-dashboard");

    } else {

      alert("Incorrect Password");

    }

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

        onChange={(e)=>setPassword(e.target.value)}

      />


      <br /><br />


      <button onClick={login}>

        Login

      </button>


    </div>

  );

}


export default OwnerLogin;
