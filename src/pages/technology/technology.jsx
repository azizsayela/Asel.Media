import React, { useEffect, useState } from "react";
import { LastNews } from "../../components/categoryPage/lastNews";
import "./technology.scss";
import { Technology, Finance, Sports } from "../../category";
import { NewsGrid } from "../../components/newsGrid/newsGrid";

// SanityServices
import { FetchTechArticles } from "../../services/sanityService";

export const Technologie = () => {
  const [techArticles, setTechArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const sportArticles = await FetchTechArticles();
        setTechArticles(sportArticles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="wrapper">
        <LastNews data={techArticles}></LastNews>
      </div>
      <NewsGrid title="Technology" data={techArticles.slice(5)}></NewsGrid>
    </>
  );
};
