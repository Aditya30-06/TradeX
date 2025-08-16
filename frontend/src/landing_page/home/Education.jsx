import React from "react";

const Education = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img style={{width : "70%"}} src="media/images/education.svg" alt="" />
          </div>
          <div className="col-md-6">
            <h5 className="mb-3">Free and open market education</h5>
            <p className="mb-3">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="#" className="text-decoration-none ">
              Varsity <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>
            <p className="mb-3 mt-4">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="#" className="text-decoration-none">
              TradingQ&A
              <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
