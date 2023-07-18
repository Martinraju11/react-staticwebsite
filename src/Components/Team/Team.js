import React, { Component } from "react";
import "./Team.scss";
import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
class Team extends Component {
  teamaob = [
    "https://bootstrapmade.com/demo/templates/Bell/assets/img/team-1.jpg",
    "https://bootstrapmade.com/demo/templates/Bell/assets/img/team-2.jpg",
    "https://bootstrapmade.com/demo/templates/Bell/assets/img/team-3.jpg",
    "https://bootstrapmade.com/demo/templates/Bell/assets/img/team-4.jpg",
  ];
  render() {
    return (
      <section id="team">
        <div className="container">
          <div className="fe-head">Meet our team</div>

          <div className="team-row">
            {this.teamaob.map((vall, indd) => {
              return (
                <div className="team-col" key={indd}>
                  <div className="team-card">
                    <div className="team-pic">
                      <img src={vall} alt="team" />
                      <div className="team-over">
                        <h3>CONNECT WITH ME</h3>
                        <div className="team-icon">
                          <AiOutlineTwitter />
                          <FaFacebook />
                          <AiFillLinkedin />
                          <AiOutlineMail />
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet,eu sed saus eruditi
                          honestatis
                        </p>
                      </div>
                    </div>
                    <h2>Sergio Fez</h2>
                    <p className="pix">Art Director</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
