import React from "react";
import "./EmployLogin.css";

const EmployLogin = ({ setCurrentPage }) => {
  const handleLogin = () => {
    // Optional: Validate Employee ID and Password
    setCurrentPage('Dashboard');
  };

  return (
    <div className="Employlogin-container">
      <div className="Employlogin-box">
        <h2>Employee Login</h2>
        <input type="text" placeholder="Employee ID" />
        <input type="password" placeholder="Password" />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default EmployLogin;
