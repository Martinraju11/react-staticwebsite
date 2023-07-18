import React from "react";
import "./Contact.scss";
import { GoMail, GoLocation, GoDeviceMobile } from "react-icons/go";
export const Contact = () => {
  return (
    <section id="contact">
      <div className="con-container">
        <div className="fe-head">Contact Us</div>
        <div className="con-row">
          <div className="con-col-left">
            <div className="con-flex">
              <div className="con-icon">
                <GoLocation />
              </div>
              <p className="con-para">A108 Adam Street New York, NY 535022</p>
            </div>

            <div className="con-flex">
              <div className="con-icon">
                <GoMail />
              </div>
              <p>info@example.com</p>
            </div>

            <div className="con-flex">
              <div className="con-icon">
                <GoDeviceMobile />
              </div>
              <p>+1 5589 55488 55s</p>
            </div>
          </div>

          <div className="con-col-right">
            <div className="con-inputs">
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Your Email" />
              <input type="text" placeholder="Subject" />
              <input type="text" placeholder="Message" id="ta" />
              <a href="#home">Send Message</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
