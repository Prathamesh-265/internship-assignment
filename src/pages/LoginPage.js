import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Intern Login</h2>
        <button onClick={handleLogin} className="login-btn">
          Login 
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
