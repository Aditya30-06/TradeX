import React from "react";
import Hero from "./Hero";
import OpenAccount from "../OpenAccount";
import Brokerage from "./Brokerage";
import ChargesExplained from "./ChargesExplained";
import "./pricing.css";
import DiffCharges from "./DiffCharges/DiffCharges";
const PricingPage = () => {
  return (
    <>
      <Hero />
      <OpenAccount />
      <DiffCharges />
      <Brokerage />
      <ChargesExplained />
    </>
  );
};

export default PricingPage;
