import React from "react";
import logo from "../../assets/logo.png";
import advertGif from "../../assets/advertttt.gif";
import "./advertTop.scss";

export const AdvertTop = () => {
  return (
    <div className="advertTop">
      <div className="advertTopContainer">
        <div className="left">
          <a>
            <img src={logo} alt="asel Logo"></img>
          </a>
        </div>
        <div className="right">
          <a>
            <img src={advertGif} alt="advertismenet"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdvertTop;
