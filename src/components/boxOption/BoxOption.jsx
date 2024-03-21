import React from "react";
import "./boxOption.scss";
const BoxOption = ({
  image1,
  image1Except,
  image1Author,
  image1Date,
  image2,
  image2Except,
  image2Author,
  image2Date,
  image3,
  image3Except,
  image3Author,
  image3Date,
}) => {
  return (
    <div className="boxOption">
      <div className="boxOptionWrapper">
        <div className="item">
          <img src={image1}></img>
          <div className="postInfo">
            <ul className="nav">
              <li>{image1Author}</li>
              <li>{image1Date}</li>
            </ul>
            <h3>{image1Except}</h3>
          </div>
        </div>

        <div className="item">
          <img src={image2}></img>
          <div className="postInfo">
            <ul className="nav">
              <li>{image2Author}</li>
              <li>{image2Date}</li>
            </ul>
            <h3>{image2Except}</h3>
          </div>
        </div>

        <div className="item">
          <img src={image3}></img>
          <div className="postInfo">
            <ul className="nav">
              <li>{image3Author}</li>
              <li>{image3Date}</li>
            </ul>
            <h3>{image3Except}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxOption;
