import React from "react";
import ProjectCard from "../projectCard/projectCard";
import SelectMenu from "../selectMenu/selectMenu";
import Button from "../button/button";
import Icon from "../icon/icon";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { $, replaceClass } from "../util";
import "./projects.scss";

export default function projects() {
  const sortMenu = () =>
    replaceClass({
      elem: $(".projects-sort .selectMenu"),
      trueClass: "show",
      falseClass: "hide",
      condFunc: () => $(".projects-sort .selectMenu").classList.contains("hide")
    });

  return (
    <div className="projects">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-sort">
        <Button onClick={() => sortMenu()}>
          <Icon icon={faFilter} hoverable={true} />
        </Button>
        <SelectMenu
          options={["HTML", "CSS", "JavaScript", "React", "jQuery", "Node.js"]}
        />
      </div>
      <div className="projects-card-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
