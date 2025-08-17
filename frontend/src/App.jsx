import React from "react";
import { Routes, Route } from "react-router-dom";

import "./app.css";
import HomePage from "./landing_page/home/HomePage";
import { Signup } from "./landing_page/signup/Signup";
import { Login } from "./landing_page/signup/Login";
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
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        {/* <Route path="/dashboard" element={<DashboardApp />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
