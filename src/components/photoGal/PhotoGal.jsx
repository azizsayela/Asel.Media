import React from "react";
import HeadingTitle from "../headingTitle/HeadingTitle";
import { MdVisibility } from "react-icons/md";
import "./photoGal.scss";
import BoxOption from "../boxOption/BoxOption";
import { Photo } from "../../category";
const PhotoGal = () => {
  return (
    <div className="photoGal">
      <div className="photoGalWrapper">
        <div className="photoGalImg">
          {/* Add heading title here */}
          <HeadingTitle title={"Photo Gallery"} />
          <div className="top">
            <img src="assets/photo-gallery-01.jpg" />
            <a className="cat">Nature</a>
            <a className="icon">
              <MdVisibility style={{ fontSize: "20px" }} />
            </a>

            <div className="postInfo">
              <div className="postInfo">
                <ul className="nav">
                  <li>Kevin C. Udoka</li>
                  <li>20 January 2023</li>
                </ul>
                <h3>
                  Lorem ipsom dolor sit amet consectur Lorem ipsom dolor sit
                  amet consectur Lorem ipsom dolor sit amet consectur Lorem
                  ipsom dolor sit amet consectur
                </h3>
              </div>
            </div>
          </div>
          <BoxOption {...Photo} />
        </div>
        <div className="photoGalReader"></div>
      </div>
    </div>
  );
};

export default PhotoGal;
