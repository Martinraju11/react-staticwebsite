import React from "react";
import "./About.scss";

export const About = () => {
  let aboutcon = [
    {
      content1: "Satisfied Customers",
      content2: 232,
    },
    {
      content1: "Released Projects",
      content2: 79,
    },
    {
      content1: "Hours Of Support",
      content2: 1463,
    },
    {
      content1: "Hard Workers",
      content2: 68,
    },
  ];
  return (
    <section id="about">
      <div className="container">
        <h1 className="headabout">About Bell Template</h1>
        <p className="paraabout">
          Voluptua scripserit per ad, laudem viderer sit ex. Ex alia corrumpit
          voluptatibus usu, sed unum convenire id. Ut cum nisl moderatius, per
          nihil dicant commodo an. Eum tacimates erroribus ad. Atqui feugiat
          euripidis ea pri, sed veniam tacimates ex. Menandri temporibus an duo.
        </p>

        <div className="about-row">
          {aboutcon.map((val, ind) => {
            return (
              <div className="about-col">
                <div className="about-card" key={ind}>
                  <p className="para-ab">{val.content1}</p>
                  <p className="pos">{val.content2}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
