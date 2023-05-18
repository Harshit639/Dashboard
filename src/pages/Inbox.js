import React, { useState } from "react";
import { Spring } from "react-spring";
import tank1 from "../assets/tank1.jpg";
import tank2 from "../assets/tank2.jpg";
import tank3 from "../assets/tank3.jpg";
import tank4 from "../assets/tank4.jpg";

export default function Inbox() {
  const maxValue = 100;
  const [progress, setprogress] = useState(10);

  return (
    <>
      <div className="devices">
        <img
          src={tank1}
          alt=""
          srcset=""
          style={{ height: "12rem", borderRadius: "5px" }}
          className="devicesInner"
        />
        <div style={{ padding: "2rem" }}>
          <h3>TANK 1</h3>
          <p>Location: Chennai</p>
        </div>
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
          <div className="innerbox">.</div>
          <div className="innerbox">.</div>
        </div>
      </div>
      <div className="devices">
        <img
          src={tank2}
          alt=""
          srcset=""
          style={{ height: "12rem", borderRadius: "5px" }}
          className="devicesInner"
        />
        <div style={{ padding: "2rem" }}>
          <h3>TANK 2</h3>
          <p>Location: Chennai</p>
        </div>
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
          <div className="innerbox">.</div>
          <div className="innerbox">.</div>
        </div>
      </div>
      <div className="devices">
        <img
          src={tank3}
          alt=""
          srcset=""
          style={{ height: "12rem", borderRadius: "5px" }}
          className="devicesInner"
        />
        <div style={{ padding: "2rem" }}>
          <h3>TANK 3</h3>
          <p>Location: Chennai</p>
        </div>
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
          <div className="innerbox">.</div>
          <div className="innerbox">.</div>
        </div>
      </div>
      <div className="devices">
        <img
          src={tank4}
          alt=""
          srcset=""
          style={{ height: "12rem", borderRadius: "5px" }}
          className="devicesInner"
        />
        <div style={{ padding: "2rem" }}>
          <h3>TANK 4</h3>
          <p>Location: Chennai</p>
        </div>
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
          <div className="innerbox">.</div>
          <div className="innerbox">.</div>
        </div>
      </div>
    </>
  );
}
