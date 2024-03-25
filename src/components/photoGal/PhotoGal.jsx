import React from "react";
import { HeadingTitle } from "../headingTitle/HeadingTitle";
import { MdVisibility } from "react-icons/md";
import "./photoGal.scss";
import BoxOption from "../boxOption/BoxOption";
import { Photo } from "../../category";
import { FaQuoteLeft } from "react-icons/fa";
const PhotoGal = () => {
  return (
    <div className="photoGal">
      <div className="photoGalWrapper">
        <div className="photoGalImg">
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
        <div className="photoGalReader">
          <HeadingTitle title="Readers Opinion" />
          <div className="readerListWrapper">
            <div className="readerListItem">
              <div className="readerImg">
                <img src="assets/readers-opinion-01.png" />
              </div>
              <div className="postInfo">
                <div className="title">
                  <h3>
                    <FaQuoteLeft className="icon" />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                </div>
                <ul>
                  <li>By User24</li>
                  <li>16 Feb 2023</li>
                </ul>
              </div>
            </div>

            <div className="readerListItem">
              <div className="readerImg">
                <img src="assets/readers-opinion-02.png" />
              </div>
              <div className="postInfo">
                <div className="title">
                  <h3>
                    <FaQuoteLeft className="icon" />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                </div>
                <ul>
                  <li>By User24</li>
                  <li>16 Feb 2023</li>
                </ul>
              </div>
            </div>

            <div className="readerListItem">
              <div className="readerImg">
                <img src="assets/readers-opinion-03.png" />
              </div>
              <div className="postInfo">
                <div className="title">
                  <h3>
                    <FaQuoteLeft className="icon" />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                </div>
                <ul>
                  <li>By User24</li>
                  <li>16 Feb 2023</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGal;
