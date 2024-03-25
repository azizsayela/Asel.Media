import React, { useState, useEffect, useRef } from "react";
//icons
import {
  MdKeyboardArrowDown,
  MdNavigateNext,
  MdVisibility,
  MdStarBorder,
  MdFlashOn,
} from "react-icons/md";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { HiViewGrid } from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi";
import "./navbarBottom.scss";

const Items = [
  "Home",
  "L'info en continu",
  "L'instant ASEL",
  "Diaspora",
  "Technology",
  "Sports",
  "Lifestyle",
  "Contenu Sponsorisés",
  "Contenus Partenaires",
];

export const NavBottom = () => {
  const [selectedDropdown, setSelectedDropdown] = useState({
    Index: null,
  });
  const dropdownRef = useRef(null);

  const handleDropdown = (index) => {
    setSelectedDropdown((prevState) => ({ ...prevState, Index: index }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSelectedDropdown((prevState) => ({ ...prevState, Index: null }));
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbarBottom" ref={dropdownRef}>
      <div className="navbarBottomWrapper">
        {Items.map((item, index) => {
          return (
            <a
              style={{ color: "#FFFFFF", textDecoration: "none" }}
              href={item != "Home" ? `${item}` : "/"}
              key={index}
              className="item"
              onClick={() => {
                handleDropdown(index);
              }}
            >
              <span>{item}</span>
              {/* <MdKeyboardArrowDown
                style={{ fontSize: "18px" }}></MdKeyboardArrowDown> */}
            </a>
          );
        })}
        {/* {selectedDropdown.Index === 0 && (
          <div className="dropDown" style={{ left: 20, marginTop: "40px" }}>
            <span>
              <a>Home Default</a>
            </span>
            <span>
              <a>Home Boexed</a>
            </span>
            <span>
              <a>Home RTL boxed</a>
            </span>
          </div>
        )} */}
        {selectedDropdown.Index === 1 && (
          <div className="dropDownMenu2">
            <div className="dropDownMenu2Wrapper">
              <div className="left">
                <span className="item">All</span>
                <span className="item">Latin America</span>
                <span className="item">Africe</span>
                <span className="item">Middle East</span>
                <span className="item">Europe</span>
              </div>
              <div className="right">
                <div className="topRight">
                  <div className="item">
                    <div className="itemHeader">
                      <h2 style={{ fontSize: "16px" }}>Beach</h2>
                      <MdStarBorder></MdStarBorder>
                    </div>
                    <img src={"assets/post-01.jpg"}></img>
                    <h2 style={{ fontSize: "14px", marginTop: "8px" }}>
                      Lorem ipsum dolor sit amet consectetur{" "}
                    </h2>
                  </div>
                  <div className="item">
                    <div className="itemHeader">
                      <h2 style={{ fontSize: "16px" }}> News</h2>
                      <MdVisibility></MdVisibility>
                    </div>
                    <img src={"assets/post-02.jpg"}></img>
                    <h2 style={{ fontSize: "14px", marginTop: "8px" }}>
                      Lorem ipsum dolor sit amet consectetur{" "}
                    </h2>
                  </div>
                  <div className="item">
                    <div className="itemHeader">
                      <h2 style={{ fontSize: "16px" }}> Ice Hiking</h2>
                      <MdFlashOn></MdFlashOn>
                    </div>
                    <img src={"assets/post-03.jpg"}></img>
                    <h2 style={{ fontSize: "14px", marginTop: "8px" }}>
                      Lorem ipsum dolor sit amet consectetur{" "}
                    </h2>
                  </div>
                  <div className="item">
                    <div className="itemHeader">
                      <h2 style={{ fontSize: "16px" }}> Mountain</h2>
                      <MdStarBorder></MdStarBorder>
                    </div>
                    <img src={"assets/post-04.jpg"}></img>
                    <h2 style={{ fontSize: "14px", marginTop: "8px" }}>
                      Lorem ipsum dolor sit amet consectetur{" "}
                    </h2>
                  </div>
                </div>
                <div className="bottomRight"></div>
              </div>
            </div>
          </div>
        )}
        <div className="item">
          <BiSearchAlt style={{ fontSize: "18x" }}></BiSearchAlt>
        </div>
      </div>
    </div>
  );
};
