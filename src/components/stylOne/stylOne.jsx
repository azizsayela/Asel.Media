import React from "react";
import { HeadingTitle } from "../../components/headingTitle/HeadingTitle";
import "./styleOne.scss";
import { ConverURLToImage } from "../../services/sanityService";
import { Link } from "react-router-dom";

export const StylOne = ({ category, articles }) => {
  return (
    <div className="styleOne">
      <HeadingTitle title={category} />
      {articles && articles.length > 0 && (
        <>
          <Link to={`post?id=${articles[0]._id}&type=${articles[0]._type}`}>
            <div className="top">
              <img
                src={ConverURLToImage(
                  articles[0]?.mainImage?.asset?._ref
                ).url()}
                alt=""
              ></img>
              <a className="cat">{category}</a>
              <div className="postInfo">
                <ul className="nav">
                  <li>{articles[0]?.publicationDate}</li>
                </ul>
                <h3>{articles[0].title}</h3>
              </div>
            </div>
          </Link>
          <div className="bottom">
            {articles.slice(1, 5).map((article, index) => (
              <Link
                className="item"
                key={index}
                to={`post?id=${article._id}&type=${article._type}`}
              >
                {/* Left */}
                <div className="left">
                  <a className="thumb">
                    <img
                      src={ConverURLToImage(
                        article?.mainImage?.asset?._ref
                      ).url()}
                      alt=""
                    ></img>
                    <ul className="nav">
                      <li>{article?.publicationDate}</li>
                    </ul>
                    <h3>{article?.title}</h3>
                  </a>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
