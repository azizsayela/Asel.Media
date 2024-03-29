import React from "react";
import { HeadingTitle } from "../../components/headingTitle/HeadingTitle";
import "./styleOne.scss";
export const StylOne = ({
  category,
  headingImg,
  title,
  headingAuthor,
  headingDate,
  headingExcept,
  Icon,
  image1,
  image1Author,
  image1Date,
  image1Except,
  image2,
  image2Author,
  image2Date,
  image2Except,
  image3,
  image3Author,
  image3Date,
  image3Except,
  image4,
  image4Author,
  image4Date,
  image4Except,
}) => {
  return (
    <div className="styleOne">
      <HeadingTitle title={category} />
      {/* -------------------- Top  */}
      <div className="top">
        <img src={headingImg} alt=""></img>
        <a className="cat">{title}</a>
        <a className="icon">{Icon}</a>
        <div className="postInfo">
          <ul className="nav">
            <li>{headingAuthor}</li>
            <li>{headingDate}</li>
          </ul>
          <h3>{headingExcept}</h3>
        </div>
      </div>
      {/* -------------------- Top  */}

      <div className="bottom">
        {/* -------------------- bottomContainer */}
        <div className="item">
          {/* ------------left */}
          <div className="left">
            <a className="thumb">
              <img src={image1} alt=""></img>
              <ul className="nav">
                <li>{image1Author}</li>
                <li>{image1Date}</li>
              </ul>
              <h3>{image1Except}</h3>
            </a>
          </div>
          {/* ------------right */}
          <div className="right">
            <a className="thumb">
              <img src={image2} alt=""></img>
              <ul className="nav">
                <li>{image2Author}</li>
                <li>{image2Date}</li>
              </ul>
              <h3>{image2Except}</h3>
            </a>
          </div>
        </div>
        {/* new rowww  */}
        <div className="item">
          {/* ------------left */}
          <div className="left">
            <a className="thumb">
              <img src={image3} alt=""></img>
              <ul className="nav">
                <li>{image3Author}</li>
                <li>{image3Date}</li>
              </ul>
              <h3>{image3Except}</h3>
            </a>
          </div>
          {/* ------------right */}
          <div className="right">
            <a className="thumb">
              <img src={image4} alt=""></img>
              <ul className="nav">
                <li>{image4Author}</li>
                <li>{image4Date}</li>
              </ul>
              <h3>{image4Except}</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
