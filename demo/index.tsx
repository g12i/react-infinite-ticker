import React, { useState } from "react";
import { createRoot } from "react-dom/client";
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
  const [duration, setDuration] = useState(15000);
  const [delay, setDelay] = useState(0);
  const [easing, setEasing] = useState("linear");
  const [reverse, setReverse] = useState(false);

  return (
    <div className="demo">
      <div className="row">
        <div className="options">
          <label>
            Easing
            <select
              value={easing}
              onChange={(event) => {
                setEasing(event.target.value);
              }}
            >
              <option value="linear">linear</option>
              <option value="ease-in">ease-in</option>
              <option value="ease-out">ease-out</option>
              <option value="ease-in-out">ease-in-out</option>
            </select>
          </label>
          <label>
            Duration
            <input
              value={duration}
              type="range"
              min={1000}
              max={25000}
              step={1000}
              onChange={(event) => {
                setDuration(Number.parseInt(event.target.value));
              }}
            />
            <output>{duration}ms</output>
          </label>
          <label>
            Delay
            <input
              value={delay}
              type="range"
              min={0}
              max={5000}
              step={1000}
              onChange={(event) => {
                setDelay(Number.parseInt(event.target.value));
              }}
            />
            <output>{delay}ms</output>
          </label>
          <label>
            Reverse?
            <input
              checked={reverse}
              type="checkbox"
              min={0}
              max={5000}
              step={1000}
              onChange={(event) => {
                setReverse(event.target.checked);
              }}
            />
            <output>{delay}ms</output>
          </label>
        </div>
        <h1>Vertical</h1>
        <div style={{ height: "500px" }}>
          <VerticalTicker
            duration={duration}
            easing={easing}
            delay={delay}
            reverse={reverse}
          >
            {boxes.map(({ id, backgroundColor, heading1, heading2 }) => (
              <div className="box-wrapper" key={id}>
                <div
                  className="box box--horizontal"
                  style={{ backgroundColor }}
                >
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
        <HorizontalTicker
          duration={duration}
          easing={easing}
          delay={delay}
          reverse={reverse}
        >
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

const root = createRoot(document.getElementById("app")!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
