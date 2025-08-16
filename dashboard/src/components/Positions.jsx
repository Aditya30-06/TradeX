import React from "react";
// "http://localhost:3002/getHoldings  => thislineis used when we have our data local but now this code use omongo db
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Positions = () => {
  const [allPostions, setallPostions] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/getPostions").then((res) => {
      setallPostions(res.data);
    });
  },[]);
  return (
    <>
      <h3 className="title">Positions ({allPostions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPostions.map((stock, index) => {
              const totalValue = stock.price * stock.qty;
              const profClass = stock.isLoss ? "loss" : "profit";
              const dayClass = stock.day > 0 ? "profit" : "loss";
              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{totalValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(totalValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
