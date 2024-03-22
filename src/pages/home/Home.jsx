import React from "react";
import { MainContent } from "../../components/mainContent/mainContent";
import { MainBody } from "../../components/mainBody/mainBody";
import PhotoGal from "../../components/photoGal/PhotoGal";
import AudioVideo from "../../components/audioVideo/AudioVideo";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="homeWrapper">
        <MainContent></MainContent>
        <MainBody></MainBody>
        <AudioVideo></AudioVideo>
        <PhotoGal></PhotoGal>
      </div>
    </div>
  );
};
