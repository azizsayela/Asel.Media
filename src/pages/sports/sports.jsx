import React, { useEffect, useState } from "react";
import { LastNews } from "../../components/categoryPage/lastNews";
import { NewsGrid } from "../../components/newsGrid/newsGrid";
import { Technology, Finance, Sports, HealthFitness } from "../../category";
import "./sport.scss";

// SanityServices
import { FetchSportsArticles } from "../../services/sanityService";

export const Sport = () => {
  const [sportsArticles, setSportsArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const sportArticles = await FetchSportsArticles();
        setSportsArticles(sportArticles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="wrapper">
        <LastNews data={sportsArticles}></LastNews>
      </div>
      <NewsGrid title="Sport" data={sportsArticles.slice(5)}></NewsGrid>
    </>
  );
};
