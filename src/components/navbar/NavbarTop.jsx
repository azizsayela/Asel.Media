import React, { useState, useEffect } from "react";
import "./navbarTop.scss";
// icons
import { MdLocationOn, MdLanguage } from "react-icons/md";
import { WiDayCloudy } from "react-icons/wi";
import { BiCalendar } from "react-icons/bi";
import { IoMdPerson } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

export const NavbarTop = () => {
  const [dropDown, setdropDown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    fetchCountryData();
    fetchWeatherData();
    // Set current date
    const today = new Date();
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    setDate(today.toLocaleDateString("fr-FR", options));

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1050);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDropDown = (e) => {
    setdropDown(!dropDown);
  };

  const fetchCountryData = () => {
    // Fetch user country data from API
    fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=680928b7a1ec45c1a37d71844085432e`
    )
      .then((response) => response.json())
      .then((data) => {
        setCountry(data.country_name);
      })
      .catch((error) => console.log("Error fetching country data: ", error));
  };

  const fetchWeatherData = () => {
    // Fetch weather data from OpenWeatherMap API
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        country || "Tunisia"
      }&appid=fbd38649e21dccd7a1c308418c5f8900&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        // Extract temperature from response
        const temperature = data.main.temp;
        setWeather(temperature);
      })
      .catch((error) => console.log("Error fetching weather data: ", error));
  };

  return (
    <div className="navbarTop">
      {/* {!isMobile && ( */}
      <div className="navbarContainer">
        <div className="left">
          <div className="item">
            <MdLocationOn style={{ fontSize: "16px" }}></MdLocationOn>
            <span>{country}</span>
          </div>
          <div className="item">
            <WiDayCloudy style={{ fontSize: "16px" }}></WiDayCloudy>
            <span>{weather} C°</span>
          </div>
          <div className="item">
            <BiCalendar style={{ fontSize: "16px" }}></BiCalendar>
            <span>{date}</span>
          </div>
        </div>
        <div className="right">
          {/* <div className="item" onClick={handleDropDown}>
              <MdLanguage style={{ fontSize: "16px" }}></MdLanguage>
              <span>English</span>
              <FaChevronDown style={{ fontSize: "16px" }}></FaChevronDown>
            </div> */}
          {/* <div className="item">
              <IoMdPerson style={{ fontSize: "16px" }} />
              <span>Login / Register</span>
            </div> */}
          <div className="icons">
            <BiLogoFacebookSquare
              style={{
                fontSize: "16px",
              }}
            ></BiLogoFacebookSquare>
            <FaInstagram
              style={{ fontSize: "16px", cursor: "pointer" }}
            ></FaInstagram>
            <BsYoutube
              style={{ fontSize: "16px", cursor: "pointer" }}
            ></BsYoutube>
          </div>
          {/* {dropDown && (
              <div className="dropDownMenu">
                <li>
                  <a>English</a>
                </li>
                <li>
                  <a>Frensh</a>
                </li>
              </div>
            )} */}
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default NavbarTop;
