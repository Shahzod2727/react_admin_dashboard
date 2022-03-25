import React from "react";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
// import Img from '../images/'
import "./Topbar.css";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Logo</span>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconsContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconsContainer">
            <Settings />
          </div>
          <img src="https://picsum.photos/200/300" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
