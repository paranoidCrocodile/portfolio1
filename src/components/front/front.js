import React from "react";
import Button from "../button/button";
import "./front.scss";
import { scrollTo } from "../util";

export default function Front() {
  return (
    <div className="front">
      <div className="front-card">
        <h1>Hello, I'm Croc!</h1>
        <p>A web developer for hire!</p>
        <Button className="resume" children="My Resume"/>
        <Button
          children="Contact me"
          onClick={() => scrollTo(".contacts:not(.btn)")}
          />
      </div>
    </div>
  );
}
