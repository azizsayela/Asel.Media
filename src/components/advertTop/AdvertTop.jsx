import React, { useEffect, useState } from "react";
import "./advertTop.scss";
import client from "../../sanityClient";
import { ConverURLToImage } from "../../services/sanityService";

export const AdvertTop = () => {
  let [gifAds, setGifAds] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const ads = await client.fetch(`*[_type == 'ad' && type == 'gif']`);
        const gifData = ads[0].gif; // Assuming 'ads' is the array of fetched ad data
        const assetRef = gifData.asset._ref.split("-")[1];
        const url = `https://cdn.sanity.io/files/1tsp9brm/production/${assetRef}.gif`;
        setGifAds(url);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="advertTop">
      <div className="advertTopContainer">
        {!isMobile && (
          <div className="left">
            <a>
              <img src={"assets/logo.png"} alt="asel Logo"></img>
            </a>
          </div>
        )}
        {!isMobile && (
          <div className="right">
            <a>
              <img src={gifAds} alt="advertismenet"></img>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvertTop;
