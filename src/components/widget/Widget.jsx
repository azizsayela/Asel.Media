import React, { useEffect, useState } from "react";
import "./widget.scss";
import client from "../../sanityClient";
import { ConverURLToImage } from "../../services/sanityService";

export const Widget = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ads = await client.fetch(
          `*[_type == 'ad' && type == 'image' && orientation =='vertical']`
        );
        setImages(ads);
        const randomIndex = Math.floor(Math.random() * ads.length);
        setCurrentImageIndex(randomIndex);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        if (prevIndex === null) return null;
        const nextIndex = (prevIndex + 1) % images.length;
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const currentImage = images[currentImageIndex];

  const handleClick = () => {
    if (currentImage && currentImage.redirectionLink) {
      window.open(currentImage.redirectionLink, "_blank");
    }
  };

  return (
    <div className="wrapper" onClick={handleClick}>
      {currentImage && (
        <img src={ConverURLToImage(currentImage.image.asset._ref).url()} />
      )}
    </div>
  );
};
