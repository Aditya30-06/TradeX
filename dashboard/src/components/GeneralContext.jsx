import React, { useState } from "react";
import axios from "axios";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [stockPrice, setStockPrice] = useState(0);
  const handleOpenBuyWindow = async (uid) => {
    try {
      
      const res = await axios.get(
        `https://tradex-ccjq.onrender.com/stocks/${encodeURIComponent(uid)}`
      );

      const stockData = res.data;

      setIsBuyWindowOpen(true);
      setSelectedStockUID(uid);
      setStockPrice(stockData.price); // DB se aaya hua price set karo
    } catch (err) {
      console.error("Error fetching stock price:", err);
    }
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setStockPrice(0);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && (
        <BuyActionWindow uid={selectedStockUID} stockPrice={stockPrice} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
