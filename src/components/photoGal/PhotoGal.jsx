import React, { useEffect, useState } from "react";
import { HeadingTitle } from "../headingTitle/HeadingTitle";
import { MdVisibility } from "react-icons/md";
import "./photoGal.scss";
import BoxOption from "../boxOption/BoxOption";
import { Photo } from "../../category";
import { FaQuoteLeft } from "react-icons/fa";
import client from "../../sanityClient";
import { ConverURLToImage } from "../../services/sanityService";
import { Widget } from "../widget/Widget";
const PhotoGal = () => {
  const [image, setImage] = useState([]);
  const [topImage, setTopImage] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedImages = await client.fetch(`*[_type == 'photoGallery']`);
        setImage(fetchedImages);
        if (fetchedImages.length > 0) {
          // const topImage = ConverURLToImage(fetchedImages[0].mainImage.asset._ref).url();
          setTopImage(fetchedImages[currentPage * 4]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [currentPage]);
  let numberOfPages = Math.ceil(image.length / 4);
  console.log(numberOfPages);
  const handleNextPage = () => {
    if (currentPage < numberOfPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="photoGal">
      <div className="photoGalWrapper">
        <div className="photoGalImg">
          <HeadingTitle
            title={"GALERIE DE PHOTOS ASEL"}
            isArrowVisible={true}
            back={handlePrevPage}
            next={handleNextPage}
          />
          <div className="top">
            {topImage && (
              <img
                src={ConverURLToImage(topImage?.mainImage?.asset?._ref).url()}
                alt="Top Image"
              />
            )}
            {/* <a className="cat">Nature</a>
            <a className="icon">
              <MdVisibility style={{ fontSize: "20px" }} />
            </a> */}
            {/*  */}
            <div className="postInfo">
              <div className="postInfo">
                <ul className="nav">
                  {/* <li>Kevin C. Udoka</li> */}
                  <li>{topImage?.date}</li>
                </ul>
                <h3>{topImage?.title}</h3>
              </div>
            </div>
          </div>
          <BoxOption images={image} currentPage={currentPage} />
        </div>
        <div className="photoGalReader">
          <Widget />
          {/* <HeadingTitle title="Readers Opinion" />
          <div className="readerListWrapper">
            <div className="readerListItem">
              <div className="readerImg">
                <img src="assets/readers-opinion-01.png" />
              </div>
              <div className="postInfo">
                <div className="title">
                  <h3>
                    <FaQuoteLeft className="icon" />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                </div>
                <ul>
                  <li>By User24</li>
                  <li>16 Feb 2023</li>
                </ul>
              </div>
            </div>

            <div className="readerListItem">
              <div className="readerImg">
                <img src="assets/readers-opinion-02.png" />
              </div>
              <div className="postInfo">
                <div className="title">
                  <h3>
                    <FaQuoteLeft className="icon" />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                </div>
                <ul>
                  <li>By User24</li>
                  <li>16 Feb 2023</li>
                </ul>
              </div>
            </div>

            <div className="readerListItem">
              <div className="readerImg">
                <img src="assets/readers-opinion-03.png" />
              </div>
              <div className="postInfo">
                <div className="title">
                  <h3>
                    <FaQuoteLeft className="icon" />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                </div>
                <ul>
                  <li>By User24</li>
                  <li>16 Feb 2023</li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PhotoGal;
