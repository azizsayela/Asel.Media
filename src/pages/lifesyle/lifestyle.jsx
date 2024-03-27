import React from "react";
import { LastNews } from "../../components/categoryPage/lastNews";
import { NewsGrid } from "../../components/newsGrid/newsGrid";
import { Technology, Finance, Sports, HealthFitness } from "../../category";
import "./lifestyle.scss";

export const Lifestyle = () => {
  return (
    <>
      <div className="wrapper">
        <LastNews data={HealthFitness}></LastNews>
      </div>
      <NewsGrid title="LifeStyle" data={Finance}></NewsGrid>
    </>
  );
};
