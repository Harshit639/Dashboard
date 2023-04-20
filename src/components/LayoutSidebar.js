import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import logo from "../assets/thislogo.png";
import "../index.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function LayoutSidebar() {
  const { collapseSidebar } = useProSidebar();
  const [selectedState, setstate] = useState("home");

  return (
    <Sidebar style={{ height: "100vh" }} defaultCollapsed={true}>
      <Menu
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            // only apply styles on first level elements of the tree
            if (level === 0)
              return {
                color: disabled ? "#000" : "grey",
                backgroundColor: active ? "#00bdd8" : undefined,
                color: active ? "#fff" : "grey",
              };
          },
        }}
      >
        <MenuItem
          icon={<MenuOutlinedIcon />}
          onClick={() => {
            collapseSidebar();
            console.log("clicked");
          }}
          style={{
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          {" "}
          <img src={logo} className="logo" />
        </MenuItem>

        <Link to="/home">
          <MenuItem
            icon={<HomeOutlinedIcon />}
            onClick={() => {
              setstate("home");
            }}
            active={selectedState === "home" ? true : false}
          >
            Home
          </MenuItem>
        </Link>

        <Link to="/inbox">
          <MenuItem
            icon={<PeopleOutlinedIcon />}
            onClick={() => {
              setstate("inbox");
            }}
            active={selectedState === "inbox" ? true : false}
          >
            Inbox
          </MenuItem>
        </Link>

        <Link to="/board">
          <MenuItem
            icon={<ContactsOutlinedIcon />}
            onClick={() => {
              setstate("board");
            }}
            active={selectedState === "board" ? true : false}
          >
            board
          </MenuItem>
        </Link>

        <Link to="/settings">
          <MenuItem
            icon={<ReceiptOutlinedIcon />}
            onClick={() => {
              setstate("settings");
            }}
            active={selectedState === "settings" ? true : false}
          >
            Settings
          </MenuItem>
        </Link>

        <Link to="/faq">
          <MenuItem
            icon={<HelpOutlineOutlinedIcon />}
            onClick={() => {
              setstate("faq");
            }}
            active={selectedState === "faq" ? true : false}
          >
            FAQ
          </MenuItem>
        </Link>
      </Menu>
    </Sidebar>
  );
}
