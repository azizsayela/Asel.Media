import React from "react";
import { HeadingTitle } from "../headingTitle/HeadingTitle";
import "./styleTwo.scss";
import { ConverURLToImage } from "../../services/sanityService";
export const StyleTwo = ({
  category,
  articles,

  headingImg,
  title,
  headingAuthor,
  headingDate,
  headingExcept,
  Icon,
  image1,
  image1Author,
  image1Date,
  image1Except,
  image2,
  image2Author,
  image2Date,
  image2Except,
  image3,
  image3Author,
  image3Date,
  image3Except,
  image4,
  image4Author,
  image4Date,
  image4Except,
}) => {
  return (
    <div className="styleTwo">
      {console.log(articles, "articlesarticles")}
      <HeadingTitle title={category} />
      {articles && articles.length > 0 && (
        <>
          <div className="top">
            <img
              src={ConverURLToImage(articles[0]?.mainImage?.asset?._ref).url()}
              alt=""
            ></img>
            <a className="cat">{category}</a>
            {/* <a className="postIcon">{Icon}</a> */}
            <div className="postInfo">
              <ul className="nav">
                <li>{headingAuthor}</li>
                <li>{articles[0]?.publicationDate}</li>
              </ul>
              <h3>{articles[0].title}</h3>
            </div>
          </div>
          {/* ----------- single post */}
          <div className="bottom">
            {articles.slice(1, 5).map((article, index) => (
              <div className="item" key={index}>
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
              </div>
            ))}

            {/* <div className="item">
              <div className="left">
                <img src={image2} alt=""></img>
              </div>
              <div className="right">
                <ul className="nav">
                  <li>{image2Author}</li>
                  <li>{image2Date}</li>
                </ul>
                <h3>{image2Except}</h3>
              </div>
            </div>

            <div className="item">
              <div className="left">
                <img src={image3} alt=""></img>
              </div>
              <div className="right">
                <ul className="nav">
                  <li>{image3Author}</li>
                  <li>{image3Date}</li>
                </ul>
                <h3>{image3Except}</h3>
              </div>
            </div>

            <div className="item">
              <div className="left">
                <img src={image4} alt=""></img>
              </div>
              <div className="right">
                <ul className="nav">
                  <li>{image4Author}</li>
                  <li>{image4Date}</li>
                </ul>
                <h3>{image4Except}</h3>
              </div>
            </div> */}
          </div>
        </>
      )}
    </div>
  );
};
