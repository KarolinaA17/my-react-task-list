import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "../../styles/stylebuttons.css";

export default function UpdateButton() {
  return (
    <button className="updateButton">
      <FontAwesomeIcon icon={faPen} />
    </button>
  );
}
