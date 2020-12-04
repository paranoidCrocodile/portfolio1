import React, { useContext } from "react";
import "./experience.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowMaximize,
  faServer,
  faTools
} from "@fortawesome/free-solid-svg-icons";
import StyleContext from "../context/context";

export default function Experience() {
  const { isDark } = useContext(StyleContext);
  const sortBy = (e) => {
    if(e.target.localName != "li") return;
  }

  return (
    <div className="experience">
      <h1 className="experience-title">Experience</h1>
      <div className="experience-card-container" onClick={(e) => sortBy(e)}>
        <div className="experience-card frontend">
          <FontAwesomeIcon icon={faWindowMaximize} className="icon" />
          <h1>Frontend</h1>
          <ul>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>React</li>
            <li>jQuery</li>
          </ul>
        </div>
        <div className="experience-card backend">
          <FontAwesomeIcon icon={faServer} className="icon" />
          <h1>Backend</h1>
          <ul>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="experience-card tools">
          <FontAwesomeIcon icon={faTools} className="icon" />
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
