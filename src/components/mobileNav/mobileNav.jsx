import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import "./mobileNav.scss";
export const MobileNav = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <>
      <div className="navContainer">
        <div className="imageContainer">
          <a href="/">
            <img src={"assets/logo.png"} alt="asel Logo"></img>
          </a>
        </div>
        <div className="right">
          <AiOutlineMenu
            className="icon"
            onClick={handleToggleNav}></AiOutlineMenu>
        </div>
      </div>
      {toggleNav ? (
        <div className="sideBarWrapper">
          <IoClose className="closeIcon" onClick={handleToggleNav} />
          <ul className="itemWrapper">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/technology">L'info en continu</a>
            </li>
            <li>
              <a href="/L'instant ASEL">L'instant ASEL</a>
            </li>
            <li>
              <a href="/diaspora">Diaspora</a>
            </li>
            <li>
              <a href="/technology">Technology</a>
            </li>
            <li>
              <a href="/sports">Sports</a>
            </li>
            <li>
              <a href="lifestyle">Lifestyle</a>
            </li>
            <li>
              <a href="/Contenu Sponsorisés">Contenu Sponsorisés</a>
            </li>
            <li>
              <a href="/Contenus Partenaires">Contenus Partenaires</a>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};
