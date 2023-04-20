import React from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import ReportCard from "../components/ReportCard";
import temp from "../assets/thermometer.png";
import pressure from "../assets/pressure.png";
import ph from "../assets/meters.png";

import MyResponsiveBar from "../components/BarChart";
import MyResponsivePie from "../components/PieChart";
import { bardata, piedata } from "../components/data";

import { Row, Col } from "react-bootstrap";
import useWindowDimensions from "../components/DimensionHook";
import { minWidth } from "@mui/system";

export default function Home() {
  const { height, width } = useWindowDimensions();
  console.log(width);
  return (
    <div>
      <div className="containerhome">
        <Row className="align-items-center" style={{ marginLeft: -5 }}>
          <Col xs={12} md={6} xl={4} className="align-items-center carditem">
            <ReportCard
              name="Temperature"
              val="165°C"
              img={temp}
              col="#ebfcff"
            />
          </Col>
          <Col xs={12} md={6} xl={4} className="align-items-center carditem">
            <ReportCard
              name="Pressure"
              val="2 psi"
              img={pressure}
              col="#f6f1fe"
            />
          </Col>
          <Col xs={12} md={6} xl={4} className="align-items-center carditem">
            <ReportCard name="pH" val="7.5" img={ph} col="#f1f4fc" />
          </Col>
        </Row>
      </div>
      <div className="charts">
        <Row className="aligh-items-center">
          <Col
            xs={12}
            md={6}
            xl={8}
            style={{ marginLeft: -5, marginBottom: -500 }}
          >
            <div
              style={{
                height: width > 600 ? 425 : 300,
                width: width > 600 ? 850 : 400,
              }}
            >
              <MyResponsiveBar data={bardata} />
            </div>
          </Col>

          <Col xs={12} md={6} xl={4}>
            <div
              style={{
                height: width > 600 ? 425 : 350,
                width: width > 600 ? 380 : 280,
              }}
            >
              <MyResponsivePie data={piedata} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
