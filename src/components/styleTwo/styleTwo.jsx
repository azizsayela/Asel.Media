import React from "react";
import { HeadingTitle } from "../headingTitle/HeadingTitle";
import "./styleTwo.scss";
import { ConverURLToImage } from "../../services/sanityService";
import { Link } from "react-router-dom";

export const StyleTwo = ({ category, articles, headingAuthor }) => {
  return (
    <div className="styleTwo">
      <HeadingTitle title={category} />
      {articles && articles.length > 0 && (
        <>
          <div className="top">
            <img
              src={ConverURLToImage(articles[0]?.mainImage?.asset?._ref).url()}
              alt=""></img>
            <a className="cat">{category}</a>
            {/* <a className="postIcon">{Icon}</a> */}
            <div className="postInfo">
              <ul className="nav">
                {/* <li>{headingAuthor}</li> */}
                <li>{articles[0]?.publicationDate}</li>
              </ul>
              <h3>{articles[0].title}</h3>
            </div>
          </div>
          {/* ----------- single post */}
          <div className="bottom">
            {articles.slice(1, 5).map((article, index) => (
              <Link
                className="item"
                key={index}
                to={`post?id=${article._id}&type=${article._type}`}>
                <div className="left">
                  <img
                    src={ConverURLToImage(
                      article?.mainImage?.asset?._ref
                    ).url()}
                    alt=""
                  />
                </div>
                <div className="right">
                  <ul className="nav">
                    {/* <li>{article.author}</li> */}
                    <li>{article.publicationDate}</li>
                  </ul>
                  <h3>{article.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
