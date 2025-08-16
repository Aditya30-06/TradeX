import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div
      className="border-top"
      style={{ backgroundColor: "rgba(255, 253, 253, 1)" }}
    >
      <div className="container">
        <div className="row p-5">
          <div className="col-4">
            <img
              src="media/images/logo.png"
              style={{ width: "40%" }}
              alt="Zerodha logo"
            />
            <a
              className="nav-link mt-2"
              style={{ fontSize: "14px", lineHeight: "1.8" }}
              href="#"
            >
              © 2010 - 2025, Zerodha Broking Ltd. <br /> All rights reserved.
            </a>

            <div className="d-flex align-items-center gap-3 mt-3 mb-3">
              <a className="nav-link icon" href="https://x.com/Aditya30_06">
                <i
                  className="fa-brands fa-x-twitter"
                  style={{ fontSize: "1.3em" }}
                ></i>
              </a>
              <a
                className="nav-link icon"
                href="https://github.com/Aditya30-06"
              >
                <i
                  className="fa-brands fa-github"
                  style={{ fontSize: "1.3em" }}
                ></i>
              </a>
              <a
                className="nav-link icon"
                href="https://www.instagram.com/aditya30_06/"
              >
                <i
                  className="fa-brands fa-instagram"
                  style={{ fontSize: "1.3em" }}
                ></i>
              </a>
              <a
                className="nav-link icon"
                href="https://www.linkedin.com/in/aditya-birla-"
              >
                <i
                  className="fa-brands fa-linkedin"
                  style={{ fontSize: "1.3em" }}
                ></i>
              </a>
            </div>
            <div
              style={{
                width: "75%",
                borderBottom: "1px solid #ccc",
                margin: "1rem 0",
              }}
            ></div>

            <div className="d-flex align-items-center gap-3 mt-3">
              <a className="nav-link icon" href="#">
                <i
                  className="fa-brands fa-youtube"
                  style={{ fontSize: "1.3em" }}
                ></i>
              </a>
              <a className="nav-link icon" href="https://wa.me/919462246616">
                <i
                  className="fa-brands fa-whatsapp"
                  style={{ fontSize: "1.3em" }}
                ></i>
              </a>
              <a className="nav-link icon" href="#">
                <i
                  className="fa-brands fa-telegram"
                  style={{ fontSize: "1.3em" }}
                ></i>
              </a>
            </div>
          </div>

          <div className="col">
            <p className="footer-text-heading">Account</p>
            <ul className="navbar-nav footer">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Open demat account
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Minor demat account
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  NRI demat account
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Commodity
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Dematerialisation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Fund transfer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  MTF
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Referral Program
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <p className="footer-text-heading">Support</p>
            <ul className="navbar-nav footer">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Support portal
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Status of your complaints
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Bulletin
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Circular
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Z-Connect blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Downloads
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <p className="footer-text-heading">Company</p>
            <ul className="navbar-nav footer">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Philosophy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Press & media
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Careers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Zerodha Cares (CSR)
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Zerodha.tech
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Open source
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <p className="footer-text-heading">Quick links</p>
            <ul className="navbar-nav footer">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Upcoming IPOs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Market holidays
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Economic calendar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Calculators
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Markets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sectors
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <p className="nav-link footer-text" href="#">
            Zerodha Broking Ltd.: Member of NSE, BSEMCX – SEBI Registration no.:
            INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking
            Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
            Registration no.: INZ000038238 Registered Address: Zerodha Broking
            Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
            For any complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p className="nav-link footer-text" href="#">
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p className="nav-link footer-text" href="#">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p className="nav-link footer-text" href="#">
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p className="nav-link footer-text" href="#">
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>

          <p className="nav-link footer-text p-3 mb-3" href="#">
            <img
              src="media/images/footerImage.png"
              style={{ width: "100%" }}
              alt=""
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
