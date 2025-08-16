import { Link } from "react-router-dom";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container p-3">
        <div className="row text-center">
          <img
            src="media/images/homeHero.png"
            alt="Hero Image"
            className="mb-5"
          />
          <h1 className="">Invest in everything</h1>
          <p>
            Online platoform to invest in stocks,derivatives,mutual funds and
            more
          </p>

          <Link
            to="/signup"
            className="btn btn-primary p-2 mb-5"
            style={{
              width: "15%",
              margin: "0 auto",
              display: "block",
              textDecoration: "none",
              color: "white",
              textAlign: "center",
            }}
          >
            Signup Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
