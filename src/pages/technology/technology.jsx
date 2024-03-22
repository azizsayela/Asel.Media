import React from "react";
import { LastNews } from "../../components/categoryPage/lastNews";
import "./technology.scss";
import { Technology, Finance, Sports } from "../../category";
import { NewsGrid } from "../../components/newsGrid/newsGrid";

export const Technologie = () => {
  return (
    <>
      <div className="wrapper">
        <LastNews data={Technology}></LastNews>
      </div>
      <NewsGrid title="Technology" data={Finance}></NewsGrid>
    </>
  );
};
