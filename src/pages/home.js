import React from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import ReportCard from "../components/ReportCard";
import temp from "../assets/thermometer.png";
import pressure from "../assets/pressure.png";
import ph from "../assets/meters.png";
export default function Home() {
  return (
    <div className="containerhome">
      <ReportCard name="Temperature" val="165°C" img={temp} col="#ebfcff" />
      <ReportCard name="Pressure" val="2 psi" img={pressure} col="#f6f1fe" />
      <ReportCard name="pH" val="7.5" img={ph} col="#f1f4fc" />
    </div>
  );
}
