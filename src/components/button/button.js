import React from "react";
import "./button.scss"

export default function Button(props) {
  return (
    <div
      className={`${props.className || ""} btn hoverable`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}
