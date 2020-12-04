import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon(props) {
  return (
    <FontAwesomeIcon
      className={props.hoverable ? "icon hoverable" : "icon"}
      icon={props.icon}
    />
  );
}
