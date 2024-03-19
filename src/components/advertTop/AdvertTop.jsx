import React from "react";
import "./advertTop.scss";

export const AdvertTop = () => {
  return (
    <div className="advertTop">
      <div className="advertTopContainer">
        <div className="left">
          <a>
            <img src={"assets/logo.png"} alt="asel Logo"></img>
          </a>
        </div>
        <div className="right">
          <a>
            <img src={"assets/advertttt.gif"} alt="advertismenet"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdvertTop;
