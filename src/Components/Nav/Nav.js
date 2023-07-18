import React, { Component } from "react";
import "./Nav.scss";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillCaretDown,
  AiOutlineMenu,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-row">
          <div className="nav-col">
            <img src={require("../../images/logo-nav.png")} alt="logopic" />
          </div>

          <div className="nav-col nav-hide">
            <ul className="nav-top">
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

              <li>
                <a href="#team">Team</a>
              </li>
              <li className="nav-fl">
                <a href="#drop">Drop down</a>
                <AiFillCaretDown />
                <ul className="nav-deep-1">
                  <li>Drop Down 1</li>
                  <li className="nav-deep">
                    Deep Drop Down
                    <ul className="nav-deep-2">
                      <li>Deep Drop Down 1</li>
                      <li>Deep Drop Down 2</li>
                      <li>Deep Drop Down 3</li>
                      <li>Deep Drop Down 4</li>
                      <li>Deep Drop Down 5</li>
                    </ul>
                  </li>
                  <li>Drop Down 2</li>
                  <li>Drop Down 3</li>
                  <li>Drop Down 4</li>
                </ul>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="nav-col icons">
            <AiOutlineTwitter />
            <FaFacebook />
            <AiOutlineInstagram />
            <AiFillLinkedin />

            <div className="bgr">
              <AiOutlineMenu />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
