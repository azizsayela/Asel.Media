import React from "react";
import "./newsGrid.scss";

export const NewsGrid = ({ title, data }) => {
  return (
    <div className="container">
      <div className="Heading">
        <h1>{title}</h1>
        <div className="line"></div>
      </div>
      <div className="grid">
        <div className="post">
          <img src={data.image1}></img>
          <div className="date_author">
            <h2>{data.image1Date}</h2>
            <span>{data.image1Author}</span>
          </div>
          <p className="parag">{data.image1Except}</p>
        </div>
        <div className="post">
          <img src={data.image2}></img>
          <div className="date_author">
            <h2>{data.image1Date}</h2>
            <span>{data.image1Author}</span>
          </div>
          <p className="parag">{data.image1Except}</p>
        </div>
        <div className="post">
          <img src={data.image3}></img>
          <div className="date_author">
            <h2>{data.image1Date}</h2>
            <span>{data.image1Author}</span>
          </div>
          <p className="parag">{data.image1Except}</p>
        </div>
        <div className="post">
          <img src={data.image4}></img>
          <div className="date_author">
            <h2>{data.image1Date}</h2>
            <span>{data.image1Author}</span>
          </div>
          <p className="parag">{data.image1Except}</p>
        </div>
      </div>
    </div>
  );
};
