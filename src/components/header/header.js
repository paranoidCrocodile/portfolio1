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
import { header } from "../../config.json";

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
        {header.buttons.map((button) => (
          <Button
            className={button.className}
            children={button.children}
            key={button.className}
            onClick={(e) => smoothScroll(e)}
          />
        ))}
        <Button className="header-button" onClick={() => changeTheme()}>
          <Icon hoverable={true} icon={isDark ? faMoon : faSun} />
        </Button>
      </ul>
      <Button
        className="header-menu-btn"
        onClick={() => {
          $(".header-menu").classList.toggle("showMenu");
          toggleMenu(!showMenu);
        }}
      >
        <Icon hoverable={true} icon={showMenu ? faBars : faTimes} />
      </Button>
    </header>
  );
}
