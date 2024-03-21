import React from "react";
import {
  MdStarBorder,
  MdFavoriteBorder,
  MdVisibility,
  MdFlashOn,
} from "react-icons/md";
import "./hotLinx.scss";

export const HotLinx = () => {
  return (
    <div className="hotLinks">
      <div className="hotLinksWrapper">
        <div className="item">
          <MdStarBorder style={{ fontSize: "30px" }}></MdStarBorder>
          <span>Featured News</span>
        </div>
        <div className="item">
          <MdFavoriteBorder style={{ fontSize: "30px" }}></MdFavoriteBorder>
          <span>Featured News</span>
        </div>
        <div className="item">
          <MdFlashOn style={{ fontSize: "30px" }}></MdFlashOn>
          <span>Featured News</span>
        </div>
        <div className="item">
          <MdVisibility style={{ fontSize: "30px" }}></MdVisibility>
          <span>Featured News</span>
        </div>
      </div>
    </div>
  );
};
