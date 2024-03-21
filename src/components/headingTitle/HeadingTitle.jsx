import React from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import "./headingTitle.scss";

export const HeadingTitle = ({ title }) => {
  return (
    <div className="headingTitle">
      <div className="heading">
        <span className="title">{title}</span>
        <div className="icon">
          <FaLongArrowAltLeft
            className="left"
            style={{ fontSize: "20px" }}></FaLongArrowAltLeft>
          <FaLongArrowAltRight
            className="right"
            style={{ fontSize: "20px" }}></FaLongArrowAltRight>
        </div>
      </div>
    </div>
  );
};
