import React, { useEffect, useState } from "react";
import "./widget.scss";
import client from "../../sanityClient";
import { ConverURLToImage } from "../../services/sanityService";

export const Widget = () => {
  let [imageURL, setImageURL] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const ads = await client.fetch(`*[_type == 'ad']`);
        let convertedImage = ConverURLToImage(ads[1].image.asset._ref).url();
        console.log(ads, "adsads");
        console.log(convertedImage, "convertedImage");
        setImageURL(convertedImage);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      {/* <h1>ADS PLACEHOLDER</h1> */}
      <img src={imageURL} />
    </div>
  );
};
