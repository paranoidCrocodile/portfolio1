import React from "react";
import "./experience.scss";
import Icon from "../icon/icon";
import {
  faWindowMaximize,
  faServer,
  faTools
} from "@fortawesome/free-solid-svg-icons";

export default function Experience() {
  const sortBy = (e) => {
    if(e.target.localName != "li") return;
  }

  return (
    <div className="experience">
      <h1 className="experience-title">Experience</h1>
      <div className="experience-card-container" onClick={(e) => sortBy(e)}>
        <div className="experience-card frontend hoverable">
          <Icon icon={faWindowMaximize}/>
          <h1>Frontend</h1>
          <ul>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>React</li>
            <li>jQuery</li>
          </ul>
        </div>
        <div className="experience-card backend hoverable">
          <Icon icon={faServer}/>
          <h1>Backend</h1>
          <ul>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="experience-card tools hoverable">
          <Icon icon={faTools}/>
          <h1>Tools</h1>
          <ul>
            <li>Git</li>
            <li>Sass</li>
            <li>Gulp</li>
            <li>Webpack</li>
            <li>ESLint</li>
            <li>Babel</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
