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
import { Link } from "react-router-dom";

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
  const [infoEnContinu, setInfoEnContinu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const topArticles = await SanityClient.fetch(`
        *[_type == "article" && section == "Home" && layoutType == "top" ]
      `);
        const bottomArticles = await SanityClient.fetch(`
        *[_type == "article" && section == "Home" && layoutType == "bottom" ]
   
    `);
        const infoContinue = await SanityClient.fetch(`
    *[_type == "article" && section == "InfoEnContinu"  ]
    `);

        setMainArticles(topArticles);
        setBottomArticle(bottomArticles[0]);
        setInfoEnContinu(infoContinue);
      } catch (error) {
        console.log(error);
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
              <Link
                className="topLeftItem"
                key={index}
                to={`post?id=${article._id}`}>
                <img
                  src={ConverURLToImage(article?.mainImage?.asset._ref).url()}
                  alt=""></img>
                <PostInfos
                  date={article?._createdAt}
                  content={article?.content}></PostInfos>
              </Link>
            );
          })}
        </div>
        <Link className="bottomLeft" to={`post?id=${bottomArticle._id}`}>
          {bottomArticle.mainImage && (
            <img
              src={ConverURLToImage(bottomArticle?.mainImage?.asset._ref).url()}
              alt=""></img>
          )}
          <PostInfos
            date={bottomArticle?.publicationDate}
            content={bottomArticle?.content}></PostInfos>
        </Link>
      </div>
      <div className="right">
        <HeadingTitle title="L'info en continu" />
        <div className="postsWrapper">
          {infoEnContinu?.map((news, index) => {
            return (
              <Link
                className="postListItem"
                key={index}
                to={`/post?id=${news._id}`}
                style={{ textDecoration: "none" }}>
                <div className="left">
                  <h3>{news._createdAt.slice(11, 16)}</h3>
                </div>

                <div className="right">{news?.title}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
