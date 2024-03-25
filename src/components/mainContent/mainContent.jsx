import React from "react";
//icons
import {
  MdFlashOn,
  MdStarBorder,
  MdFavoriteBorder,
  MdVisibility,
} from "react-icons/md";
import "./mainContent.scss";
import { HeadingTitle } from "../headingTitle/HeadingTitle";

const PostHeader = ({ postType, icon }) => {
  return (
    <div className="postHeader">
      <h1 className="postType">{postType}</h1>
      <div
        className="iconWrapper"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}>
        <MdStarBorder
          style={{ color: "white", fontSize: "18px" }}></MdStarBorder>
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
        <div className="topLeft">
          <div className="topLeftItem">
            <PostHeader postType="Travel"></PostHeader>
            <img src={"assets/banner-02.jpg"} alt=""></img>
            <PostInfos></PostInfos>
          </div>
          <div className="topLeftItem">
            <PostHeader postType="Education   "></PostHeader>
            <img src={"assets/banner-03.jpg"} alt=""></img>
            <PostInfos></PostInfos>
          </div>
        </div>
        <div className="bottomLeft">
          <PostHeader postType="Education"></PostHeader>
          <img src={"assets/banner-04.jpg"} alt=""></img>
          <PostInfos></PostInfos>
        </div>
      </div>
      <div className="right">
        <HeadingTitle title="L'info en continu" />
        <div className="postsWrapper">
          <div className="postListItem">
            <div className="left">
              <h3>12:55</h3>
            </div>
            <div className="right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              nesciunt.
            </div>
          </div>

          <div className="postListItem">
            <div className="left">
              <h3>12:55</h3>
            </div>
            <div className="right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              nesciunt.
            </div>
          </div>

          <div className="postListItem">
            <div className="left">
              <h3>12:55</h3>
            </div>
            <div className="right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum veritatis nobis voluptates!
            </div>
          </div>

          <div className="postListItem">
            <div className="left">
              <h3>12:55</h3>
            </div>
            <div className="right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum veritatis nobis voluptates!
            </div>
          </div>

          <div className="postListItem">
            <div className="left">
              <h3>12:55</h3>
            </div>
            <div className="right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum veritatis nobis voluptates!
            </div>
          </div>

          <div className="postListItem">
            <div className="left">
              <h3>12:55</h3>
            </div>
            <div className="right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum veritatis nobis voluptates!
            </div>
          </div>

          <div className="postListItem">
            <div className="left">
              <h3>12:55</h3>
            </div>
            <div className="right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum veritatis nobis voluptates!
            </div>
          </div>

          <div className="postListItem">
            <div className="left">
              <h3>12:55</h3>
            </div>
            <div className="right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum veritatis nobis voluptates!
            </div>
          </div>

          <div className="postListItem">
            <div className="left">
              <h3>12:55</h3>
            </div>
            <div className="right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum veritatis nobis voluptates!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
