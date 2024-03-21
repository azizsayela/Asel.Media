
import React from "react";
import { NavbarTop } from "../../components/navbar/NavbarTop";
import { AdvertTop } from "../../components/advertTop/AdvertTop";
import { NavBottom } from "../../components/navbarBottom/NavBottom";
import { HotLinx } from "../../components/hotLinks/hotLinx";
import { MainContent } from "../../components/mainContent/mainContent";
import PhotoGal from "../../components/photoGal/PhotoGal";
import AudioVideo from "../../components/audioVideo/AudioVideo";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="homeWrapper">
        <NavbarTop></NavbarTop>
        <AdvertTop></AdvertTop>
        <NavBottom></NavBottom>
        <HotLinx></HotLinx>
        <MainContent></MainContent>
        <AudioVideo></AudioVideo>
        <PhotoGal></PhotoGal>
      </div>
    </div>
  );
};

