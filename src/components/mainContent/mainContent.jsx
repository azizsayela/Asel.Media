import React, { useState, useEffect } from "react";
//icons
import {
  MdFlashOn,
  MdStarBorder,
  MdFavoriteBorder,
  MdVisibility,
} from "react-icons/md";
import "./mainContent.scss";
import { HeadingTitle } from "../headingTitle/HeadingTitle";
import SanityClient from "../../sanityClient";
import { ConverURLToImage } from "../../services/sanityService";

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

const PostInfos = ({ date, content }) => {
  return (
    <article className="postInfoWrapper">
      <div className="author_date">
        <h2>{date?.slice(0, 10)}</h2>
      </div>
      <p className="postIntro">{content}</p>
    </article>
  );
};

export const MainContent = () => {
  const [mainArticles, setMainArticles] = useState([]);
  const [bottomArticle, setBottomArticle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const topArticles = await SanityClient.fetch(`
        *[_type == "article" && section == "Home" && layoutType == "top" ]
      `);
        const bottomArticles = await SanityClient.fetch(`
        *[_type == "article" && section == "Home" && layoutType == "bottom" ]
    `);
        setMainArticles(topArticles);
        setBottomArticle(bottomArticles[0]);
      } catch (error) {
        console.log(error);
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="mainContent">
      <div className="left">
        <div className="topLeft">
          {mainArticles.map((article, index) => {
            return (
              <div className="topLeftItem" key={index}>
                {/* <PostHeader postType="Politic"></PostHeader> */}
                <img
                  src={ConverURLToImage(article?.mainImage?.asset._ref).url()}
                  alt=""></img>
                <PostInfos
                  date={article?._createdAt}
                  content={article?.content}></PostInfos>
              </div>
            );
          })}
        </div>
        <div className="bottomLeft">
          {bottomArticle.mainImage && (
            <img
              src={ConverURLToImage(bottomArticle?.mainImage?.asset._ref).url()}
              alt=""></img>
          )}
          <PostInfos
            date={bottomArticle?.publicationDate}
            content={bottomArticle?.content}></PostInfos>
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
