import React from "react";
import "./Features.scss";
import {
  BsBriefcaseFill,
  BsCardChecklist,
  BsFillBarChartFill,
  BsFillBinocularsFill,
  BsFillSunFill,
  BsFillCalendar2RangeFill,
} from "react-icons/bs";
export const Features = () => {
  let feaob = [
    {
      icon: <BsBriefcaseFill />,
      heading: "Custom Design",
      details:
        "Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem.",
    },
    {
      icon: <BsCardChecklist />,
      heading: "Responsive Layout",
      details:
        "Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem.",
    },
    {
      icon: <BsFillBarChartFill />,
      heading: "Innovative Ideas",
      details:
        "Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem.",
    },
    {
      icon: <BsFillBinocularsFill />,
      heading: "Good Documentation",
      details:
        "Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem.",
    },
    {
      icon: <BsFillSunFill />,
      heading: "Excellent Features",
      details:
        "Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem.",
    },
    {
      icon: <BsFillCalendar2RangeFill />,
      heading: "Retina Ready",
      details:
        "Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem.",
    },
  ];
  return (
    <section id="features">
      <div className="container">
        <div className="fe-head">Features</div>
        <div className="fe-row">
          {feaob.map((v, i) => {
            return (
              <div className="fe-col" key={i}>
                <div className="fe-card">
                  <div className="fe-icon">{v.icon}</div>
                  <h2>{v.heading}</h2>
                  <p>{v.details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
