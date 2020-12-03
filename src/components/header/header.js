import React, { useContext, useState } from "react";
import StyleContext from "../context/context";
import "./header.scss";
import Button from "../button/button";
import { $, scrollTo } from "../util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faSun,
  faMoon,
  faBars,
  faCode
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const { isDark, changeTheme } = useContext(StyleContext);
  const [showMenu, toggleMenu] = useState(true);

  const smoothScroll = (e) => {
    $(".header").classList.replace("show", "hide");
    scrollTo(`.${e.target.classList[0]}:not(.btn)`);
  };

  return (
    <header className={isDark ? "header dark-mode show" : "header show"}>
      <div className="header-logo">
        <FontAwesomeIcon icon={faCode} />
      </div>
      <div className="header-separator"></div>
      <ul className="header-menu">
        <li>
          <Button
            className="education"
            children="Education"
            onClick={(e) => smoothScroll(e)}
          />
        </li>
        <li>
          <Button
            className="experience"
            children="Experience"
            onClick={(e) => smoothScroll(e)}
          />
        </li>
        <li>
          <Button
            className="projects"
            children="Projects"
            onClick={(e) => smoothScroll(e)}
          />
        </li>
        <li>
          <Button
            className="contacts"
            children="Contacts"
            onClick={(e) => smoothScroll(e)}
          />
        </li>
        <Button className="header-button" onClick={() => changeTheme()}>
          <FontAwesomeIcon icon={isDark ? faMoon : faSun} />
        </Button>
      </ul>
      <Button
        className="header-menu-btn"
        onClick={() => {
          $(".header-menu").classList.toggle("showMenu");
          toggleMenu(!showMenu);
        }}
      >
        <FontAwesomeIcon icon={showMenu ? faBars : faTimes} />
      </Button>
    </header>
  );
}
