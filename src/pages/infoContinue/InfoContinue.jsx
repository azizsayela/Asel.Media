import React, { useEffect, useState } from "react";
import "./infoContinu.scss";
import { LastNews } from "../../components/categoryPage/lastNews";
import { NewsGrid } from "../../components/newsGrid/newsGrid";

// SanityServices
import { FetchInfoContinuArticles } from "../../services/sanityService";

export const InfoContinue = () => {
  const [infoContinuArticles, setInfoContinuArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const sportArticles = await FetchInfoContinuArticles();
        setInfoContinuArticles(sportArticles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="wrapper">
        <LastNews data={infoContinuArticles}></LastNews>
      </div>
      <NewsGrid
        title="L'info en continu"
        data={infoContinuArticles.slice(5)}
      ></NewsGrid>
    </>
  );
};
