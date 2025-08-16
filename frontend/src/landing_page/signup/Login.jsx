import React, { useState } from "react";
import "./signup.css"; // same CSS for both signup & login
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://tradex-3-wivw.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await res.json();
      alert(data.message);
      if (data.success) {
        window.location.href = "https://trade-x-lemon.vercel.app/";
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Welcome Back 👋</h2>
        <p className="auth-subtitle">
          Access your account to continue trading securely.
        </p>

        <form onSubmit={handleLogin} className="auth-form">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="auth-input"
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="auth-input"
          />
          <button type="submit" className="auth-button">
            Log In
          </button>
        </form>

        <p className="auth-footer">
          New to TradeX?{" "}
          <Link to="/signup" className="auth-link">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};
