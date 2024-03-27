import React, { useEffect, useState } from "react";
import "./widget.scss";
import client from "../../sanityClient";
import { ConverURLToImage } from "../../services/sanityService";

export const Widget = () => {
  let [imageURL, setImageURL] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const ads = await client.fetch(`*[_type == 'ad' && type == 'image']`);
        let convertedImage = ConverURLToImage(ads[0].image.asset._ref).url();
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
