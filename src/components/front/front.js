import React from "react";
import Button from "../button/button";
import "./front.scss";
import { scrollTo } from "../util";
import { front } from "../../config.json";

export default function Front() {
  return (
    <div className="front">
      <div className="front-card">
        <h1>{front.title}</h1>
        <p>{front.subtitle}</p>
        <Button className="resume" children="My Resume" />
        <Button
          children="Contact me"
          onClick={() => scrollTo(".contacts:not(.btn)")}
        />
      </div>
    </div>
  );
}
