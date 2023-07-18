import React from "react";
import "./Photo.scss";
export const Photo = () => {
  return (
    <section id="photo">
      <div className="pic">
        <div className="pichead">
          <h1>WELCOME TO A PERFECT THEME</h1>
          <p className="picpara">
            This is the most powerful theme with thousands of options that you
            have never seen before
          </p>
          <img
            src={require("../../images/gadgets.png")}
            alt="gadget"
            className="gadget"
          />
        </div>
      </div>
    </section>
  );
};
