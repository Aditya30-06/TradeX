import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
// import { holdings } from "../data/data";

const Holdings = () => {
  const [allHoldings, setallHoldings] = useState([]);

  useEffect(() => {
    axios.get("https://tradex-ccjq.onrender.com/getHoldings").then((res) => {
      setallHoldings(res.data);
    });
  }, []);

  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Stock Name</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const totalValue = stock.price * stock.quantity;
              const isProfit = totalValue > stock.avg * stock.quantity;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.day > 0 ? "profit" : "loss";
              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.quantity}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{totalValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(totalValue - stock.avg * stock.quantity).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}%</td>
                  <td className={dayClass}>{stock.day}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
