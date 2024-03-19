import React from "react";
//icons
import {
  MdFlashOn,
  MdStarBorder,
  MdFavoriteBorder,
  MdVisibility,
} from "react-icons/md";
import "./mainContent.scss";

const PostHeader = ({ postType, icon }) => {
  return (
    <div className="postHeader">
      <h1 className="postType">{postType}</h1>
      <div className="iconWrapper">
        <MdStarBorder className="icon"></MdStarBorder>
      </div>
    </div>
  );
};

const PostInfos = ({ Author, date, intro }) => {
  return (
    <article className="postInfoWrapper">
      <div className="author_date">
        <h2>Molly Nagie</h2>
        <h2>10 January 2024</h2>
      </div>

      <p className="postIntro">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt esse
        consectetur ex distinctio vel eum reprehenderit, odio, autem repudiandae
      </p>
    </article>
  );
};

export const MainContent = () => {
  return (
    <div className="mainContent">
      <div className="left">
        <PostHeader postType="Politics"></PostHeader>
        <img src={"assets/usUkraine.jpg"} alt=""></img>
        <PostInfos></PostInfos>
      </div>
      <div className="right">
        <div className="topRight">
          <div className="topRightItem">
            <PostHeader postType="Travel"></PostHeader>
            <img src={"assets/banner-02.jpg"} alt=""></img>
            <PostInfos></PostInfos>
          </div>
          <div className="topRightItem">
            <PostHeader postType="Education   "></PostHeader>
            <img src={"assets/banner-03.jpg"} alt=""></img>
            <PostInfos></PostInfos>
          </div>
        </div>
        <div className="bottomRight">
          <PostHeader postType="Education"></PostHeader>
          <img src={"assets/banner-04.jpg"} alt=""></img>
          <PostInfos></PostInfos>
        </div>
      </div>
    </div>
  );
};
