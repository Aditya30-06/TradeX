import React from "react";
import "./app.css";
import HomePage from "./landing_page/home/HomePage";
import { Signup } from "./landing_page/signup/Signup";
import {Login}  from "./landing_page/signup/Login.jsx";
// import DashboardApp from "../../dashboard/src/App.jsx";
import { Routes, Route } from "react-router-dom";
import PricingPage from "./landing_page/pricing/PricingPage.jsx";
import AboutPage from "./landing_page/about/AboutPage.jsx";
import ProductsPage from "./landing_page/products/ProductsPage.jsx";
import SupportPage from "./landing_page/support/SupportPage.jsx";
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";
import NotFound from "./landing_page/NotFound.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/logins" element={<Login />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/pricing" element={<PricingPage />}></Route>
        <Route path="/support" element={<SupportPage />}></Route>
        {/* <Route path="/dashboard" element={<DashboardApp />}></Route> */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
