import React from "react";

const Hero = () => {
  return (
    <div className="container text-center py-5">
      <div className="row mb-5">
        <div className="col mt-5 mb-5">
          <h3 className="fw-bold">Charges</h3>
          <p className="text-muted fs-5 mt-3">List of all charges and taxes</p>
        </div>
      </div>

      <div className="row g-5">
        <div className="col-md-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="Equity Delivery"
            style={{ width: "70%" }}
            className="mb-4"
          />
          <h4 className="fw-semibold">Free equity delivery</h4>
          <p className="mt-3 text-muted">
            All equity delivery investments (NSE, BSE) are absolutely free —
            ₹0 brokerage.
          </p>
        </div>

        <div className="col-md-4">
          <img
            src="media/images/intradayTrades.svg"
            alt="Intraday Trades"
            style={{ width: "70%" }}
            className="mb-4"
          />
          <h4 className="fw-semibold">Intraday and F&O trades</h4>
          <p className="mt-3 text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity. Flat ₹20 on
            all option trades.
          </p>
        </div>

        <div className="col-md-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="Free Mutual Funds"
            style={{ width: "70%" }}
            className="mb-4"
          />
          <h4 className="fw-semibold">Free direct MF</h4>
          <p className="mt-3 text-muted">
            All direct mutual fund investments are absolutely free — ₹0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
