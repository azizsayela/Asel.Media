import React, { useState } from "react";
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

  const handleDropDown = (e) => {
    setdropDown(!dropDown);
  };

  return (
    <div className="navbarTop">
      <div className="navbarContainer">
        <div className="left">
          <div className="item">
            <MdLocationOn style={{ fontSize: "16px" }}></MdLocationOn>
            <span>Tunisia</span>
          </div>
          <div className="item">
            <WiDayCloudy style={{ fontSize: "16px" }}></WiDayCloudy>
            <span>21 C</span>
          </div>
          <div className="item">
            <WiDayCloudy style={{ fontSize: "16px" }}></WiDayCloudy>
            <span>21 C</span>
          </div>
          <div className="item">
            <BiCalendar style={{ fontSize: "16px" }}></BiCalendar>
            <span>Today (Monday 18 Mars 2024)</span>
          </div>
        </div>
        <div className="right">
          <div className="item" onClick={handleDropDown}>
            <MdLanguage style={{ fontSize: "16px" }}></MdLanguage>
            <span>English</span>
            <FaChevronDown style={{ fontSize: "16px" }}></FaChevronDown>
          </div>
          <div className="item">
            <IoMdPerson style={{ fontSize: "16px" }} />
            <span>Login / Register</span>
          </div>
          <div className="icons">
            <BiLogoFacebookSquare
              style={{
                fontSize: "16px",
              }}></BiLogoFacebookSquare>
            <FaInstagram
              style={{ fontSize: "16px", cursor: "pointer" }}></FaInstagram>
            <BsYoutube
              style={{ fontSize: "16px", cursor: "pointer" }}></BsYoutube>
          </div>
          {dropDown && (
            <div className="dropDownMenu">
              <li>
                <a>English</a>
              </li>
              <li>
                <a>Frensh</a>
              </li>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
