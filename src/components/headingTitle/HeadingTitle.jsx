import React from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import "./headingTitle.scss";

export const HeadingTitle = ({ title, isArrowVisible, back, next }) => {
  return (
    <div className="headingTitle">
      <div className="heading">
        <span className="title">{title}</span>
        {isArrowVisible && (
          <div className="icon">
            <FaLongArrowAltLeft
              className="left"
              style={{ fontSize: "20px" }}
              onClick={back}
            />
            <span className="divider">/</span>
            <FaLongArrowAltRight
              className="right"
              style={{ fontSize: "20px" }}
              onClick={() => next()}
            />
          </div>
        )}
      </div>
    </div>
  );
};
