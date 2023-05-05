import React, { useEffect, useState } from "react";
import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import LiquidFillGauge from "react-liquid-gauge";
import mqtt from "mqtt/dist/mqtt";
import Paho from "paho-mqtt";
import { Spring } from "react-spring";
import { Button } from "react-bootstrap";

export default function Inbox() {
  const [value, setvalue] = useState(50);
  const startColor = "#6495ed"; // cornflowerblue
  const endColor = "#dc143c";
  const radius = 200;
  const interpolate = interpolateRgb(startColor, endColor);
  const fillColor = interpolate(value / 100);
  const height = 1000;
  const maxValue = 100;
  const [progress, setprogress] = useState(10);

  useEffect(() => {
    const client = new Paho.Client("reflow.online", Number(9001), "/", "wss");
    client.connect({
      onSuccess: function () {
        console.log("connected");
        client.subscribe("sensor");
        client.onMessageArrived = function (message) {
          // setfilled(
          //   parseInt(
          //     ((height - parseInt(message.payloadString)) / height) * 100
          //   )
          // );
          setvalue(((height - parseInt(message.payloadString)) / height) * 100);
          console.log(
            "Topic: " +
              message.destinationName +
              ", Message: " +
              message.payloadString
          );
        };
      },
      userName: "nuclear",
      password: "netquantity",
      useSSL: false,
      onFailure: function () {
        console.log("not connected");
      },
    });
  }, []);

  // useEffect(() => {
  //   var client = mqtt.connect("ws://reflow.online", {
  //     port: 9001,
  //     username: "nuclear",
  //     password: "netquantity",
  //   });

  //   client.on("connect", function () {
  //     console.log("connected");
  //     client.subscribe("test12", function (err) {
  //       if (!err) {
  //         // client.publish(
  //         //   "test12",
  //         //   JSON.stringify({
  //         //     content: "Hello welcome :)",
  //         //   })
  //         // );
  //       }
  //     });

  //   });

  //   client.on("message", function (topic, message) {
  //     // message is Buffer
  //     console.log(message.toString());
  //     client.end();
  //   });
  // });

  const gradientStops = [
    {
      key: "0%",
      stopColor: color(fillColor).darker(0.5).toString(),
      stopOpacity: 1,
      offset: "0%",
    },
    {
      key: "50%",
      stopColor: fillColor,
      stopOpacity: 0.75,
      offset: "50%",
    },
    {
      key: "100%",
      stopColor: color(fillColor).brighter(0.5).toString(),
      stopOpacity: 0.5,
      offset: "100%",
    },
  ];

  return (
    <div>
      <LiquidFillGauge
        style={{ margin: "0 auto" }}
        width={radius * 2}
        height={radius * 2}
        value={value}
        percent="%"
        textSize={1}
        textOffsetX={0}
        textOffsetY={0}
        textRenderer={(props) => {
          const value = Math.round(props.value);
          const radius = Math.min(props.height / 2, props.width / 2);
          const textPixels = (props.textSize * radius) / 2;
          const valueStyle = {
            fontSize: textPixels,
          };
          const percentStyle = {
            fontSize: textPixels * 0.6,
          };

          return (
            <tspan>
              <tspan className="value" style={valueStyle}>
                {value}
              </tspan>
              <tspan style={percentStyle}>{props.percent}</tspan>
            </tspan>
          );
        }}
        riseAnimation
        waveAnimation
        waveFrequency={2}
        waveAmplitude={1}
        gradient
        gradientStops={gradientStops}
        circleStyle={{
          fill: fillColor,
        }}
        waveStyle={{
          fill: fillColor,
        }}
        textStyle={{
          fill: color("#444").toString(),
          fontFamily: "Arial",
        }}
        waveTextStyle={{
          fill: color("#fff").toString(),
          fontFamily: "Arial",
        }}
        onClick={() => {
          setvalue(Math.random() * 100);
        }}
      />
      <Spring from={{ percent: 0 }} to={{ percent: maxValue }}>
        {({ percent }) => (
          <div className="progress vertical">
            <div style={{ height: progress }} className="progress-bar">
              <span className="sr-only">{`${progress}%`}</span>
            </div>
          </div>
        )}
      </Spring>
      <Button onClick={() => setprogress(20)}></Button>
      <div
        style={{
          margin: "20px auto",
          width: 120,
        }}
      >
        <button
          type="button"
          className="btn btn-default btn-block"
          onClick={() => {
            setvalue(Math.random() * 100);
          }}
        ></button>
      </div>
    </div>
  );
}
