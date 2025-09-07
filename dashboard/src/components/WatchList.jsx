import React, { useState, useEffect, useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { DonghutChart } from "./DonghutChat";

const WatchList = () => {
  const [allWatchList, setallWatchList] = useState([]);

  const [allHoldings, setallHoldings] = useState([]);

  useEffect(() => {
    axios.get("https://tradex-qqge.onrender.com/getHoldings").then((res) => {
      setallHoldings(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("https://tradex-qqge.onrender.com/getWatchList").then((res) => {
      setallWatchList(res.data);
    });
  }, []);

  const labels = allWatchList.map((stock) => stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: allWatchList.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">
          {" "}
          {allWatchList.length}/{allHoldings.length}{" "}
        </span>
      </div>

      <ul className="list">
        {allWatchList.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
      <DonghutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setshowWatchListActions] = useState(false);
  const { openBuyWindow } = useContext(GeneralContext);
  const handleMouseEnter = (e) => {
    setshowWatchListActions(true);
  };
  const handleMouseLeave = (e) => {
    setshowWatchListActions(false);
  };
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="percent">{stock.percent}% &nbsp;</span>
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && (
        <WatchlistActions uid={stock.name} openBuyWindow={openBuyWindow} />
      )}
    </li>
  );
};

const WatchlistActions = ({ uid, openBuyWindow }) => {
  return (
    <>
      <span className="actions">
        <Tooltip title="Buy" placement="top" arrow TransitionComponent={Grow}>
          <button
            className="action-btn buy "
            onClick={() => openBuyWindow(uid)}
          >
            Buy
          </button>
        </Tooltip>
        <Tooltip title="Sell" placement="top" arrow TransitionComponent={Grow}>
          <button className="action-btn sell">Sell</button>
        </Tooltip>
        <Tooltip title="Chart" placement="top" arrow TransitionComponent={Grow}>
          <button className="action-btn chart">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action-btn more">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </>
  );
};
