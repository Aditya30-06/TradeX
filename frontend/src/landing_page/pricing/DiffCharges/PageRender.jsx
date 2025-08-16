import React from "react";
import EquityCharges from "./EquityCharges";
import CurrencyCharges from "./CurrencyCharges";
import CommodityCharges from "./CommodityCharges";

const RenderCharges = ({ active }) => {
  if (active === "equity") {
    return <EquityCharges />;
  }
  if (active === "currency") {
    return <CurrencyCharges />;
  }
  if (active === "commodity") {
    return <CommodityCharges />;
  }
  return null;
};

export default RenderCharges;
