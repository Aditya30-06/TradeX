import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white sticky-top border-bottom p-3 mb-"
      style={{ zIndex: 1030 }}
    >
      <div className="container-fluid px-5 mx-5">
        <Link to="/" className="navbar-brand">
          <img
            src="media/images/logo.png"
            alt="TradeX Logo"
            style={{ width: "120px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 me-5">
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" className="nav-link">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/support" className="nav-link">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
