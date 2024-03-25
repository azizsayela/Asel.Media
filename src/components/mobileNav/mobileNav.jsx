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
      <div>
        <AiOutlineMenu
          className="icon"
          onClick={handleToggleNav}></AiOutlineMenu>
      </div>
      {toggleNav ? (
        <div className="sideBarWrapper">
          <IoClose className="closeIcon" onClick={handleToggleNav} />
          <ul className="itemWrapper">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>L'info en continu</a>
            </li>
            <li>
              <a>L'instant ASEL</a>
            </li>
            <li>
              <a>Diaspora</a>
            </li>
            <li>
              <a>Technology</a>
            </li>
            <li>
              <a>Sports</a>
            </li>
            <li>
              <a>Lifestyle</a>
            </li>
            <li>
              <a>Contenu Sponsorisés</a>
            </li>
            <li>
              <a>Contenus Partenaires</a>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};
