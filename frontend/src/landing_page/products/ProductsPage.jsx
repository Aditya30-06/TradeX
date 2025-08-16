import React from "react";
import Hero from "./Hero";
import Universe from "./Universe";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
const ProductsPage = () => {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        onelink="Try Demo"
        secondlink="Learn More"
        googlePlay=""
        appStore=""
      />
      <RightSection
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link="Learn More"
        imageUrl="media/images/console.png"
      />
      <LeftSection
        imageUrl="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        onelink="Coin"
        googlePlay=""
        appStore=""
      />
      <RightSection
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link="Kite Connect"
        imageUrl="media/images/kiteconnect.png"
      />
      <LeftSection
        imageUrl="media/images/coin.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlay=""
        appStore=""
      />
      <div className="my-5">
  <p className="text-center fs-5 ">
    Want to know more about our technology stack? Check out the{" "}
    <a
      href="https://tradex.tech"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary text-decoration-underline fw-medium"
    >
      Tradex.tech blog
    </a>
    .
  </p>
</div>

      <Universe />
    </>
  );
};

export default ProductsPage;
