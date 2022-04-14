import React from "react";
import { render } from "react-dom";
import { VerticalTicker, HorizontalTicker } from "../lib";
import "./style.css";

const boxes = [
  {
    id: 0,
    heading1: "Spring Hill",
    heading2: "Direct Applications Coordinator",
    backgroundColor: "hsl(119, 100%, 90.2%)",
  },
  {
    id: 1,
    heading1: "Euless",
    heading2: "National Solutions Representative",
    backgroundColor: "hsl(210, 100%, 90.2%)",
  },
  {
    id: 2,
    heading1: "Buena Park",
    heading2: "Chief Operations Liaison",
    backgroundColor: "hsl(273, 100%, 90.2%)",
  },
  {
    id: 3,
    heading1: "Euclid",
    heading2: "Customer Mobility Facilitator",
    backgroundColor: "hsl(168, 100%, 90.2%)",
  },
  {
    id: 4,
    heading1: "Madison",
    heading2: "Dynamic Applications Manager",
    backgroundColor: "hsl(161, 100%, 90.2%)",
  },
  {
    id: 5,
    heading1: "Sammamish",
    heading2: "National Identity Manager",
    backgroundColor: "hsl(172, 100%, 90.2%)",
  },
];

function App() {
  return (
    <div className="demo">
      <div className="row">
        <h1>Vertical</h1>
        <div style={{ height: "500px" }}>
          <VerticalTicker duration={5000}>
            {boxes.map(({ id, backgroundColor, heading1, heading2 }) => (
              <div className="box-wrapper" key={id}>
                <div className="box" style={{ backgroundColor }}>
                  <p className="heading-1">{heading1}</p>
                  <p className="heading-2">{heading2}</p>
                </div>
              </div>
            ))}
          </VerticalTicker>
        </div>
      </div>
      <div className="row">
        <h1>Horizontal</h1>
        <HorizontalTicker duration={22000}>
          {boxes.map(({ id, backgroundColor, heading1, heading2 }) => (
            <div className="box-wrapper box-wrapper--vertical" key={id}>
              <div className="box box--vertical" style={{ backgroundColor }}>
                <p className="heading-1">{heading1}</p>
                <p className="heading-2">{heading2}</p>
              </div>
            </div>
          ))}
        </HorizontalTicker>
      </div>
    </div>
  );
}

render(<App />, document.getElementById("app"));
