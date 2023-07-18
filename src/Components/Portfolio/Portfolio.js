import React from "react";
import "./Portfolio.scss";
export const Portfolio = () => {
  let portaob = [
    "https://bootstrapmade.com/demo/templates/Bell/assets/img/porf-1.jpg",
    "https://bootstrapmade.com/demo/templates/Bell/assets/img/porf-2.jpg",
    "https://bootstrapmade.com/demo/templates/Bell/assets/img/porf-3.jpg",
    "https://bootstrapmade.com/demo/templates/Bell/assets/img/porf-4.jpg",
    "https://bootstrapmade.com/demo/templates/Bell/assets/img/porf-5.jpg",
    "https://bootstrapmade.com/demo/templates/Bell/assets/img/porf-6.jpg",
    "https://bootstrapmade.com/demo/templates/Bell/assets/img/porf-7.jpg",
    "https://bootstrapmade.com/demo/templates/Bell/assets/img/porf-8.jpg",
  ];

  return (
    <section id="portfolio">
      <div className="container">
        <h1 className="headabout porthead">Portfolio</h1>
        <p className="paraabout">
          Voluptua scripserit per ad, laudem viderer sit ex. Ex alia corrumpit
          voluptatibus usu, sed unum convenire id. Ut cum nisl moderatius, Per
          nihil dicant commodo an.
        </p>
      </div>

      <div className="portrow">
        {portaob.map((ve, id) => {
          return (
            <div className="portcol" key={id}>
              <img src={ve} alt="portfolio" className="portimg" />
              <div className="over">
                <h1>The Dude Rockin'</h1>
                <p>Lorem ipsum dolor sit amet,eu sed saus eruditi honestatis</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
