import { React, useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedOption, setselectedOption] = useState(0);
  const [isProfileDropDownOpen, setisProfileDropDown] = useState(false);

  const handleMenuClick = (index) => {
    setselectedOption(index);
  };
  const handleProfileClick = (index) => {
    setisProfileDropDown(!isProfileDropDownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedOption === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
           <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedOption === 1 ? activeMenuClass : menuClass}>
               Orders
              </p>
            </Link>
          </li>
          <li>
           <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedOption === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedOption === 3 ? activeMenuClass : menuClass}>
                Postions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedOption === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/Apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedOption === 5 ? activeMenuClass : menuClass}>
              Apps
              </p>
            </Link>
          </li>
        <li>
            <a
              href="https://trade-x-6snf.vercel.app/#/"
              style={{
                textDecoration: "none",
                color: "#1f2937",
                fontWeight: 500,
                fontSize: "14px",
                transition: "color 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.color = "#2563eb";
                e.target.style.textDecoration = "underline";
              }}
              onMouseOut={(e) => {
                e.target.style.color = "#1f2937";
                e.target.style.textDecoration = "none";
              }}
            >
              Back to TradeX
            </a>

         
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
