import React, { useEffect, useState } from "react";
import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import LiquidFillGauge from "react-liquid-gauge";
import mqtt from "mqtt/dist/mqtt";
import Paho from "paho-mqtt";
import { Spring } from "react-spring";
import { Button } from "react-bootstrap";
import { width } from "@mui/system";

export default function Inbox() {
  const [value, setvalue] = useState(50);
  const startColor = "#6495ed"; // cornflowerblue
  const endColor = "#dc143c";
  const radius = 150;
  const interpolate = interpolateRgb(startColor, endColor);
  const [heightstorage, setheightstorage] = useState(0);
  const fillColor = interpolate(value / 100);
  const [height, setheight] = useState(0);
  const maxValue = 100;
  const [progress, setprogress] = useState(10);
  const [volume, setvolume] = useState(0);
  const [radiustank, setradiustank] = useState(0);

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
          console.log(height);
          setvalue(((height - parseInt(message.payloadString)) / height) * 100);
          setvolume(
            3.14 * radius * radius * (height - parseInt(message.payloadString))
          );

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
  }, [height, radiustank]);

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

  const handleChange = (e) => {
    console.log(e);
    // this.setState({ inputValue: e.target.value });
    // this.props.onChange(e);
    setheight(e.target.value);
  };

  const handleradius = (e) => {
    console.log(e);
    // this.setState({ inputValue: e.target.value });
    // this.props.onChange(e);
    setradiustank(e.target.value);
  };
  return (
    <div
      style={{
        padding: "20px",
        boxShadow: "0px 0px 2px 2px black",
        width: "500px",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: "100px",
      }}
    >
      <h2 style={{ marginLeft: "60px" }}>Vertical Tank</h2>
      <LiquidFillGauge
        style={{ margin: "0 0" }}
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

      <div>
        <div style={{ marginTop: "35px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h4>Height of the Tank?</h4>
            <input
              type="text"
              style={{
                height: "27px",
                width: "35px",
                marginLeft: "20px",
              }}
              onChange={handleChange}
              value={height}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h4>Radius of the Tank?</h4>
            <input
              type="text"
              style={{
                height: "27px",
                width: "35px",
                marginLeft: "20px",
              }}
              onChange={handleradius}
              value={radiustank}
            />
          </div>
        </div>
        {/* <Button
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            height: "50px",
            width: "100px",
          }}
          onClick={() => {
            console.log(heightstorage);
            setheight(heightstorage);
            console.log("dvfdv" + height);
          }}
        >
          Submit
        </Button> */}

        <h4>Volume Filled: {volume}</h4>
      </div>
    </div>
  );
}
