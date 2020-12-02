import React, { useContext } from "react";
import Button from "../button/button";
import "./front.scss";
import StyleContext from "../context/context";

export default function Front() {
  const { isDark }= useContext(StyleContext);
  return (
    <div className={isDark ? "front dark-mode" : "front"}>
      <div className="front-card">
        <h1>Hello, I'm Croc!</h1>
        <p>A web developer for hire!</p>
        <Button className="btn resume" children="My Resume"/>
        <Button children="Contact me"/>
      </div>
    </div>
  );
}
