import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// pages
import { Home } from "./pages/home/Home";
import { Technologie } from "./pages/technology/technology.jsx";
import { Diaspora } from "./pages/diaspora/diaspora.jsx";
import { Sports } from "./pages/sports/sports.jsx";
import { Lifestyle } from "./pages/lifesyle/lifestyle.jsx";

//components
import { NavbarTop } from "../src/components/navbar/NavbarTop.jsx";
import { NavBottom } from "./components/navbarBottom/NavBottom.jsx";
import { AdvertTop } from "./components/advertTop/AdvertTop.jsx";
import { HotLinx } from "./components/hotLinks/hotLinx.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./pages/home/home.scss";

function App() {
  return (
    <Router>
      <div className="homeWrapper">
        <NavbarTop />
        <AdvertTop />
        <NavBottom />
        <HotLinx />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diaspora" element={<Diaspora />} />
          <Route path="/technology" element={<Technologie />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
