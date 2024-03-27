import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// pages
import { Home } from "./pages/home/Home";
import { Technologie } from "./pages/technology/technology.jsx";
import { Diaspora } from "./pages/diaspora/diaspora.jsx";
import { Sport } from "./pages/sports/sports.jsx";
import { Lifestyle } from "./pages/lifesyle/lifestyle.jsx";
import { SinglePost } from "./pages/singlePost/singlePost.jsx";

//components
import { NavbarTop } from "../src/components/navbar/NavbarTop.jsx";
import { NavBottom } from "./components/navbarBottom/NavBottom.jsx";
import { AdvertTop } from "./components/advertTop/AdvertTop.jsx";
import { MobileNav } from "./components/mobileNav/mobileNav.jsx";
import { HotLinx } from "./components/hotLinks/hotLinx.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./pages/home/home.scss";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1050);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div className="homeWrapper">
        <NavbarTop />
        {!isMobile ? <AdvertTop /> : null}
        {isMobile ? <MobileNav /> : <NavBottom />}
        {/* <HotLinx /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diaspora" element={<Diaspora />} />
          <Route path="/technology" element={<Technologie />} />
          <Route path="/sports" element={<Sport />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/Contenu Sponsorisés" element={<SinglePost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
