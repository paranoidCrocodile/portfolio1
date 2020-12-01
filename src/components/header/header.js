import React, { useContext, useState } from "react";
import StyleContext from "../context/context";
import "./header.scss";
import Button from "../button/button";
import { $ } from "../util";
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

  const hideMenu = () => $(".header").classList.replace("show", "hide");

  return (
    <header className={isDark ? "header dark-mode show" : "header show"}>
      <div className="header-logo">
        <FontAwesomeIcon icon={faCode}/>
      </div>
      <div className="header-separator"></div>
      <ul className="header-menu">
        <li>
          <a href="#education" onClick={() => hideMenu()}>
            Education
          </a>
        </li>
        <li>
          <a href="#Experience" onClick={() => hideMenu()}>
            Experience
          </a>
        </li>
        <li>
          <a href="#Projects" onClick={() => hideMenu()}>
            Projects
          </a>
        </li>
        <li>
          <a href="#Contacts" onClick={() => hideMenu()}>
            Contacts
          </a>
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
