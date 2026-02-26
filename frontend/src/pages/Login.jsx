import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {

      const res = await axios.post(
        "http://yogaguru-0tj2.onrender.com/api/auth/login",
        { email, password }
      );

      // Save token
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      // Redirect admin
      if (res.data.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        alert("Not Admin");
      }

    } catch (err) {
      console.log(err.response?.data);
      alert("Invalid Credentials");
      }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Admin Login</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
      <br/><br/>

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <br/><br/>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
