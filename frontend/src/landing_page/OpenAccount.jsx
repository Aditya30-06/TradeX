import React from "react";
import { Link } from "react-router-dom";
const OpenAccount = () => {
  return (
    <div className="container p-3 ">
      <div className="row text-center mt-5">
        <h2 className="">Open a Zerodha account</h2>
        <p className="mt-3 mb-3">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link
          to="/signup"
          className="btn btn-primary p-2 mb-5"
          style={{
            width: "15%",
            margin: "0 auto",
            display: "block",
            textDecoration: "none",
            color: "white",
            textAlign: "center",
          }}
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
};

export default OpenAccount;
