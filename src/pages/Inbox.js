import React, { useState } from "react";
import { Spring } from "react-spring";
import logoo from "../assets/thislogo.png";

export default function Inbox() {
  const maxValue = 100;
  const [progress, setprogress] = useState(10);

  return (
    <>
      <div className="devices">
        <img src={logoo} alt="" srcset="" style={{ height: "3.5rem" }} />
        <Spring from={{ percent: 0 }} to={{ percent: maxValue }}>
          {({ percent }) => (
            <div className="progress vertical">
              <div style={{ height: progress }} className="progress-bar">
                <span className="sr-only">{`${progress}%`}</span>
              </div>
            </div>
          )}
        </Spring>
      </div>
      <div className="devices">
        <img src={logoo} alt="" srcset="" style={{ height: "3.5rem" }} />
        <Spring from={{ percent: 0 }} to={{ percent: maxValue }}>
          {({ percent }) => (
            <div className="progress vertical">
              <div style={{ height: progress }} className="progress-bar">
                <span className="sr-only">{`${progress}%`}</span>
              </div>
            </div>
          )}
        </Spring>
      </div>
      <div className="devices">
        <img src={logoo} alt="" srcset="" style={{ height: "3.5rem" }} />
        <Spring from={{ percent: 0 }} to={{ percent: maxValue }}>
          {({ percent }) => (
            <div className="progress vertical">
              <div style={{ height: progress }} className="progress-bar">
                <span className="sr-only">{`${progress}%`}</span>
              </div>
            </div>
          )}
        </Spring>
        <div className="boxes">
          <div className="innerbox">Teperature</div>
          <div className="innerbox">Pressure</div>
          <div className="innerbox">Density</div>
          <div className="innerbox">Volume</div>
        </div>
        <div className="boxes">
          <div className="innerbox">16 C</div>
          <div className="innerbox">2 Psi</div>
          <div className="innerbox">" "</div>
          <div className="innerbox">" "</div>
        </div>
      </div>
    </>
  );
}
