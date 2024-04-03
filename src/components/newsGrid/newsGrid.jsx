import React from "react";
import "./newsGrid.scss";
import { ConverURLToImage } from "../../services/sanityService";
import { Link } from "react-router-dom";

export const NewsGrid = ({ title, data }) => {
  return (
    <div className="container">
      <div className="Heading">
        <h1>{title}</h1>
        <div className="line"></div>
      </div>
      <div className="grid">
        {data &&
          data.length > 0 &&
          data.map((article, index) => (
            <Link
              className="post"
              to={`/post?id=${article?._id}&type=${article?._type}`}
            >
              <img
                src={ConverURLToImage(article?.mainImage?.asset?._ref).url()}
              ></img>
              <div className="date_author">
                <h2>{article?.publicationDate}</h2>
              </div>
              <p className="parag">{article?.title}</p>
            </Link>
          ))}
      </div>
    </div>
  );
};
