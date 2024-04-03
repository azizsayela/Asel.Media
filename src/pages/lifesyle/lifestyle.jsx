import React, { useEffect, useState } from "react";
import "./lifestyle.scss";
import { LastNews } from "../../components/categoryPage/lastNews";
import { NewsGrid } from "../../components/newsGrid/newsGrid";
// SanityServices
import { FetchNews } from "../../services/sanityService";
export const Lifestyle = () => {
  const [infoContinuArticles, setInfoContinuArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const sportArticles = await FetchNews("lifeStyle");
        setInfoContinuArticles(sportArticles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="imageWrapper">
        <LastNews data={infoContinuArticles}></LastNews>
      </div>
      <NewsGrid
        title="lifeStyle"
        data={infoContinuArticles.slice(5)}></NewsGrid>
    </>
  );
};
