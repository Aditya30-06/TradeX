import React from "react";
import "./CreateTicket.css";

const CreateTicket = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row mb-5 mt-5">
        <div className="col-12">
          <h3 className="section-title">
            To create a ticket, select a relevant topic
          </h3>
        </div>
      </div>

      <div className="row mt-5 mb-5">
        <div className="col-md-4 mb-5">
          <h6 className="topic-heading">
            <i className="fa-solid fa-circle-plus me-2"></i>
            Account Opening
          </h6>
          <ul className="link-list">
            <li>
              <a href="#">Online Account Opening</a>
            </li>
            <li>
              <a href="#">Offline Account Opening</a>
            </li>
            <li>
              <a href="#">Company, Partnership and HUF Account</a>
            </li>
            <li>
              <a href="#">NRI Account Opening</a>
            </li>
            <li>
              <a href="#">Charges at TradeX</a>
            </li>
            <li>
              <a href="#">Getting Started</a>
            </li>
          </ul>
        </div>

        <div className="col-md-4 mb-5">
          <h6 className="topic-heading">
            <i className="fa-solid fa-user me-2"></i>
            Your Zerodha Account
          </h6>
          <ul className="link-list">
            <li>
              <a href="#">Login Credentials</a>
            </li>
            <li>
              <a href="#">Account Modifications and Segment Addition</a>
            </li>
            <li>
              <a href="#">DP ID and Bank Details</a>
            </li>
            <li>
              <a href="#">Your Profile</a>
            </li>
            <li>
              <a href="#">Transfer and Conversion of Shares</a>
            </li>
          </ul>
        </div>

        <div className="col-md-4 mb-5">
          <h6 className="topic-heading">
            <i className="fa-solid fa-chart-line me-2"></i>
            Trading & Reports
          </h6>
          <ul className="link-list">
            <li>
              <a href="#">Margin / Leverage, Product and Order Types</a>
            </li>
            <li>
              <a href="#">Kite Web and Mobile</a>
            </li>
            <li>
              <a href="#">Trading FAQs</a>
            </li>
            <li>
              <a href="#">Corporate Actions</a>
            </li>
            <li>
              <a href="#">Sentinel</a>
            </li>
            <li>
              <a href="#">Kite API</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
