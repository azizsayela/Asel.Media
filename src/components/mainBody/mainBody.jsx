import React from "react";
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

export const MainBody = () => {
  return (
    <div className="mainBody">
      <div className="mainBodyWrapper">
        <div className="item">
          <StylOne {...LifeStyle}></StylOne>
        </div>
        <div className="item">
          <StyleTwo {...HealthFitness}></StyleTwo>
        </div>
        <div className="item">
          <Widget></Widget>
        </div>
      </div>
      <div style={{ marginTop: "40px" }}>
        <div className="mainBodyWrapper">
          <div className="item">
            <Widget></Widget>
          </div>
          <div className="item">
            <StylOne {...Finance}></StylOne>
          </div>
          <div className="item">
            <StyleTwo {...Sports}></StyleTwo>
          </div>
        </div>
      </div>
    </div>
  );
};
