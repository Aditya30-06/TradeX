import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, stockPrice }) => {
  const { closeBuyWindow } = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [StockPrice, setStockPrice] = useState(stockPrice);
  const [warning, setWarning] = useState("");

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    if (value < stockPrice) {
      setWarning(`Price cannot be less than ₹${stockPrice}`);
    } else {
      setWarning("");
    }
    setStockPrice(value);
  };

  const handleBuyClick = async () => {
    if (StockPrice < stockPrice) {
      alert(`Price cannot be less than ₹${stockPrice}`);
      return;
    }

    await axios.post("https://tradex-qqge.onrender.com/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: StockPrice,
      mode: "BUY",
    });
    console.log("Order Saved Successfully");
    closeBuyWindow();
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              value={StockPrice}
              min={stockPrice}
              onChange={handlePriceChange}
            />
            {warning && (
              <p style={{ color: "red", fontSize: "12px" }}>{warning}</p>
            )}
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
