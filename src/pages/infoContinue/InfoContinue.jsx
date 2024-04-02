import React, { useEffect, useState } from "react";
import "./infoContinu.scss";
import { LastNews } from "../../components/categoryPage/lastNews";
import { NewsGrid } from "../../components/newsGrid/newsGrid";
<<<<<<< HEAD
import { Technology, Finance, Sports, HealthFitness } from "../../category";
=======

// SanityServices
import { FetchInfoContinuArticles } from "../../services/sanityService";
>>>>>>> e6a3352af2e8a473848faadbe7400ed83a7bd21b

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
<<<<<<< HEAD
        <LastNews data={HealthFitness}></LastNews>
      </div>
      <NewsGrid title="LifeStyle" data={Finance}></NewsGrid>
=======
        <LastNews data={infoContinuArticles}></LastNews>
      </div>
      <NewsGrid
        title="L'info en continu"
        data={infoContinuArticles.slice(5)}
      ></NewsGrid>
>>>>>>> e6a3352af2e8a473848faadbe7400ed83a7bd21b
    </>
  );
};
