import React, { useState, useEffect } from "react";
import ProjectCard from "../projectCard/projectCard";
import SelectMenu from "../selectMenu/selectMenu";
import Button from "../button/button";
import Icon from "../icon/icon";
import { faFilter, faTimes } from "@fortawesome/free-solid-svg-icons";
import { $, $$, replaceClass } from "../util";
import { projects } from "../../config.json";
import "./projects.scss";

export default function Projects() {
  const sortMenu = () => {
    replaceClass({
      elem: $(".selectMenu"),
      trueClass: "show",
      falseClass: "hide",
      condFunc: () => $(".selectMenu").classList.contains("hide")
    });
    changeMenu(!showMenu);
  };

  const [sortKey, changeSort] = useState("all");
  const [showMenu, changeMenu] = useState(false);
  const [sorted, sortedRecently] = useState(false);

  const sortBy = (sortValue) => {
    sortValue ? changeSort(sortValue) : null;
    sortedRecently(true);
  };

  useEffect(() => {
    sorted
      ? $$(".projects-card").forEach((card) =>
          card.classList.contains(sortKey)
            ? card.classList.remove("hide")
            : card.classList.add("hide")
        )
      : null;
    sortedRecently(false);
  });

  return (
    <div className="projects">
      <h1 className="projects-title">{projects.title}</h1>
      <Button onClick={() => sortMenu()}>
        <Icon icon={showMenu ? faTimes : faFilter} hoverable={true} />
      </Button>
      <SelectMenu
        options={["HTML", "CSS", "JS", "React", "jQuery", "NodeJS"]}
        onSort={sortBy}
      />
      <div className="projects-card-container">
        {projects.cards.map((card) => (
          <ProjectCard
            name={card.name}
            description={card.description}
            repoLink={card.repoLink}
            demoLink={card.demoLink}
            img={card.img}
            category={card.category}
            key={card.category}
          />
        ))}
      </div>
    </div>
  );
}
