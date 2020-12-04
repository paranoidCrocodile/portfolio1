import React from "react";
import "./education.scss";
import Icon from "../icon/icon";
import {
  faTrophy,
  faGraduationCap,
  faKeyboard
} from "@fortawesome/free-solid-svg-icons";

export default function Education() {
  return (
    <div className="education">
      <h1 className="education-title">Education</h1>
      <div className="education-card-container">
        <div className="education-card">
          <Icon icon={faGraduationCap} />
          <h1>
            Lorem Ipsum dolor
            <p className="date">2015-2020</p>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              dolor, vero architecto
            </p>
          </h1>
        </div>
        <div className="education-card">
          <Icon icon={faTrophy} />
          <h1>
            Lorem Ipsum dolor
            <p className="date">2020</p>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              dolor, vero architecto
            </p>
          </h1>
        </div>
        <div className="education-card">
          <Icon icon={faKeyboard} />
          <h1>
            Lorem Ipsum dolor
            <p className="date">2021 - </p>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              dolor, vero architecto
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
}
