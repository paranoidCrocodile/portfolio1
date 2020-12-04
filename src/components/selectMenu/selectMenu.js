import React from "react";
import "./selectMenu.scss";
import Button from "../button/button";

export default function SelectMenu(props) {
  const filterBy = (e) => {
    console.log(e.target.classList[0]);
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
