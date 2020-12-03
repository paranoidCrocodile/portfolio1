import React from "react";
import ProjectCard from "../projectCard/projectCard";
import "./projects.scss";

export default function projects() {
  return (
    <div className="projects">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-card-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
