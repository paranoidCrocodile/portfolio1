import React from "react";
import Icon from "../icon/icon";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import "./projectCard.scss";

export default function ProjectCard(props) {
  const getImage = require.context("../../assets/img", false, /.jpg$/i);

  return (
    <div className={"projects-card " + props.category.join(" ")}>
      <img src={getImage(`./${props.img}`)}/>
      <div className="projects-card-caption-container">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <a href={props.repoLink} className="repo" target="_blank">
          <Icon icon={faGithub} />
        </a>
        <a href={props.demoLink} className="demo" target="_blank">
          <Icon icon={faLaptopCode} />
        </a>
      </div>
    </div>
  );
}
