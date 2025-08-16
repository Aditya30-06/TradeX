import React from "react";

const Brokerage = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row mb-5 mt-5">
          <h4 className="mb-3">Charges for account opening</h4>
          <img src="media/images/AcoountOpen.png" alt="" />
        </div>
        <div className="row mt-5 mb-5">
          <h4 className="mb-3">Demat AMC (Annual Maintenance Charge)</h4>
          <img src="media/images/DematAMC.png" alt="" />
        </div>
        <div className="row mb-5 mt-5">
          <h4 className="mb-3">Charges for optional value added services</h4>
          <img src="media/images/OptionTrading.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Brokerage;
