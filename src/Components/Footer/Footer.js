import React, { Component } from "react";
import "./Footer.scss";
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="fluid">
          <div className="foot-row">
            <div className="foot-col left-foot">
              <p className="foot-para">
                &copy; Copyright <span className="close">Bell</span>. All Rights
                Reserved
              </p>
              <p>
                Designed by <span className="foot">BootstrapMade</span>
              </p>
            </div>

            <div className="foot-col right-foot">
              <ul>
                <div className="bot">
                  <li>
                    <a href="#banner">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#features">Features</a>
                  </li>
                  <li>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                </div>
                <div className="bottom">
                  <li>
                    <a href="#team">Team</a>
                  </li>

                  <li>
                    <a href="contact">Contact</a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
