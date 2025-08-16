import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="container-fluid support py-5 mb-5">
      <div className="container">
        {/* Header Row */}
        <div className="supportWrapper py-3 px-3 px-md-5">
          <h5 className="mb-0">Support Portal</h5>
          <a href="#">Track Tickets</a>
        </div>

        <div className="row g-5 mt-4">
          <div className="col-lg-5">
            <h5 className="mb-3">
              Search for an answer or browse help topics to create a ticket
            </h5>
            <input
              type="text"
              placeholder="Eg: how do I activate F&O"
              className="form-control mb-3"
            />
            <div className="links-list">
              <a href="#">Track account opening</a>
              <a href="#">Track segment activation</a>
              <a href="#">Intraday margins</a>
              <a href="#">Kite user manual</a>
            </div>
          </div>
          <div className="col-2"></div>

          <div className="col-lg-5">
            <h5 className="mb-3">Featured</h5>
            <ol className="links-list ps-3">
              <li>
                <a href="#">Intraday margins</a>
              </li>
              <li>
                <a href="#">Kite user manual</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
