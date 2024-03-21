import React from "react";
import { HeadingTitle } from "../headingTitle/HeadingTitle";
import "./styleTwo.scss";

export const StyleTwo = ({
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
    <div className="styleTwo">
      <HeadingTitle title={category}></HeadingTitle>
      <div className="top">
        <img src={headingImg} alt=""></img>
        <a className="cat">{title}</a>
        <a className="icon">{Icon}</a>
        <div className="postInfo">
          <ul className="nav">
            <li>{headingAuthor}</li>
            <li>{headingDate}</li>
          </ul>
          <h3>{image1Except}</h3>
        </div>
      </div>
      {/* ----------- single post */}
      <div className="bottom">
        <div className="item">
          <div className="left">
            <img src={image1} alt=""></img>
          </div>
          <div className="right">
            <ul className="nav">
              <li>{image1Author}</li>
              <li>{image1Date}</li>
            </ul>
            <h3>{image1Except}</h3>
          </div>
        </div>
        {/* ----------- single post */}
        <div className="item">
          <div className="left">
            <img src={image2} alt=""></img>
          </div>
          <div className="right">
            <ul className="nav">
              <li>{image2Author}</li>
              <li>{image2Date}</li>
            </ul>
            <h3>{image2Except}</h3>
          </div>
        </div>
        {/* ----------- single post */}
        <div className="item">
          <div className="left">
            <img src={image3} alt=""></img>
          </div>
          <div className="right">
            <ul className="nav">
              <li>{image3Author}</li>
              <li>{image3Date}</li>
            </ul>
            <h3>{image3Except}</h3>
          </div>
        </div>
        <div className="item">
          <div className="left">
            <img src={image4} alt=""></img>
          </div>
          <div className="right">
            <ul className="nav">
              <li>{image4Author}</li>
              <li>{image4Date}</li>
            </ul>
            <h3>{image4Except}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
