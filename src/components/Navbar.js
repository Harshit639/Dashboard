import React from "react";
import avatar from "../assets/man.png";
import NotificationsActiveTwoToneIcon from "@mui/icons-material/NotificationsActiveTwoTone";

function Navbar() {
  return (
    <div className="navouter">
      <div>
        <h1>
          <strong>Report</strong>
        </h1>
      </div>
      <div className="navbarinner">
        <NotificationsActiveTwoToneIcon style={{ marginRight: "5px" }} />
        <img src={avatar} style={{ height: "50px" }} />
      </div>
    </div>
  );
}

export default Navbar;
