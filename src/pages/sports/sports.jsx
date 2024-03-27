import React from "react";
import { LastNews } from "../../components/categoryPage/lastNews";
import { NewsGrid } from "../../components/newsGrid/newsGrid";
import { Technology, Finance, Sports, HealthFitness } from "../../category";

import "./sport.scss";

export const Sport = () => {
  return (
    <>
      <div className="wrapper">
        <LastNews data={Sports}></LastNews>
      </div>
      <NewsGrid title="Sport" data={Finance}></NewsGrid>
    </>
  );
};
