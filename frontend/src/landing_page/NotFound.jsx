import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div className="container">
        {/* Illustration */}
        <img
          src="/media/images/errorImage.avif" 
          alt="404 Error"
          className="img-fluid mb-4"
          style={{
            width: "30%",
            margin: "0 auto",
            display: "block",
          }}
        />

        <h1 className="fw-bold text-primary mb-3">Page Not Found</h1>
        <p className="text-muted mb-4 fs-5">
          Oops! The page you're looking for doesn't exist or might have been moved.
        </p>

        <Link
          to="/"
          className="btn btn-primary px-4 py-2 fs-5"
          style={{
            borderRadius: "8px",
            fontWeight: "500",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          🔙 Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
