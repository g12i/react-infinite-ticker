import faker from "faker";
import React, { useState } from "react";
import { render } from "react-dom";
import { VerticalTicker, HorizontalTicker } from "../lib";
import "./style.css";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const boxes = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  heading1: faker.address.cityName(),
  heading2: faker.name.jobTitle(),
  backgroundColor: `hsl(${getRandomInt(0, 360)}, 100%, 90.2%)`,
}));

function App() {
  return (
    <div className="demo">
      <div className="row">
        <h1>Vertical</h1>
        <div style={{ height: "500px" }}>
          <VerticalTicker>
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
        <HorizontalTicker>
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
