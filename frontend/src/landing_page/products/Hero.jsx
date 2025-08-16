import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-4 fs-6">
      <div className="container text-center">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 mb-5">
            <h2 className=" mb-3 mt-5 ">TradeX Products</h2>
            <h5 className="text-muted mb-4 mt-2">
              Sleek, modern, and intuitive trading platform
            </h5>
            <p className="mb-3" style={{fontSize:"18px"}}>
              Check out our
              <Link to="/products" className=" btn-sm ms-1 mb-5" style={{textDecoration:"none"}}>
                investment offerings <i class="fa-solid fa-arrow-right"></i>
              </Link>
            </p>
          </div>
        </div>
      <hr className="mt-5 border-secondary" />

      </div>
    </section>
  );
};

export default Hero;
