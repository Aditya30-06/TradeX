import React from "react";
import "./hero.css";

const Hero = () => (
  <section className="hero-section py-5">
    <div className="container">
      <div className="row justify-content-center text-center mb-4">
        <div className="col-lg-8" style={{ margin: "10px" }}>
          <h2 className="hero-title fw-semibold">
            Crafting code that connects ideas with impact.
          </h2>
          <h2 className="hero-title fw-semibold text-primary">
            I'm Aditya Birla — Developer. Builder. Problem Solver.
          </h2>
        </div>
      </div>

      <div className="row gx-5 gy-4 justify-content-center">
        <div className="col-md-5 text-center text-md-start text-muted">
          <p className="hero-text text-muted">
            I’m a ECE student and passionate full-stack developer on a mission
            to build clean, scalable, and user-focused digital experiences.
          </p>
          <p className="hero-text text-muted">
            From backend logic to frontend finesse, I’ve built projects like{" "}
            <strong>HomiFi</strong> — a full-stack clone of Airbnb, and{" "}
            <strong>TradeX</strong> — a Zerodha-inspired platform for stock
            trading simulations.
          </p>
          <p className="hero-text text-muted">
            I love solving problems, writing efficient code, and constantly
            improving through learning and experimentation.
          </p>
        </div>

        <div className="col-md-5 text-center text-md-start">
          <p className="hero-text text-muted">
            I’m currently diving deep into the MERN stack, sharpening my DSA
            skills, and preparing for high-impact software internships.
          </p>
          <p className="hero-text text-muted">
            My journey blends tech and finance — with a long-term vision of
            building tools that democratize investing for everyone.
          </p>
          <p className="hero-text text-muted">
            Let’s connect through code, creation, and curiosity. <br />  You can connect with me on the links given above.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
