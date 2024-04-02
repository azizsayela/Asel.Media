import React from "react";
import "./infoContinu.scss";
import { LastNews } from "../../components/categoryPage/lastNews";
import { NewsGrid } from "../../components/newsGrid/newsGrid";
import { Technology, Finance, Sports, HealthFitness } from "../../category";

export const InfoContinue = () => {
  return (
    <>
      <div className="wrapper">
        <LastNews data={HealthFitness}></LastNews>
      </div>
      <NewsGrid title="LifeStyle" data={Finance}></NewsGrid>
    </>
  );
};
