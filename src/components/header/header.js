import React, { useContext, useState } from "react";
import StyleContext from "../context/context";
import "./header.scss";
import Button from "../button/button";
import { $, scrollTo } from "../util";
import Icon from "../icon/icon";
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
    $(".header-menu").classList.toggle("showMenu");
    toggleMenu(!showMenu);
    scrollTo(`.${e.target.classList[0]}:not(.btn)`);
  };

  return (
    <header className="header show">
      <div className="header-logo">
        <Icon icon={faCode} />
      </div>
      <div className="header-separator"></div>
      <ul className="header-menu">
        <Button
          className="education"
          children="Education"
          onClick={(e) => smoothScroll(e)}
        />
        <Button
          className="experience"
          children="Experience"
          onClick={(e) => smoothScroll(e)}
        />
        <Button
          className="projects"
          children="Projects"
          onClick={(e) => smoothScroll(e)}
        />
        <Button
          className="contacts"
          children="Contacts"
          onClick={(e) => smoothScroll(e)}
        />
        <Button className="header-button" onClick={() => changeTheme()}>
          <Icon hoverable={true} icon={isDark ? faMoon : faSun}/>
        </Button>
      </ul>
      <Button
        className="header-menu-btn"
        onClick={() => {
          $(".header-menu").classList.toggle("showMenu");
          toggleMenu(!showMenu);
        }}
      >
        <Icon hoverable={true} icon={showMenu ? faTimes : faBars}/>
      </Button>
    </header>
  );
}
