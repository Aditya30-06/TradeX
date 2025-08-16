import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Login}  from "./landing_page/signup/Login.jsx";
import "./signup.css";
export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://tradex-3-wivw.onrender.com/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
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
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/logins">Login</Link>
      </p>
    </div>
  );
};
