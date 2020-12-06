import React from "react";
import "./selectMenu.scss";
import Button from "../button/button";
import { $ } from "../util";

export default function SelectMenu(props) {
  const filterBy = (e) => {
    props.onSort(
      $(".selectMenu").classList.contains("hide") ? null : e.target.classList[0]
    );
  };

  return (
    <div className="selectMenu hide">
      {props.options.map((option) => (
        <Button className={option} key={option} onClick={(e) => filterBy(e)}>
          {option}
        </Button>
      ))}
    </div>
  );
}
