import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./icon.scss";

export default function Icon(props) {
  return (
    <FontAwesomeIcon
      className="icon"
      icon={props.icon}
    />
  );
}
