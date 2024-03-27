import React from "react";
import "./AdsBanner.scss";

export const AdsBanner = ({ imageUrl }) => {
  return (
    <div className="adsWrapper">
      <img src={imageUrl} style={{ objectFit: "contain" }}></img>
    </div>
  );
};
