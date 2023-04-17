import React from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import ReportCard from "../components/ReportCard";

export default function Home() {
  return (
    <div className="containerhome">
      <ReportCard />
      <ReportCard />
      <ReportCard />
    </div>
  );
}
