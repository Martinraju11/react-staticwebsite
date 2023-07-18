import React from "react";
import "./Banner.scss";
export const Banner = () => {
  return (
    <section id="banner">
      <div className="bann">
        <div className="banner-img">
          <img src={require("../../images/logo.png")} alt="banner-logo" />
        </div>
        <div className="banner-details">
          <h1>A theme with personality</h1>
          <p>
            This is a powerful theme with some great features that you can use
            in your future projects.
          </p>
          <a href="#banner">Get Started Now</a>
        </div>
      </div>

      <div></div>
    </section>
  );
};
