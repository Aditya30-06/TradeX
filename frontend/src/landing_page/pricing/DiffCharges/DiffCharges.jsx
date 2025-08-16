import { React, useState } from "react";

import "./DiffCharge.css";
import RenderCharges from "./PageRender";
const DiffCharges = () => {
  const [active, setActive] = useState("equity");
  return (
    <div className="container my-5">
      <div className="row border-bottom pb-3">
        <div className="col-md-5 mx-5">
          <div className="d-flex justify-content-between">
            <h4 className="mb-0" onClick={() => setActive("equity") }>
              Equity
            </h4>
            <h4 className="mb-0" onClick={() => setActive("currency")}>
              Currency
            </h4>
            <h4 className="mb-0" onClick={() => setActive("commodity")}>
              Commodity
            </h4>
          </div>
        </div>
        <div className="col-md-7"></div>
      </div>
      <div className="row mt-3">
        <RenderCharges active={active} />
      </div>
      <div className="row text-center mt-5">
        <p className="fs-5">
          Calculate your costs upfront using our brokerage calculator
        </p>
      </div>
    </div>
  );
};

export default DiffCharges;
