import React from "react";

const Stats = () => {
  return (
    <div className="container py-5 border-top">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2 className="fw-medium mb-4">Trust with confidence</h2>

          <div className="mb-4">
            <h5 className="fw-semibold">Customer-first always</h5>
            <p className="text-muted">
              That’s why over 1.6 crore customers trust TradeX with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker,
              contributing to 15% of all daily retail volumes.
            </p>
          </div>

          <div className="mb-4">
            <h5 className="fw-semibold">No spam or gimmicks</h5>
            <p className="text-muted">
              No gamification, spam, or annoying push notifications. Just
              simple, powerful apps that let you trade and invest on your own
              terms.
            </p>
          </div>

          <div className="mb-4">
            <h5 className="fw-semibold">The TradeX ecosystem</h5>
            <p className="text-muted">
              More than just an app — a whole ecosystem. We’ve invested in 30+
              fintech startups to build unique solutions tailored for you.
            </p>
          </div>

          <div>
            <h5 className="fw-semibold">Do better with money</h5>
            <p className="text-muted">
              Learn, invest, and grow at your pace with tools designed to help
              you do better with your finances.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="TradeX Ecosystem"
            className="img-fluid mb-4"
            style={{ maxWidth: "85%" }}
          />
          <div className="d-flex justify-content-center gap-4">
            <a href="#" className="text-decoration-none">
              Explore our products{" "}
              <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>
            <a href="#" className="text-decoration-none">
              Try Kite demo <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
