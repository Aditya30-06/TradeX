import React from "react";
import "./univers.css";
import { Link } from "react-router-dom";
const Universe = () => {
  return (
    <section className="py-5 text-center ">
      <div className="container">
        <div className="row">
          <div className="col mb-3">
            <h4>The TradeX Universe</h4>
            <p className="text-muted small p-3">
              Extend your trading and investment experience even further with
              our partner platforms.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-3">
            <ul className="navbar-nav footer">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img
                    src="media/images/zerodhaFundhouse.png"
                    style={{ width: "80%" }}
                    alt=""
                  />
                  <p className="mt-2 text-muted">
                    {" "}
                    Our asset management venture that is creating simple and
                    transparent index funds to help you save for your goals.
                  </p>
                </a>
              </li>
              <li className="nav-item mt-3">
                <a className="nav-link" href="#">
                  <img
                    src="media/images/streakLogo.png"
                    style={{ width: "70%" }}
                    alt=""
                  />
                  <p className="mt-2 text-muted">
                    {" "}
                    Systematic trading platform that allows you to create and
                    backtest strategies without coding.
                  </p>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <ul className="navbar-nav footer">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img
                    src="media/images/sensibullLogo.svg"
                    style={{ width: "100%", height: "100%" }}
                    alt=""
                  />
                  <p className="mt-4 text-muted">
                    {" "}
                    Options trading platform that lets you create strategies,
                    analyze positions, and examine data points like open
                    interest, FII/DII, and more.
                  </p>
                </a>
              </li>
              <li className="nav-item mt-3">
                <a className="nav-link" href="#">
                  <img
                    src="media/images/smallcaseLogo.png"
                    style={{ width: "70%" }}
                    alt=""
                  />
                  <p className="mt-3 text-muted">
                    {" "}
                    Thematic investing platform that helps you invest in
                    diversified baskets of stocks on ETFs.
                  </p>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <ul className="navbar-nav footer">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img
                    src="media/images/tijori.png"
                    style={{ width: "55%", height: "55%" }}
                    alt=""
                  />
                  <p className="mt-3 text-muted">
                    {" "}
                    Investment research platform that offers detailed insights
                    on stocks, sectors, supply chains, and more.
                  </p>
                </a>
              </li>
              <li className="nav-item mt-4">
                <a className="nav-link" href="#">
                  <img
                    src="media/images/dittoLogo.png"
                    style={{ width: "50%" }}
                    alt=""
                  />
                  <p className="mt-4 text-muted">
                    {" "}
                    Personalized advice on life and health insurance. No spam
                    and no mis-selling.
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-1"></div>
          <div className="col text-center">
            <Link
              to="/signup"
              className="btn px-5 py-3 fs-5 rounded"
              style={{
                backgroundColor: "#387ed1",
                color: "#fff",
                border: "none",
              }}
            >
              Sign up for free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Universe;
