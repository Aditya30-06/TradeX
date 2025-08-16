import React from "react";

const Pricing = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        <div className="col-md-4">
          <h3 className="mb-3">Unbeatable pricing</h3>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none">
            See Pricing <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-6">
          <div className="row text-center g-3">
            <div className="col p-4 border  d-flex flex-column justify-content-center align-items-center">
              <h3 className="mb-2">
                <i className="fa-solid fa-indian-rupee-sign"></i> 0
              </h3>
              <p className="mb-0">Free account opening</p>
            </div>
            <div className="col p-4 border  d-flex flex-column justify-content-center align-items-center">
              <h3 className="mb-2">
                <i className="fa-solid fa-indian-rupee-sign"></i> 0
              </h3>
              <p className="mb-0">Free equity delivery</p>
            </div>
            <div className="col p-4 border  d-flex flex-column justify-content-center align-items-center">
              <h3 className="mb-2">
                <i className="fa-solid fa-indian-rupee-sign"></i> 20
              </h3>
              <p className="mb-0">Intraday and F&amp;O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
