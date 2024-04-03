import React, { useEffect, useState } from "react";
import { StylOne } from "../stylOne/stylOne";
import { StyleTwo } from "../styleTwo/styleTwo";
import { Widget } from "../../components/widget/Widget";
import "./mainBody.scss";
import {
  WorldNews,
  Technology,
  Finance,
  Sports,
  HealthFitness,
  LifeStyle,
} from "../../category";

// SanityServices
import { FetchNews } from "../../services/sanityService";

export const MainBody = () => {
  const [sportsArticles, setSportsArticles] = useState([]);
  const [techArticles, setTechArticles] = useState([]);
  const [diasporaArticles, setDiasporaArticles] = useState([]);
  const [lifeStyleArticles, setLifeStyleArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sportArticles = await FetchNews("sports");
        setSportsArticles(sportArticles);
        const techArticles = await FetchNews("technology");
        setTechArticles(techArticles);
        const diaspoArticles = await FetchNews("diaspora");
        setDiasporaArticles(diaspoArticles);
        const lifeStyleArticles = await FetchNews("lifeStyle");
        setLifeStyleArticles(lifeStyleArticles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="mainBody">
      <div className="mainBodyWrapper">
        <div className="item">
          <StylOne articles={diasporaArticles} category={"Diaspora"}></StylOne>
        </div>
        <div className="item">
          <StyleTwo category="Tech & éco" articles={techArticles}></StyleTwo>
        </div>
        <div className="item">
          <Widget></Widget>
        </div>
      </div>
      <div className="mainBodyWrapper">
        <div className="item">
          <Widget></Widget>
        </div>
        <div className="item">
          <StylOne
            articles={lifeStyleArticles}
            category={"Life Style"}
          ></StylOne>
        </div>
        <div className="item">
          <StyleTwo
            category="Sports"
            articles={sportsArticles}
            // {...Sports}
          ></StyleTwo>
        </div>
      </div>
    </div>
  );
};
