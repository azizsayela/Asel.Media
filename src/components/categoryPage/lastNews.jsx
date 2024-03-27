import React from "react";
import "./lastNews.scss";
import { Technology } from "../../category";

export const LastNews = ({ data }) => {
  return (
    <div className="wrapper">
      <div className="left">
        <img
          src={data.headingImg}
          style={{ height: "100%", objectFit: "cover" }}></img>
        <div className="postInfo">
          <div className="author_date">
            <h2 className="author">{data.image1Author}</h2>
            <span className="date">{data.image1Date}</span>
          </div>
          <p className="postParag">{data.image1Except}</p>
        </div>
      </div>

      <div className="right">
        <div className="header">
          <h2>Last News update</h2>
        </div>
        <div className="articleContainer">
          <img src={data.image1}></img>
          <div className="thumbInfo">
            <h3>{data.image1Except}</h3>
            <strong> {data.image1Date}</strong>
          </div>
        </div>
        <div className="articleContainer">
          <img src={data.image2}></img>
          <div className="thumbInfo">
            <h3>{data.image1Except}</h3>
            <strong> {data.image1Date}</strong>
          </div>
        </div>
        <div className="articleContainer">
          <img src={data.image4}></img>
          <div className="thumbInfo">
            <h3>{data.image1Except}</h3>
            <strong> {data.image1Date}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
