import React from "react";

const ChargesExplained = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-5 mb-4">
          <h4>Charges explained</h4>
        </div>
        <div className="row mb-4">
          <div className="col-6">
            <img
              src="media/images/charges(1).png"
              style={{ width: "99%" }}
              alt=""
            />
            <img
              src="media/images/Charges(2).png"
              style={{ width: "99%" }}
              alt=""
            />
            <img
              src="media/images/Charges(3).png"
              style={{ width: "99%" }}
              alt=""
            />
          </div>

          <div className="col-6 ">
            <img
              src="media/images/Charges(4).png"
              style={{ width: "99%" }}
              alt=""
            />
            <img
              src="media/images/Charges(5).png"
              style={{ width: "99%" }}
              alt=""
            />
            <img
              src="media/images/Charges(6).png"
              style={{ width: "99%" }}
              alt=""
            />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <h6 className="mb-3">Disclaimer</h6>
            <p  style={{opacity:"0.8", fontSize:"12px"}}>
              For Delivery based trades, a minimum of ₹0.01 will be charged per
              contract note. Clients who opt to receive physical contract notes
              will be charged ₹20 per contract note plus courier charges.
              Brokerage will not exceed the rates specified by SEBI and the
              exchanges. All statutory and regulatory charges will be levied at
              actuals. Brokerage is also charged on expired, exercised, and
              assigned options contracts. Free investments are available only
              for our retail individual clients. Companies, Partnerships,
              Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as
              delivery brokerage. A brokerage of 0.25% of the contract value
              will be charged for contracts where physical delivery happens. For
              netted off positions in physically settled contracts, a brokerage
              of 0.1% will be charged.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChargesExplained;
