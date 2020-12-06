import React from "react";
import Icon from "../icon/icon";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import "./projectCard.scss";

export default function ProjectCard(props) {
  const getImage = require.context("../../assets/img", false, /.jpg$/i);

  return (
    <div className={"projects-card " + props.category.join(" ")}>
      <h1>{props.name}</h1>
      <img src={getImage(`./${props.img}`)} />
      <div className="links-container">
        <a href={props.repoLink} className="repo" target="_blank">
          <Icon icon={faGithub} hoverable={true} />
        </a>
        <a href={props.demoLink} className="demo" target="_blank">
          <Icon icon={faLaptopCode} hoverable={true} />
        </a>
      </div>
    </div>
  );
}
