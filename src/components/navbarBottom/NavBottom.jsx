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
              }}>
              <span>{item}</span>
            </a>
          );
        })}
        <div className="item">
          <BiSearchAlt style={{ fontSize: "18x" }}></BiSearchAlt>
        </div>
      </div>
    </div>
  );
};
