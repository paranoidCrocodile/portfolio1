import React from "react";
import "./education.scss";
import Icon from "../icon/icon";
import {
  faTrophy,
  faGraduationCap,
  faKeyboard
} from "@fortawesome/free-solid-svg-icons";
import { education } from "../../config.json";

export default function Education() {
  let iconObj = { faTrophy, faGraduationCap, faKeyboard };

  return (
    <div className="education">
      <h1 className="education-title">Education</h1>
      <div className="education-card-container">
        {education.cards.map((card) => (
          <div className="education-card" key={card.icon}>
            <h1>{card.title}</h1>
            <Icon icon={iconObj[card.icon]} />
            <p className="date">{card.date}</p>
            <p className="desc">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
