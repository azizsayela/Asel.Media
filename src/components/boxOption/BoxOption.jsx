import React from "react";
import "./boxOption.scss";
import { ConverURLToImage } from "../../services/sanityService";

const BoxOption = ({ images, currentPage }) => {
  // Calculate the index range of images to render based on the current page
  const startIndex =
    currentPage < 1
      ? 1
      : currentPage + 4 >= images.length - 1
      ? images.length - 4
      : currentPage + 4;
  const endIndex =
    startIndex + 3 > images.length ? images.length : startIndex + 3;

  return (
    <div className="boxOption">
      <div className="boxOptionWrapper">
        {/* Render images based on the calculated index range */}
        {images.slice(startIndex, endIndex).map((image, index) => (
          <div className="item" key={index}>
            <img
              src={ConverURLToImage(image.mainImage.asset._ref).url()}
              alt={`Image ${startIndex + index + 1}`}
            />
            <div className="postInfo">
              <ul className="nav">
                {/* <li>{image.author}</li> */}
                <li>{image.date}</li>
              </ul>
              <h3>{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxOption;
