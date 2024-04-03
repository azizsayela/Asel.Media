import React from "react";
import "./lastNews.scss";
import { Technology } from "../../category";
import { ConverURLToImage } from "../../services/sanityService";
import { Link } from "react-router-dom";

export const LastNews = ({ data }) => {
  return (
    <div className="wrapper">
      {data && data.length > 0 && (
        <>
          {/* <div className="left"> */}
          <Link
            className="left"
            to={`/post?id=${data[0]?._id}&type=${data[0]?._type}`}
          >
            <img
              src={ConverURLToImage(data[0]?.mainImage?.asset?._ref).url()}
              style={{
                height: "100%",
                objectFit: "cover",
              }}
            ></img>
            <div className="postInfo">
              <div className="author_date">
                <span className="date">{data[0]?.publicationDate}</span>
              </div>
              <p className="postParag">{data[0]?.title}</p>
            </div>
          </Link>
          {/* </div> */}

          <div className="right">
            <div className="header">
              <h2>Last News update</h2>
            </div>
            {data.slice(1, 5).map((article, index) => (
              <Link
                className="articleContainer"
                to={`/post?id=${article?._id}&type=${article?._type}`}
              >
                <img
                  src={ConverURLToImage(article?.mainImage?.asset?._ref).url()}
                ></img>
                <div className="thumbInfo">
                  <h3>{article?.title}</h3>
                  <strong> {article?.publicationDate}</strong>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
