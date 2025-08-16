import React from "react";

const Awards = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row">
        <div className="col-6 d-flex align-items-center justify-content-center">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
            style={{ maxHeight: "300px" }}
          />
        </div>

        <div className="col-6 ">
          <h3 className=" mb-3">Largest stock broker in India</h3>
          <p className="text-muted mb-4">
            2+ million TradeX clients contribute to over 15% of all retail order
            volumes in India by trading and investing in:
          </p>

          <div className="row mb-4">
            <div className="col-6">
              <ul className="mb-0">
                <li className="mb-2">Futures and Options</li>
                <li className="mb-2">Stocks and IPOs</li>
                <li className="mb-2">Commodity derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="mb-0">
                <li className="mb-2">Direct mutual funds</li>
                <li className="mb-2">Currency derivatives</li>
                <li className="mb-2">Bonds and Government securities</li>
              </ul>
            </div>
          </div>

          <div>
            <img
              src="media/images/pressLogos.png"
              alt="Press Logos"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
