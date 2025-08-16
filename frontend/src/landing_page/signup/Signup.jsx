<div className="signup-wrapper">
  <div className="signup-card">
    <h2 className="signup-title">Join TradeX Today 🚀</h2>
    <p className="signup-subtitle">
      Fill in your details to create your free TradeX account.
    </p>

    <form onSubmit={handleSignup} className="signup-form">
      <input
        type="text"
        placeholder="Choose a username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Create a strong password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Create Account</button>
    </form>

    <p className="login-link">
      Already a member?{" "}
      <Link to="/logins" className="highlight">
        Login here
      </Link>
    </p>
  </div>
</div>
